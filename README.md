TODO List API (Manual)

I implement simple REST API (CRUD) using Node.js and Express.js

on GET api i simple return a varaible that help stores a list of added items
on GET by id api i use method find() to find an item from param id because i store it as an array of object
on POST api i push a new object to the array of object where object will have 3 keys "id" (to find) , "task" (name of task) and "status" (a status of task to track) 
on PUT api i use find() method again to find a target item for an update
on DELETE api i use findIndex() method since i will use splice() method to remove that object from by its index


**the step to run this application**

1. npm install
   
2. node todo-list-app.js
   
3. Example Request:
    
    GET: curl http://localhost:3000

    GET by ID: curl http://localhost:3000/:id

    POST: curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"task":"Learn Node.js"}'

    PUT: curl -X PUT http://localhost:3000/update/1 -H "Content-Type: application/json" -d '{"status": "completed"}'

    DELETE: curl -X DELETE http://localhost:3000/delete/:id
