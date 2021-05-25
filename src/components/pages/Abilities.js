import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscStarFull, VscStarEmpty, VscStarHalf } from "react-icons/vsc";

const Abilities = () => {
  return (
    <div className="container" id="abilities">
      <h2 className="title-page">Abilities</h2>
      <hr />
      <h3 class="abilities-subtitle">Skills</h3>
      <Container>
        <Row>
          <Col>
            <ul className="no-bullets">
              <li>
                <span className="ability-title">HTML</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarHalf />
                  </span>
                </span>
              </li>
              <li>
                <span className="ability-title">CSS</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
              <li>
                <span className="ability-title">JavaScript</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarHalf />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
              <li>
                <span className="ability-title">Bootstrap</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarHalf />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="no-bullets">
              <li>
                <span className="ability-title">React</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
              <li>
                <span className="ability-title">Angular</span>
                <span className="ability-score">
                  <span>
                    <VscStarHalf />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
              <li>
                <span className="ability-title">JQuery</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarHalf />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
              <li>
                <span className="ability-title">SEO</span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarHalf />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
      <h3 class="abilities-subtitle">Languages</h3>
      <Container>
        <Row>
          <Col>
            <ul className="no-bullets">
              <li>
                <span className="ability-title">
                  Romanian (Native language)
                </span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                </span>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="no-bullets">
              <li>
                <span className="ability-title">
                  English
                </span>
                <span className="ability-score">
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarFull />
                  </span>
                  <span>
                    <VscStarHalf />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                  <span>
                    <VscStarEmpty />
                  </span>
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Abilities;
