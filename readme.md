# Redis Auth

Basic auth service to learn a little bit about redis. 

There are only 2 endpoints available:

- POST /auth/signup - This route expects a username and a password and will enforce various rules including a minimum username length and password complexity. It will also verify that usernames are unique. Upon successfully POSTing to this endpoint a new user will be created in the redis data store.
- POST /auth/signin - This route expects a username and a password and will attempt to sign a user in by comparing their username and password with what is available in the DB.

To run:

1. Make sure you have a redis instance running on port 6379
2. Run `npm i` followed by `npm start`
