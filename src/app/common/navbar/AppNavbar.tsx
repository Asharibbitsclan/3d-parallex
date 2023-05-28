import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";

function AppNavbar() {
    return (
        <Navbar
            collapseOnSelect
            expand="md"
            variant="dark"
            className="app-navbar"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/assets/images/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top app-navbar-logo"
                    />
                    LOGO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav className="align-items-center">
                        <Nav.Link href="#" className="app-navbar-link">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="app-navbar-link">
                            Restaurant Solutions
                        </Nav.Link>
                        <Nav.Link href="#" className="app-navbar-link">
                            OMM
                        </Nav.Link>
                        <Nav.Link href="#" className="app-navbar-link">
                            About
                        </Nav.Link>
                        <Nav.Link href="#" className="app-navbar-link">
                            <button className="btn app-navbar-btn">
                                Buy Now
                            </button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
