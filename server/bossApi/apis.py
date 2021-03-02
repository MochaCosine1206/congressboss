from bossApi.models import Members, Biographies
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import MembersSerializer, BiographiesSerializer
import requests

import os

API_KEY = os.environ['API_KEY']

class MembersViewSet(viewsets.ModelViewSet):
    """
        This is the Member viewset.
        It serializes normal crud functions and also
        has some special actions, such as populating initial
        data from the different sources of information.
    """
    queryset = Members.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MembersSerializer
    serializer = MembersSerializer()

    @action(detail=False)
    def populate_data(self, request):
        # This action populates the initial members data
        # I split it up into two queries to accomidate the
        # ProPublica API.
        house_url = "https://api.propublica.org/congress/v1/116/house/members.json"
        senate_url = "https://api.propublica.org/congress/v1/116/senate/members.json"
        headers = {
            "X-API-Key": API_KEY,
        }
        house_response = requests.get(house_url, headers=headers)
        senate_response = requests.get(senate_url, headers=headers)

        house_data = house_response.json()['results'][0]['members']
        house_set = set()
        house_result = []
        # Removing duplicates for those house members that have
        # more than one record.  (Thanks Justin Amash :|)
        for item in house_data:
            item['chamber'] = "House"
            if item['id'] not in house_set:
                house_set.add(item['id'])
                house_result.append(item)

        senate_data = senate_response.json()['results'][0]['members']
        senate_set = set()
        senate_result = []

        # Also removed dups here just in case.
        for item in senate_data:
            item['chamber'] = "Senate"
            if item['id'] not in senate_set:
                senate_set.add(item['id'])
                senate_result.append(item)

        member_data = house_result + senate_result

        serializer = MembersSerializer(data=member_data, many=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            data = serializer.data
            return Response(data)
        else:    
            data = serializer.errors
            return Response(data)


class BiographiesViewSet(viewsets.ModelViewSet):
    """
        This is the Biographies viewset.
        It serializes normal crud functions and also
        has some special actions, such as populating initial
        data from bioguide.congress.gov.
    """
    queryset = Biographies.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BiographiesSerializer

    @action(detail=False)
    def populate_data(self, request):
        # This action populates the initial members data
        # I split it up into two queries to accomidate the
        # ProPublica API.

        # Get member IDs
        members = MembersViewSet.as_view({'get': 'list'})(request._request)
        
        base_url = "https://bioguide.congress.gov/search/bio/"
        biographies = []
        #iterate through IDs and grab biographical data
        for member in members.data:
            member_id = member['id']
            bio_response = requests.get(base_url + member_id + '.json')

            bio_json = bio_response.json()['data']
            bio_data = {
                "member_id": bio_json['usCongressBioId'],
                "description" : bio_json['profileText']
            }

            biographies.append(bio_data)


        serializer = BiographiesSerializer(data=biographies, many=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            data = serializer.data
            return Response(data)
        else:    
            data = serializer.errors
            return Response(data)
