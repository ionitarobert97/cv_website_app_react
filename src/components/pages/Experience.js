import React from "react";
import { CgArrowLongUpC, CgArrowLongUpL } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="background">
      <div className="container" id="experience">
        <h2 className="title-page">Experience</h2>
        <hr />
        <h3 className="experience-subtitle">Education</h3>
        <div className="container-education">
          <div className="content-education">
            <div>
              <h5 className="education-name">Scoala Informala de IT</h5>
              <p className="education-year">2020-2021</p>
            </div>
            <CgArrowLongUpC className="education-icon" />
            <div>
              <h5 className="education-name-right">
                Web Development (JavaScript)
              </h5>
              <a
                className="education-links"
                href="https://scoalainformala.ro/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="content-education">
            <div>
              <h5 className="education-name">
                Bucharest Academy of Economic Studies - Faculty of Marketing
              </h5>
              <p className="education-year">2016-2019</p>
            </div>
            <CgArrowLongUpL className="education-icon" />
            <div>
              <h5 className="education-name-right">
                Bachelor's degree in marketing
              </h5>
              <a
                className="education-links"
                href="https://mk.ase.ro/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="experience-subtitle">Career</h3>
        <div className="container-education">
          <div className="content-education">
            <div>
              <h5 className="education-name">System Integration</h5>
              <p className="education-year">01/01/2021 – present</p>
            </div>
            <CgArrowLongUpC className="education-icon" />
            <div>
              <h5 className="education-name-right">Gameloft Romania</h5>
              <a
                className="education-links"
                href="http://www.gameloft.ro/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="content-education">
            <div>
              <h5 className="education-name">Tracking QA Tester</h5>
              <p className="education-year">03/10/2019 – 31/12/2020</p>
            </div>
            <CgArrowLongUpC className="education-icon" />
            <div>
              <h5 className="education-name-right">Gameloft Romania</h5>
              <a
                className="education-links"
                href="http://www.gameloft.ro/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="content-education">
            <div>
              <h5 className="education-name">Administrative officer</h5>
              <p className="education-year">10/06/2018 – 20/12/2018</p>
            </div>
            <CgArrowLongUpL className="education-icon" />
            <div>
              <h5 className="education-name-right">
                Udrescu Building Management
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
