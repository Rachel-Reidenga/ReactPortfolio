import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import donniedarko from "../../Assets/Projects/donnie-drr.JPG";
import passwordgen from "../../Assets/Projects/password-gen.png";
import lunamoth from "../../Assets/Projects/luna-mothrr.png";
import fish from "../../Assets/Projects/fishu-fishrr.png";
import scheduler from "../../Assets/Projects/scheduler.png";
import logo from "../../Assets/logo.jpg";

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
              imgPath={donniedarko}
              isBlog={false}
              title="Donnie Darko"
              description="Donnie Darko ink and water color fan art."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fish}
              isBlog={false}
              title="Fishu Fish"
              description="Wiggly Gold Fish in ink and water color."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lunamoth}
              isBlog={false}
              title="Luna Moth"
              description="Luna Moth Ink and water color painting."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordgen}
              isBlog={false}
              title="Password Generator"
              description="Password Generator."
              link="https://github.com/Rachel-Reidenga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scheduler}
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
              imgPath={logo}
              link=""
              title="Blog Title"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={donniedarko}
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