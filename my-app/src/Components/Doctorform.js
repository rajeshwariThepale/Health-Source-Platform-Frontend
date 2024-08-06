import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Doctorform.css';


const validateDoctorSchema = Yup.object({
    doctorName: Yup.string().required('Name is required'),
    doctorAge: Yup.number().required('Age is required').min(0, 'Age must be at least 0'),
    doctorGender: Yup.string().required('Gender is required'),
    doctorSpecialization: Yup.string().required('You are specialization in'),
    doctorCity: Yup.string().required('city is required'),
    doctorAddress: Yup.string().required('Address is required'),
    doctorPhone: Yup.string().required('Phone Number is required').min(10, 'Number must be at least 10'),
    doctorEmail: Yup.string().email('Invalid email address').required('Email is required'),
    doctorPassword: Yup.string().required('Password is required')
});

function DoctorForm() {
 
  const handleFinish = async (values, { resetForm }) => {
  console.log('click on submit',values);
   
     // Sending data using Axios
      axios.post('http://localhost:5002/api/doctor/addDoctor', values)
      .then(response => {
          console.log(response.data);
          alert('Registration Successful');
      })
      .catch(error => {
          console.error('There was an error!', error);
          
      });
      resetForm();
  };

  return (
    <>
      <div className="form-heading">
        <h3>Doctor Registration Form</h3>
        <p>Join to our Team</p>
      </div>
      <Container>
        <Formik
          initialValues={{
            doctorName: '',
            doctorAge:'',
            doctorGender: '',
            doctorSpecialization: '',
            doctorCity: '',
            doctorAddress: '',
            doctorPhone: '',
            doctorEmail: '',
            doctorPassword: '',
          }}
          validationSchema={validateDoctorSchema}
          onSubmit={handleFinish}
        >
          {({ errors, touched}) => (
            <FormikForm noValidate>
              <Row className="mb-3">
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="doctorName"
                      type="text"
                      className={`form-control ${touched.doctorName && errors.doctorName ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorName && errors.doctorName ? (
                      <div className="invalid-feedback">{errors.doctorName}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <Field
                      name="doctorAge"
                      type="number"
                      className={`form-control ${touched.doctorAge && errors.doctorAge ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorAge && errors.doctorAge ? (
                      <div className="invalid-feedback">{errors.doctorAge}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <Field
                      name="doctorGender"
                      type="text"
                      className={`form-control ${touched.doctorGender && errors.doctorGender ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorGender && errors.doctorGender ? (
                      <div className="invalid-feedback">{errors.doctorGender}</div>
                    ) : null}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <Field
                      name="doctorSpecialization"
                      type="text"
                      className={`form-control ${touched.doctorSpecialization && errors.doctorSpecialization ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorSpecialization && errors.doctorSpecialization ? (
                      <div className="invalid-feedback">{errors.doctorSpecialization}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Field
                      name="doctorCity"
                      type="text"
                      className={`form-control ${touched.doctorCity && errors.doctorCity ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorCity && errors.doctorCity ? (
                      <div className="invalid-feedback">{errors.doctorCity}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <Field
                      name="doctorAddress"
                      type="text"
                      className={`form-control ${touched.doctorAddress && errors.doctorAddress ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorAddress && errors.doctorAddress ? (
                      <div className="invalid-feedback">{errors.doctorAddress}</div>
                    ) : null}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      name="doctorPhone"
                      type="tel"
                      className={`form-control ${touched.doctorPhone && errors.doctorPhone ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorPhone && errors.doctorPhone ? (
                      <div className="invalid-feedback">{errors.doctorPhone}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      name="doctorEmail"
                      type="email"
                      className={`form-control ${touched.doctorEmail && errors.doctorEmail ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorEmail && errors.doctorEmail ? (
                      <div className="invalid-feedback">{errors.doctorEmail}</div>
                    ) : null}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="doctorPassword"
                      type="password"
                      className={`form-control ${touched.doctorPassword && errors.doctorPassword ? 'is-invalid' : ''}`}
                    />
                    {touched.doctorPassword && errors.doctorPassword ? (
                      <div className="invalid-feedback">{errors.doctorPassword}</div>
                    ) : null}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="12" className="text-center">
                  <Button className="submit" type="submit">
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

export default DoctorForm;
