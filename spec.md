# CongressBoss Ideas and Spec

### Ideas so far

- Description
    - I will call the ProPublica Congress API in django and store in multiple Super and Sub entity tables with postgres, and attempt to use django-entity to do it.
    - BONUS: integrate redis for faster data search, retrieval.
    - BONUS: integrate charts on the front end for comparing congressional members
    - BONUS: package with docker, docker compose

- Setup
    - Backend:
        - Django
        - DB: Postgresql
        - Redis?
        - django-entity?
    - FrontEnd:
        - React
        - Tailwind
        - Hicharts?

### Steps
1. [ ] Setup a Django APP with Postgres
    - Serializer?
    - Redis?
    - django-entity?
2. [ ] Watch Youtube video on how to integrate with React
3. [ ] Integrate React with Backend
    - [ ] Create Tests and mock Integration tests
4. [ ] Trigger GET API for congress members through Django
    - [ ] Split up member data for all members in Super-entity then distribute extra non-matching data into sub-entities for House and Senate.
5. [ ] Call data from client, serialized from back-end and display on the page.
6. [ ] Implement some kind of search mechanism
7. [ ] Create Logos
8. [ ] Test