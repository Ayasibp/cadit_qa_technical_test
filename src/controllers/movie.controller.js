import httpStatus from "http-status"

import * as errors from "../utils/api-error.js"
import * as reponse from "../middlewares/response-handler.js"
import { findAll } from "../services/movie.service.js"

const responseHandler = reponse.default

const { NotFoundError } = errors.default

const getMovies = async (req, res) => {
  const movies = await findAll()
  res.status(httpStatus.OK).send(responseHandler(movies))
}

export { getMovies }
