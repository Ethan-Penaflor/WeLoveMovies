const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCriticInfo = mapProperties({
    critic_id: "critic.critic_id",
    preferred_name: "critic.preferred_name",
    surname: "critic.surname",
    organization_name: "critic.organization_name",
    created_at: "critic.created_at",
    updated_at: "critic.updated_at",
});

function listIfShowing() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .select("m.*")
        .groupBy("m.movie_id")
        .where({ "mt.is_showing": true });
}

function list(is_showing) {
    if (is_showing === "true") {
        return listIfShowing();
    }
    return knex("movies").select("*");
}

function read(movieId) {
    return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function listTheatersByMovie(movieId) {
    return knex("movies_theaters as mt")
        .join("theaters as t", "mt.theater_id", "t.theater_id")
        .select("t.*")
        .where({ "mt.movie_id": movieId })
        .distinct();
}

function listReviewsByMovie(movieId) {
    return knex("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select("r.*", "c.*")
        .where({ "r.movie_id": movieId })
        .then((reviews) => reviews.map(addCriticInfo));
}

module.exports = {
    list,
    listIfShowing,
    listTheatersByMovie,
    listReviewsByMovie,
    read,
};