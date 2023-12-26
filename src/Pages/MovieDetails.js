import React, { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import ReactStars from "react-stars"
import { moviesData } from "../Components/MovieCards/Data"
import { useNavigate, useParams } from "react-router-dom"

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const foundMovie = moviesData.find((el) => el.id === Number(id))
    setMovie(foundMovie)
  }, [id])

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Card style={{ width: "50rem", margin: "20px", height: "45rem" }}>
        <iframe
          style={{height: "30rem" }}
          src={movie.trailer}
        ></iframe>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.descriptionLong}</Card.Text>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}> Rating : </span>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={movie.rate}
              edit={false}
              half={false}
            />
          </div>
        </Card.Body>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Card>
    </div>
  )
}

export default MovieDetails
