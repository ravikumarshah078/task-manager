# task-manager

setps to run:
1. npm install
2. npm start : to run locally.
3. you can easily see the outcomes using postman.

routes:

    GET: http://localhost:3000/api/v1/tasks 
        retrun all task.
    POST: http://localhost:3000/api/v1/tasks 
            post woth json body like 
                {
                    "name": "your entry",
                    "complete": true, // boolean value
                }
    GET: http://localhost:3000/api/v1/tasks/id
            return single task matches with id.
    
    PATCH: http://localhost:3000/api/v1/tasks/id 
            send with json body
            return patched task.
        
    DELETE: http://localhost:3000/api/v1/tasks/id
            delete the task with id
            
