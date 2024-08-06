import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";
import client1 from "../Assets/client1.jpg";

export default function PatientSidebar(){
    const patientInfo = {
        patientName: "",
        patientAge: "",
        patientGender:"",
        patientBloodGr: "",
        patientAddress: ""
      };
    return(
        <div className="sidebar">
            <Card>
            <Card.Img variant="top" src={client1} alt="patient-img" style={{width:"350px", height:"280px"}}/>
            <Card.Body>
                <Card.Title><strong>Name:</strong>{patientInfo.patientName}</Card.Title>
                <Card.Text>
                Patient Details
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item><strong>Age:</strong>{patientInfo.patientAge}</ListGroup.Item>
                <ListGroup.Item><strong>Gender:</strong>{patientInfo.patientGender}</ListGroup.Item>
                <ListGroup.Item><strong>Blood Group:</strong>{patientInfo.patientBloodGr}</ListGroup.Item>
                <ListGroup.Item><strong>Address:</strong>{patientInfo.patientAddress}</ListGroup.Item>

            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
        </div>
    );

}