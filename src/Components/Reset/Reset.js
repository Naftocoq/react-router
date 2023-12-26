import React from "react"
import Button from "react-bootstrap/Button"

const Reset = ({ handleReset }) => {
  return (
    <div style={{ margin: "20px" }}>
      <Button variant="outline-dark" onClick={handleReset}>
        <b>RESET</b>
      </Button>
    </div>
  )
}

export default Reset
