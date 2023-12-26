import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ movies, inputSearch, newRate }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {newRate
        ? movies
            .filter(
              (movie) =>
                movie.rate === newRate &&
                (movie.title
                  .toUpperCase()
                  .includes(inputSearch.toUpperCase().trim()) ||
                  movie.description
                    .toUpperCase()
                    .includes(inputSearch.toUpperCase().trim()))
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
        : movies
            .filter(
              (movie) =>
                movie.title
                  .toUpperCase()
                  .includes(inputSearch.toUpperCase().trim()) ||
                movie.description
                  .toUpperCase()
                  .includes(inputSearch.toUpperCase().trim())
            )
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </div>
  )
}

export default MovieList
