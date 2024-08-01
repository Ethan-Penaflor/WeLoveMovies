const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const data = await moviesService.list(req.query.is_showing);
    res.json({ data });
}

async function read(req, res, next) {
    const { movie: data } = res.locals;
    res.json({ data });
}

async function movieExists(req, res, next) {
    const movie = await moviesService.read(req.params.movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    return next({ status: 404, message: `Movie cannot be found.` });
}

async function listTheatersByMovie(req, res, next) {
    const { movieId } = req.params;
    const data = await moviesService.listTheatersByMovie(movieId);
    res.json({ data });
}

async function listReviewsByMovie(req, res, next) {
    const { movieId } = req.params;
    const data = await moviesService.listReviewsByMovie(movieId);
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    listTheatersByMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listTheatersByMovie)],
    listReviewsByMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listReviewsByMovie)],
    read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
};
