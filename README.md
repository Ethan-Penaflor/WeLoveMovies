# project-WeLoveMovies
The project WeLoveMovies is a backend API built with RESTful architecture to handle HTTP requests from front-end client applications, which was designed by Thinkful. The server allows users to look upp movies, theaters, and reviews from the client app. It also allows the admin to update and delete reviews.

## Links
[server](https://welovemovies-1-wxjl.onrender.com/movies) deployed to Render (use the /movies, /theaters, or /reviews routes listed below)
[Client App](https://github.com/Thinkful-Ed/starter-movie-front-end) designed by [Thinkful](https://github.com/Thinkful-Ed/starter-movie-front-end)

## Technology
- JavaScript, Node.js, Express, PostgreSQL, Knex

## Installation

1. Fork and clone this repository.
2. Run npm install to install project dependencies.
3. Run npm start to start the server locally.

## Client Application
1. Go to Thinkful's [starter code on Github](https://github.com/Thinkful-Ed/starter-movie-front-end)
2. Fork and clone the repository.
3. Run npm install to install project dependencies.
4. Run `npm start' to start the client app locally.


### Routes
The API allows for the following routes:

Method | Route | Description
 -|-|-
| GET | /movies | Lists all movies.
| GET | /movies/:movieId | Reads a specific movie by movie_id.
| GET | /movies/:movieId/theaters | Lists all theaters that are playing a specific movie.
| GET | /movies/:movieId/reviews | Lists all reviews for a specific movie.
| GET | /theaters | Lists all theaters.
| GET | /reviews | Lists all reviews.
| PUT | /reviews/:reviewId | Updates a specific review by review_id.
| DELETE | /reviews/:reviewId | Deletes a specific review by review_id.