import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import doctorsTeam from "../Assets/doctorsTeam.jpg";
import DoctorForm from "../Components/Doctorform";

const DoctorLogin = ({ setUser }) => {
  const navigate = useNavigate();

  // code to submit login credentials
  const handleSubmit = (values) => {
    let payload = {
        doctorEmail: values.email,
        doctorPassword: values.password,
    };

    //to get data from backend
      axios
      .post("http://localhost:5002/api/patients", payload)
      .then((response) => {
        setUser(response.data.patientDetails.name);
        navigate("/PatientDashboard");
        localStorage.setItem(
          "patientDetails",
          JSON.stringify(response.data.patientDetails)
        );
      })
      .catch((error) => {
        console.error("There was an error!", error.message);
      });
  };

  //if new user click to register to get registered
  const handleClick = () =>{
    navigate('/doctorRegister');
  };

  
  return (
    <>
     <Container>
      <Row className="justify-content-center">
        <Col md={9} className="mt-4">
          <Card>
            <Row noGutters>
              <Col md={7}>
                <img
                  src={doctorsTeam}
                  alt="Login"
                  className="img-fluid"
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </Col>
              <Col md={5}>
                <Card.Body>
                  <Card.Title className="text-left">Doctor Login</Card.Title>
                  <Formik
                    initialValues={{
                        doctorEmail:"",
                      doctorPassword: ""
                    }}
                    validate ={(values) => {
                      console.log("validation schema = ",values);
                      const errors = {};
                       // Validate email
                       if (!values.email || undefined) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
  
                      // Validate password
                      if (!values.password || undefined) {
                        errors.password = "Required";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                     
                      handleSubmit(values);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="form-group">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="doctorEmail"
                            placeholder="Enter your Email"
                            className="form-control mb-3"
                          />
                          <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field
                            type="password"
                            name="doctorPassword"
                            className="form-control mb-3"
                            placeholder="Enter Password"
                          />
                          <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>

                        <Button type="submit" className="btn-button" >
                          Login
                        </Button>
                      </Form>
                    )}
                  </Formik>
                  <div className="not-register">
                    <span>Are you a new user? 
                    <a className="linkToRegister" onClick={handleClick} href={DoctorForm}> Register</a> here.</span>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default DoctorLogin;