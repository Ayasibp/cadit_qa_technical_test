import express from "express"

import { getMovie, getMovies } from "../../controllers/movie.controller.js"

const router = express.Router()

router.route("/").get(getMovies)

router.route("/:movieName").get(getMovie)

export default router
