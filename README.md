# congressboss
### ***Incomplete*** Run at your own risk!!! 

This interview project includes a Django back-end with Postgresql and a React front end.

requirements:
NPM version 7.5.1
node version 15.8.0

Python 3.6.6
(see requirements.txt for other versions)


To install the Django App and populate the data:
1. Create a python environment (3.6.6) 
2. CD into the server folder and install the requirements.txt
3. run "python3 manage.py makemigrations bossApi"
4. run "python3 manage,py migrate"
5. run "python3 manage.py runserver" and confirm the server works.
6. To populate the data, open Postman and run [GET] "localhost:8000/apis/members/populate_data/".
7. Check the database to see if the "Member's" table is complete
8. Populate the Biography data by opening Postman and running [GET]"localhost:8000/apis/biographies/populate_data/"


To install the React client:
1. CD into the "client" file
2. run "npm install"
3. to run the client, run "npm start"
4. to run tests, run "npm tests"
 
