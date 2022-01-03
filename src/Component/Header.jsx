import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
const Header = () => {
  return (
    <div style={{ padding: 37 }}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Find a doctor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Apps
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Testimonails
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About us
                  </a>
                </li>
              </ul>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
