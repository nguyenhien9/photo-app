import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./styles.scss";

function Navbar() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://vtiacademy.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VTI Academy
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact="true"
              className="header__link"
              to="/"
              activeclassname="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Navbar;
