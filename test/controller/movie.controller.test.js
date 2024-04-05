import httpStatus from "http-status"
import * as errors from "../../src/utils/api-error.js"
import * as response from "../../src/middlewares/response-handler.js"
import {
  findAll,
  FindMovieDetailByID,
  createMovie,
  DeleteMovie,
} from "../../src/services/movie.service.js"
import {
  getMovies,
  getMovie,
  addMovie,
  deleteMovie,
} from "../../src/controllers/movie.controller.js"

// Mock responseHandler
jest.mock("../../src/middlewares/response-handler.js", () => ({
  __esModule: true,
  default: jest.fn(), // Mock the default export
}))

// Mock service functions
jest.mock("../../src/services/movie.service.js", () => ({
  findAll: jest.fn(),
  FindMovieDetailByID: jest.fn(),
  createMovie: jest.fn(),
  DeleteMovie: jest.fn(),
}))

// Mock response object
const mockResponse = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
}

describe("Movie Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks() // Clear mock function calls before each test
  })

  describe("getMovies", () => {
    it("should return all movies", async () => {
      const movies = [{ title: "Movie 1" }, { title: "Movie 2" }]
      findAll.mockResolvedValue(movies)

      await getMovies({}, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.OK)
      expect(response.default).toHaveBeenCalledWith(movies) // Use response.default for the mock
      expect(mockResponse.send).toHaveBeenCalled()
    })
  })

  describe("getMovie", () => {
    it("should return movie details if found", async () => {
      // Mocking the responseHandler function
      response.default.mockReturnValue({
        success: true,
        body: { title: "Test Movie" },
      })
      const movie = { title: "Movie 1" }
      FindMovieDetailByID.mockResolvedValue(movie)
      const mockReq = { params: { movieName: "MovieName" } }

      await getMovie(mockReq, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.OK)
      expect(response.default).toHaveBeenCalledWith(movie) // Use response.default for the mock
      expect(mockResponse.send).toHaveBeenCalled()
    })

    it("should throw NotFoundError if movie not found", async () => {
      FindMovieDetailByID.mockResolvedValue(null)
      const mockReq = { params: { movieName: "UnknownMovie" } }

      await expect(getMovie(mockReq, mockResponse)).rejects.toThrow(
        errors.NotFoundError
      )
    })
  })

  describe("addMovie", () => {
    it("should add a new movie", async () => {
      const movieDetail = { title: "New Movie" }
      createMovie.mockResolvedValue(movieDetail)
      const mockReq = {}

      await addMovie(mockReq, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.CREATED)
      expect(response.default).toHaveBeenCalledWith(movieDetail) // Use response.default for the mock
      expect(mockResponse.send).toHaveBeenCalled()
    })
  })

  describe("deleteMovie", () => {
    it("should delete a movie", async () => {
      const deletedMovie = { title: "Deleted Movie" }
      DeleteMovie.mockResolvedValue(deletedMovie)
      const mockReq = { params: { movieName: "MovieName" } }

      await deleteMovie(mockReq, mockResponse)

      expect(mockResponse.status).toHaveBeenCalledWith(httpStatus.CREATED)
      expect(response.default).toHaveBeenCalledWith(deletedMovie) // Use response.default for the mock
      expect(mockResponse.send).toHaveBeenCalled()
    })
  })
})
