import db from "../../src/models/index.js"
import {
  findAll,
  FindMovieDetailByID,
  createMovie,
  DeleteMovie,
} from "../../src/services/movie.service.js"

// Mock the Movie model
jest.mock("../../src/models/index.js", () => ({
  db: {
    Movie: {
      findAll: jest.fn(),
      create: jest.fn(),
      destroy: jest.fn(),
    },
  },
}))

describe("Movie Service", () => {
  afterEach(() => {
    jest.clearAllMocks() // Clear mock function calls after each test
  })

  describe("findAll", () => {
    it("should return all movies", async () => {
      const mockMovies = [{ title: "Movie 1" }, { title: "Movie 2" }]
      db.db.Movie.findAll.mockResolvedValue(mockMovies)

      const result = await findAll()

      expect(result).toEqual(mockMovies)
    })
  })

  describe("FindMovieDetailByID", () => {
    it("should return movie details by ID", async () => {
      const movieName = "MovieName"
      const mockMovieDetail = {
        title: "MovieName",
        year: 2022,
        genre: "Action",
      }
      db.db.Movie.findAll.mockResolvedValue(mockMovieDetail)

      const result = await FindMovieDetailByID(movieName)

      expect(result).toEqual(mockMovieDetail)
    })
  })

  describe("createMovie", () => {
    it("should create a new movie", async () => {
      const mockMovieData = {
        body: {
          movies: "New Movie",
          year: 2022,
          genre: "Action",
          rating: 8.0,
          one_line: "Exciting movie",
          stars: "John Doe, Jane Smith",
          votes: 1000,
          runtime: "2h",
          gross: "$1 million",
        },
      }

      await createMovie(mockMovieData)

      expect(db.db.Movie.create).toHaveBeenCalledWith({
        movies: "New Movie",
        year: 2022,
        genre: "Action",
        rating: 8.0,
        one_line: "Exciting movie",
        stars: "John Doe, Jane Smith",
        votes: 1000,
        runtime: "2h",
        gross: "$1 million",
      })
    })
  })

  describe("DeleteMovie", () => {
    it("should delete a movie by name", async () => {
      const movieName = "MovieName"
      await DeleteMovie(movieName)

      expect(db.db.Movie.destroy).toHaveBeenCalledWith({
        where: {
          movies: movieName,
        },
      })
    })
  })
})
