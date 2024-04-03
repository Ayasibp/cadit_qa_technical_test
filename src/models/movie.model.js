export default (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      movies: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      year: {
        type: DataTypes.TEXT,
      },
      genre: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      one_line: {
        type: DataTypes.STRING,
      },
      stars: {
        type: DataTypes.STRING,
      },
      votes: {
        type: DataTypes.STRING,
      },
      runtime: {
        type: DataTypes.STRING,
      },
      gross: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "movies",
      freezeTableName: true,
      timestamps: false,
    }
  )
  return Movie
}
