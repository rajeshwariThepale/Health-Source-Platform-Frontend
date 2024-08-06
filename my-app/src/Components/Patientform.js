import React from 'react';
// import {useNavigate} from 'react-router-dom';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Patientform.css';

const validationPatientSchema = Yup.object({
  patientName: Yup.string().required('Name is required'),
  patientAge: Yup.number().required('Age is required').min(0, 'Age must be at least 0'),
  patientGender: Yup.string().required('Gender is required'),
  patientDOB: Yup.date().required('Date of Birth is required'),
  patientBloodGr: Yup.string().required('Blood Group is required'),
  patientAddress: Yup.string().required('Address is required'),
  patientPhone: Yup.string().required('Phone Number is required').min(10, 'Number must be at least 10'),
  patientEmail: Yup.string().email('Invalid email address').required('Email is required'),
  patientPassword: Yup.string().required('Password is required')
});

function PatientForm() {

  // const navigate = useNavigate();
 
  const handleFinish = async (values, { resetForm }) => {
  console.log('click on submit',values);
   
     // Sending data using Axios
      axios.post('http://localhost:5002/api/patient/addPatient', values)
      .then(response => {
          console.log(response.data);
          alert('Patient Registered Successfully');

          //navigate to login form after registration 
          // navigate('/LoginForm');
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
      resetForm();
  };


  return (
    <>
      <div className="form-heading">
        <h3>Patient Registration Form</h3>
        <p>Please fill in the form to create a New Account</p>
      </div>
      <Container>
        <Formik
          initialValues={{
            patientName: '',
            patientAge: '',
            patientGender: '',
            patientDOB: '',
            patientBloodGr: '',
            patientAddress: '',
            patientPhone: '',
            patientEmail: '',
            patientPassword: '',
          }}
          validationSchema={validationPatientSchema}
          onSubmit={handleFinish}
        >
          {({ errors, touched}) => (
            <FormikForm noValidate>
              <Row className="mb-3">
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="patientName"
                      type="text"
                      className={`form-control ${touched.patientName && errors.patientName ? 'is-invalid' : ''}`}
                    />
                    {touched.patientName && errors.patientName ? (
                      <div className="invalid-feedback">{errors.patientName}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <Field
                      name="patientAge"
                      type="number"
                      className={`form-control ${touched.patientAge && errors.patientAge ? 'is-invalid' : ''}`}
                    />
                    {touched.patientAge && errors.patientAge ? (
                      <div className="invalid-feedback">{errors.patientAge}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <Field
                      name="patientGender"
                      type="text"
                      className={`form-control ${touched.patientGender && errors.patientGender ? 'is-invalid' : ''}`}
                    />
                    {touched.patientGender && errors.patientGender ? (
                      <div className="invalid-feedback">{errors.patientGender}</div>
                    ) : null}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="dob">Date Of Birth</label>
                    <Field
                      name="patientDOB"
                      type="date"
                      className={`form-control ${touched.patientDOB && errors.patientDOB ? 'is-invalid' : ''}`}
                    />
                    {touched.patientDOB && errors.patientDOB ? (
                      <div className="invalid-feedback">{errors.patientDOB}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <Field
                      name="patientBloodGr"
                      type="text"
                      className={`form-control ${touched.patientBloodGr && errors.patientBloodGr ? 'is-invalid' : ''}`}
                    />
                    {touched.patientBloodGr && errors.patientBloodGr ? (
                      <div className="invalid-feedback">{errors.patientBloodGr}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Field
                      name="patientAddress"
                      type="text"
                      className={`form-control ${touched.patientAddress && errors.patientAddress ? 'is-invalid' : ''}`}
                    />
                    {touched.patientAddress && errors.patientAddress ? (
                      <div className="invalid-feedback">{errors.patientAddress}</div>
                    ) : null}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      name="patientPhone"
                      type="tel"
                      className={`form-control ${touched.patientPhone && errors.patientPhone ? 'is-invalid' : ''}`}
                    />
                    {touched.patientPhone && errors.patientPhone ? (
                      <div className="invalid-feedback">{errors.patientPhone}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      name="patientEmail"
                      type="email"
                      className={`form-control ${touched.patientEmail && errors.patientEmail ? 'is-invalid' : ''}`}
                    />
                    {touched.patientEmail && errors.patientEmail ? (
                      <div className="invalid-feedback">{errors.patientEmail}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="patientPassword"
                      type="password"
                      className={`form-control ${touched.patientPassword && errors.patientPassword ? 'is-invalid' : ''}`}
                    />
                    {touched.patientPassword&& errors.patientPassword ? (
                      <div className="invalid-feedback">{errors.patientPassword}</div>
                    ) : null}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="12" className="text-center">
                  <Button
                    className="submit"
                    type="submit"
                  >
                    Submit form
                  </Button>
                </Col>
              </Row>
            </FormikForm>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default PatientForm;
