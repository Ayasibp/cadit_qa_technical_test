const reqAddMovie = {
  movies: "movie test",
  year: "2024",
  genre: "test",
  rating: "8",
  one_line: "test one line description",
  stars: "actrees test",
  votes: "5",
  runtime: "3 jam",
  gross: "$34",
}

const invalidReqAddMovie = {
  movies: "movie test",
  year: 2024,
  genre: "test",
  rating: 8,
  one_line: "test one line description",
  stars: "actrees test",
  votes: "5",
  runtime: "3 jam",
  gross: 34,
}

export default {
  reqAddMovie,
  invalidReqAddMovie,
}
