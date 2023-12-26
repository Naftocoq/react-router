import React, { useState } from "react"
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // Init
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rate, setRate] = useState(0)
  const [posterUrl, setPosterUrl] = useState("")
  // Update
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleRate = (e) => {
    setRate(Number(e.target.value))
  }
  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value)
  }

  // Function Add movie
  const handleAdd = () => {
    const newMovie = { title, description, rate, posterUrl }
    add(newMovie)
    handleClose() // Close the modal after adding the movie
  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={handleTitle}
          />
          <Form.Control
            type="text"
            placeholder="Enter description"
            onChange={handleDescription}
          />
          <Form.Control
            type="number"
            placeholder="Enter rate"
            onChange={handleRate}
          />
          <Form.Control
            type="text"
            placeholder="Enter poster Url"
            onChange={handlePosterUrl}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
