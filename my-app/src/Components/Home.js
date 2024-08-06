import React from 'react';
import Container from 'react-bootstrap/Container';
import "./Home.css";
import SearchForm from './Searchform';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function home(){
    return(
        <>
        <div id='home-page'>
            <Container>
                <div className='home-heading'>
                <h1>Consult top doctors for any health concern </h1>
                <h3>Book Your Appointments</h3>
                <p>Great doctors, if you need your family member to get effective immediate assistance, 
                    emergency treatment or a simple consultation.</p>
                </div>
                <SearchForm></SearchForm>
            </Container>
        </div>
        <div className="vision">
            <Container>
                <Row>
                    <Col>
                        <h3>Our Vision</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. </p>
                    </Col>
                    <Col>
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. </p>
                    </Col>
                    <Col> 
                        <h3>Who are We?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. </p>
                    </Col>
                </Row>
            </Container>
            
        </div> 
        </>
    )

};

export default home;