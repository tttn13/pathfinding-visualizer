import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer
      className="text-center mt-4 position-absolute"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <div className="container p-3 pb-2">
        <section>
          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="https://github.com/tttn13"
            role="button"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="https://www.linkedin.com/in/thi-nguyen-1310/"
            role="button"
            target="_blank" rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </section>
      </div>
      <div className="text-center" id="footerText">   
        &copy; {new Date().getFullYear()} Copyright: Thi Nguyen{" "}
        <span style={{ color: "#e25555" }}>&#9829;</span>
        <a
          className="nav-link"
          style={{ fontWeight: "600" }}
          href="https://github.com/tttn13/pathfinder-visualizer"
          target="_blank" rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
