# CRUD App with Angular, NgRx and MongoDB

CRUD Application made with Angular that shows list of objects. Each item has category, name and possibiltiy to be deleted. Above list is form for new item submission. On top of container is switch that changes which category of items are shown.
Also added routing for info page and todo list that is realized via NgRx. List is stored in localStorage.

## How to start a project
---

### Server side

Server is using MongoDB

1.  Update connection link to database in ```server.ts``` file after commented line.
2.  Install nodes ```npm i```.
3.  Start DB ```npm run start:nodemon```.
4. You can use seed data from ```dataMongoDB.json``` file to get first data.
If everything is correct then it logs out `Application started on port 3004!`.

### Application

1. Run installation ```npm i```.
2. Start project ```ng serve```.