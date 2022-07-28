# RPS

RPS is a slightly over-engineered Rock Paper Scissors game, implemented with Spring Boot and Angular.

## Running

To run the app, clone the repository, cd into `backend`, `./mvnw clean package`, then either run in intelli-j or `./mvnw spring-boot:run`. Then cd into `web`, run `npm install`, and then run `ng serve`.

A few things I still want to do:

- [] Switch to postgres from h2
- [] Make statistics page prettier!!
- [] Add some small animations to frontend
- [] Add user auth so multiple users can play game (maybe)
- [] Dockerize
- [] Test observability endpoints with Spring Boot Admin Server
