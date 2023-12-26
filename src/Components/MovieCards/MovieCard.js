import React from "react"
import { Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router-dom"
import ReactStars from "react-stars"

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  return (
    <div>
      <Card style={{ width: "18rem", margin: "20px", height: "40rem" }}>
        <Card.Img
          style={{ height: "60%" }}
          variant="top"
          src={movie.posterUrl}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
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
        <Button
          variant="warning"
          onClick={() => navigate(`/movies/${movie.id}`)}
        >
          <b>Watch trailer</b>
        </Button>
      </Card>
    </div>
  )
}

export default MovieCard
