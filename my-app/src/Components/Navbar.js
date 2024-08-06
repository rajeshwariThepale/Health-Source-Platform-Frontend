import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import Logo from "./Logo";
// import Login from "./Login";

export default function Navbar(){
    return(
        <div className="menu-wrapper">
            <Container>
            <Row>
                <Col sm={4}><Logo></Logo></Col>
                <Col sm={8}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/Doctors"> Doctors </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Patients"> Patients </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Pharmacy </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/"> Pages </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login"> Login </Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}