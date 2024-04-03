import express from "express"
import { Validator } from "express-json-validator-middleware"

import {
  addMovie,
  deleteMovie,
  getMovie,
  getMovies,
} from "../../controllers/movie.controller.js"
import { addMovieSchema } from "../../validations/movies-request.schema.js"

const router = express.Router()
const { validate } = new Validator()

router
  .route("/")
  .post(validate({ body: addMovieSchema }), addMovie)
  .get(getMovies)

router.route("/:movieName").get(getMovie).delete(deleteMovie)

export default router
