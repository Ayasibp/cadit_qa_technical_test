import httpStatus from "http-status"

import * as errors from "../utils/api-error.js"
import * as reponse from "../middlewares/response-handler.js"
import {
  findAll,
  FindMovieDetailByID,
  createMovie,
  DeleteMovie,
} from "../services/movie.service.js"

const responseHandler = reponse.default

const { NotFoundError } = errors.default

const getMovies = async (req, res) => {
  const movies = await findAll()
  res.status(httpStatus.OK).send(responseHandler(movies))
}

const getMovie = async (req, res) => {
  const movie = await FindMovieDetailByID(req.params.movieName)
  if (!movie) {
    throw new NotFoundError()
  }

  res.status(httpStatus.OK).send(responseHandler(movie))
}

const addMovie = async (req, res) => {
  const movieDetail = await createMovie(req)
  res.status(httpStatus.CREATED).send(responseHandler(movieDetail))
}

const deleteMovie = async (req, res) => {
  const movie = await DeleteMovie(req.params.movieName)

  res.status(httpStatus.CREATED).send(responseHandler(movie))
}

export { getMovies, getMovie, addMovie, deleteMovie }
