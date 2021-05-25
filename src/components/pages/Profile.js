import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Me from "../images/me.jpg";
import CvRo from "../images/Ionita_Robert_Stefan_CV_RO-1.jpg";
import CvEn from "../images/Ionita_Robert_Stefan_CV_EN-1.jpg";

const Profile = () => {
  return (
    <div>
      <div className="container" id="profile">
        <h2 className="title-page">Profile</h2>
        <p className="profile-subtitle">Junior Front End Developer</p>
        <hr />
        <Container id="container-about-details">
          <Row>
            <Col>
              <h4 className="profile-subtitle1">About me</h4>
              <p className="text-profile">
                I define myself as a responsible, loyal and determined person to
                perform. I am passionate about technology and I want to develop
                myself as much as possible personally and professionally. I am
                able to work in a team, and I appreciate open communication.
              </p>
            </Col>
            <Col>
              <Image src={Me} thumbnail />
              <p className="text-profile">
                "I'd better be stupid for 5 minutes if I ask a question, than to
                stay stupid all your life... ”
              </p>
            </Col>
            <Col>
              <h4 className="profile-subtitle1">Details</h4>
              <div className="container-text-details">
                <h5 className="profile-subtitle2">Name:</h5>
                <p className="text-details">Robert-Stefan Ionita</p>
                <h5 className="profile-subtitle2">Age:</h5>
                <p className="text-details">23 years</p>
                <h5 className="profile-subtitle2">Location:</h5>
                <p className="text-details">Bucharest, Romania</p>
              </div>
            </Col>
          </Row>
          <div className="social-profile">
            <a
              href="https://www.linkedin.com/in/ioni%C8%9B%C4%83-robert-%C8%99tefan-999a4718a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/ionitarobert97" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </Container>
        <div className="container-download" id="downloadButtons">
          <a className="btn-download" href={CvEn} download>
            Download English Resume
          </a>
          <a className="btn-download" href={CvRo} download>
            Download Romanian Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
