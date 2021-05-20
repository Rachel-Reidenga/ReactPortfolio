import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR Web Developer"
              date="May 2021"
              content={[
                "lorem.",
                "More Content Here...",
              ]}
            />
            <h3 className="resume-title">Other Activities</h3>
            <Resumecontent
              title="Web Developer Tutorials"
              content={[
                "Watching youtube videos to learn new skills.",
              ]}
            />
            <Resumecontent
              title="Web Developer..."
              content={[
                "Update info on progress...",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bootcamp "
              date="Present"
              content={[``]}
            />
            <Resumecontent
              title="Finlandia University"
              date="2011"
              content={[""]}
            />
            <Resumecontent
              title="Big Bay de Noc "
              date="2007"
              content={[""]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `List`,
                `Of Cool`,
                "Coding",
                "Adventures!",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;