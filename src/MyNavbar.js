import React from 'react'
import { Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"
import { BiLogOut } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'


function MyNavbar() {

    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar-color" variant="dark" sticky="top">

            <Navbar.Brand as={Link} to="/" >
                Mathsyra
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/something">
                        Leaderboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="#About">
                            About
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="#profile">
                            <CgProfile 
                                className="react-icon"
                            />
                    </Nav.Link>
                    <Nav.Link eventKey={3} hras={Link} toef="#logout">
                        <BiLogOut 
                            className="react-icon"
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default MyNavbar
