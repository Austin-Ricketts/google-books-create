import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import "./style.css";

function Header() {
    return (
        <div>
        <Navbar collapseOnSelect  expand="lg">
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto d-block">
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/" className="navbar__link--active">
                        Search For New Books
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" as={Link} to="/saved" className="navbar__link--active">
                        View Your Saved Books
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item className="title">
                        Your Personalized Library
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default Header;