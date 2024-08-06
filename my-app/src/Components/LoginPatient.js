import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import PatientForm from './Patientform';
import LoginForm from './LoginForm';

export default function LoginPatient() {
    return (
     <>
     <section className='nav-page'>
        <Nav variant="underline">
        <Nav.Item as="li">
        <Nav.Link key={PatientForm} as={Link} to="/Register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link key={LoginForm} as={Link} to="/LoginIn">Login In</Nav.Link>
        </Nav.Item>
        </Nav>
     </section>
    </>
     ); 
};