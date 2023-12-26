import React from "react"
import FilterMovie from "../Components/FilterMovie/FilterMovie"
import MovieList from "../Components/MovieCards/MovieList"
import { moviesData } from "../Components/MovieCards/Data"
import { useState } from "react"
import Reset from "../Components/Reset/Reset"
import AddMovie from "../AddMovie/AddMovie"

const Movies = () => {
  const [movies, setMovies] = useState(moviesData)
  const [inputSearch, setInputSearch] = useState("")
  // console.log(inputSearch)
  const [newRate, setNewRate] = useState(0)
  // console.log(newRate)

  const add = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const handleReset = () => {
    setInputSearch("")
    setNewRate(0)
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <AddMovie add={add} />
      <FilterMovie
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        setNewRate={setNewRate}
        newRate={newRate}
      />
      <Reset handleReset={handleReset} />
        <MovieList
          movies={movies}
          inputSearch={inputSearch}
          newRate={newRate}
        />
    </div>
  )
}

export default Movies
