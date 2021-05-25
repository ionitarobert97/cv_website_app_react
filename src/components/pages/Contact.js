import React from "react";
import {
  FaHandPointDown,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="background-contact">
      <div className="container" id="contact">
        <h2 className="title-page">Contact</h2>
        <hr />
        <div className="contact-details">
          <h4 className="contact-text">Robert-Stefan Ionita</h4>
          <h5 className="contact-text">This is my personal website</h5>
          <p className="contact-text">Don't hesitate to get in touch with me!</p>
          <hr />
          <p className="contact-text">
            You can find me here <FaHandPointDown />
          </p>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/robert.irs/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/robertstefan.ionita"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
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
        <div className="email-tel">
          <p className="contact-text">
            <FaEnvelope /> ionita.robertstefan97@gmail.com
          </p>
          <p className="contact-text">
            <FaWhatsapp /> 0728525954
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
