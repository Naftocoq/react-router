import React from "react"
import Form from "react-bootstrap/Form"
import ReactStars from "react-stars"

const FilterMovie = ({ setInputSearch, setNewRate, newRate, inputSearch}) => {
  return (
    <div style={{ margin: "20px", width: "400 px" }}>
      <Form.Control
        placeholder="Search movies ..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <ReactStars count={5} size={32} half={false} onChange={(rate)=> setNewRate(rate)} value={newRate} />
    </div>
  )
}

export default FilterMovie


