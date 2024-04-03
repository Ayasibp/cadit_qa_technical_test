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
export { findAll, FindMovieDetailByID }
