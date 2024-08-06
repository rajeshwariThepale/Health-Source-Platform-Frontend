import PatientSidebar from "./PatientSidebar";
import BookAppointment from "./BookAppointment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './PatientDashboard.css';

export default function PatientDashboard(){
    return(
        <>
        <section className="container-fluid" style={{"margin-top":"25px"}}>
            <Row>
                <Col md={3}> 
                <PatientSidebar></PatientSidebar>
                </Col>
                <Col md={7}> 
                <h4>Patient Dashboard</h4>
                </Col>
                <Col md={2}> 
                <BookAppointment></BookAppointment>
                </Col>
            </Row>
        </section>
        </>
    )
};