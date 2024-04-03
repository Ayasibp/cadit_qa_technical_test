const addMovieSchema = {
  type: "object",
  properties: {
    movies: {
      type: "string",
    },
    year: {
      type: "string",
    },
    genre: {
      type: "string",
    },
    rating: {
      type: "string",
    },
    one_line: {
      type: "string",
    },
    stars: {
      type: "string",
    },
    votes: {
      type: "string",
    },
    runtime: {
      type: "string",
    },
    gross: {
      type: "string",
    },
  },
  additionalProperties: false,
}

export { addMovieSchema }
