if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const notFound = require("./errors/notFound");

app.use(cors({
  origin: 'https://starter-movie-front-end-s8kp.onrender.com' // Replace with your frontend URL
}));

app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);

app.use((error, req, res, next) => {
  const { status = 500, message = "error" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
