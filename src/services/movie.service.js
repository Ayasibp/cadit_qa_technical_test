import db from "../models/index.js"

const { Movie } = db.db

const findAll = async () => Movie.findAll({})

export { findAll }
