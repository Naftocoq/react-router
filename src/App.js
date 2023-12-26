import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import MovieDetails from "./Pages/MovieDetails"
import ErrorPage from "./Pages/ErrorPage"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
