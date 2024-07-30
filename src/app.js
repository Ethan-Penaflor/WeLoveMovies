if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const notFound = require("./errors/notFound");

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build"))); // Adjust the path

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html")); // Adjust the path
});

app.use(notFound);

app.use((error, req, res, next) => {
    const { status = 500, message = "error" } = error;
    res.status(status).json({ error: message })
});

module.exports = app;
