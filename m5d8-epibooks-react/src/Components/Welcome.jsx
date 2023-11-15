import React from 'react';
import { Row, Col, Container } from "react-bootstrap";


function Jumbotron() {

  const jumbotronStyle = {
    backgroundImage: `url("https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    position: "relative",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: '6px',
  };

  return (
    <Container>
      <div style={jumbotronStyle} className="jumbotron">
      </div>

      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={6} className="d-flex align-items-end">
          <p>Welcome to EPIBOOKS, explore our fascinating world of online books, where inexhaustible worlds unfold between the pages. Discover engaging stories and enlightening essays, be captivated by literary adventures. We are here to fuel your passion for reading in a universe of knowledge and inspiration...
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;