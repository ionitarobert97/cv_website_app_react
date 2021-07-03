import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Website1 from "../images/VacationApp.JPG";
import Website2 from "../images/getty_837392998_411522.jpg";
const Projects = () => {
  const handleClick = () => {
    window.open("https://blooming-badlands-57780.herokuapp.com/");
  };

  return (
    <div className="background">
      <div className="container" id="projects">
        <h2 className="title-page">Projects</h2>
        <hr />
        <Container>
          <Row>
            <Col>
              <Card className="bg-dark text-white" onClick={handleClick}>
                <Card.Img src={Website1} alt="Card image" />
                <Card.ImgOverlay className="cardTextContainer">
                  <Card.Title>Vacation App</Card.Title>
                  <hr />
                  <Card.Text>Project still progress...</Card.Text>
                  <Card.Text>Not all features fully implemented</Card.Text>
                  <Card.Text>Creation date: June 2021 </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark text-white">
                <Card.Img src={Website2} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title className="card-text">
                    Future Project Card
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text">
                    These are containers for future projects.
                  </Card.Text>
                  <Card.Text className="card-text">
                    Create date: Unknown yet{" "}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
