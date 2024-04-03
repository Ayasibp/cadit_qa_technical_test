import { where } from "sequelize"
import db from "../models/index.js"

const { Movie } = db.db

const findAll = async () =>
  Movie.findAll({
    attributes: ["movies", "one_line"],
    limit: 100,
  })

const FindMovieDetailByID = async (movieName) =>
  Movie.findAll({
    attributes: [
      "movies",
      "year",
      "genre",
      "rating",
      "one_line",
      "stars",
      "votes",
      "runtime",
      "gross",
    ],
    where: {
      movies: movieName,
    },
  })

const createMovie = async (data) => {
  const {
    movies,
    year,
    genre,
    rating,
    one_line,
    stars,
    votes,
    runtime,
    gross,
  } = data.body

  Movie.create({
    movies: movies,
    year: year,
    genre: genre,
    rating: rating,
    one_line: one_line,
    stars: stars,
    votes: votes,
    runtime: runtime,
    gross: gross,
  })

  //   Movie.query()
}
export { findAll, FindMovieDetailByID, createMovie }
