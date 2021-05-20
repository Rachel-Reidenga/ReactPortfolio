import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Rachel Reidenga </span>
            from <span className="purple"> Appleton, WI.</span>
            <br />I am a Code Ninja in training finishing my Bootcamp.
            <br />
            <br />
            Besides coding I also love to!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Draw and Paint
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Comic Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Solve Escape Rooms
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Always be creating!"{" "}
          </p>
          <footer className="blockquote-footer">Reidenga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
