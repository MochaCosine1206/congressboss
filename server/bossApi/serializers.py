from rest_framework import serializers
from bossApi.models import Members, Biographies

# Biography Serializer

class BiographiesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Biographies
        json_data = serializers.JSONField()
        fields = ('__all__')


# Members Serializer

class MembersSerializer(serializers.ModelSerializer):
    bio = BiographiesSerializer(many=True, read_only=True)
    class Meta:
        model = Members
        json_data = serializers.JSONField()
        fields = ('__all__')

        