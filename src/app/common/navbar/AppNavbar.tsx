import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";

function AppNavbar() {
    return (
        <Navbar collapseOnSelect expand="md" className="app-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/assets/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top app-navbar-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="align-items-center">
                        <Nav.Link
                            href="https://www.bridgeappliances.com/"
                            className="app-navbar-link"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.bridgeappliances.com/restaraunt-solutions"
                            className="app-navbar-link"
                        >
                            Restaurant Solutions
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.bridgeappliances.com/omm"
                            className="app-navbar-link"
                        >
                            OMM
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.bridgeappliances.com/about"
                            className="app-navbar-link"
                        >
                            About
                        </Nav.Link>
                        <button className="btn app-navbar-btn">
                            Schedule a Demo
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
