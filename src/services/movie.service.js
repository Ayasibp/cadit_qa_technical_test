import db from "../models/index.js"

const { Movie } = db.db

const findAll = async () =>
  Movie.findAll({
    attributes: ["movies", "one_line"],
    limit: 100,
  })

export { findAll }
