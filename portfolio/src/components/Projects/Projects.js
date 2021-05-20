import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my favorite.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Donnie Darko"
              description="Donnie Darko ink and water color fan art."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fishu Fish"
              description="Wiggly Gold Fish in ink and water color."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Luna Moth"
              description="Luna Moth Ink and water color painting."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Password Generator"
              description="Password Generator."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Scheduler"
              description="Scheduler, planner."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Blog...?</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Blog Title"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://Rachel-Reidenga/"
              title="Fishu Fish"
              site="rachelr.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;