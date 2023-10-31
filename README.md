# LAB - Class 03

## Project: API Server

### Author: Jelani Rhinehart

### Problem Domain  

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard.

### Links and Resources

- [GitHub Actions ci/cd]()
- [back-end server url]()

### Setup

#### `.env` requirements

- PORT:enter-whatever-port-you-want
- DATABASE_URL=postgres-local-database-url

#### How to initialize/run your application

- `nodemon` (if installed) OR
- `npm start`

#### Features / Routes

- GET : `/food` - Fetches all the food
- GET : `/food/:id` - Fetches specific food
- POST : `/food` - Add food
- PUT : `/food/:id` - Update specific food
- DELETE : `/food/:id` - Delete specific food

- GET : `/clothes` - Fetches all the clothes
- GET : `/clothes/:id` - Fetches specific clothing item
- POST : `/clothes` - Add clothes
- PUT : `/clothes/:id` - Update specific clothing item
- DELETE : `/clothes/:id` - Delete specific clothing item

#### Tests

- How do you run tests?
`npm test`
- Any tests of note?
  - Tests to make sure CRUD operations are performing right
  - Error handling tests

#### UML

![Lab 3 UML](./src/assets/lab-3-uml.png)
