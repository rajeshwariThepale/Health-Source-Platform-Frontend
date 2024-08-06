import React from 'react';
import { useState, useEffect } from 'react';
import { Field } from 'formik';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function BookAppointment() {

  const [doctorName, setDoctorName] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

    const [show, setShow] = useState(false);

    //fetch doctors
    useEffect(() => {
      const fetchDoctors = async () => {
        try {
          const response = await fetch('http://localhost:5002/api/doctors'); 
          const data = await response.json();
          setDoctorName(data);
        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      };
      fetchDoctors();
    }, []);

    const handleSubmit = (values) => {
      console.log('Submitted appointment:', values);
  
      // Send data to backend API (replace with your actual API call)
      axios.post('http://localhost:5002/api/patient/addPatient', values)
      .then(response => {
        setDoctorName(response.data);
      })
        .catch((error) => console.error('API error:', error));
    };
  
    const handleDateTimeChange = (date) => {
      setSelectedDateTime(date);
    };

    const handleAddAppointment = () => {
      if (!selectedDoctorId || !selectedDateTime) {
        message.error("Please select a doctor and a date and time for the appointment.");
        return;
      };
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modalContent = (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Get your Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                as="select"
                name="doctorName"
                className="form-control"
                required // Mark doctor selection as required
              >
                <option value="" label="Select Doctor">
                  Select Doctor
                </option>
                {doctorName.map((doctor) => (
                  <option key={doctor._id} value={doctor._id} label={doctor.doctorName}>
                    {doctor.doctorName}
                  </option>
                ))}
              </Field>
            </div>
            <div className="form-group">
              <DatePicker showTime selected={selectedDateTime} onChange={handleDateTimeChange} placeholder="Select Date and Time" />
            </div>
            <Button variant="primary" type="submit">
              Save Appointment
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
      return (
        <>
          <Button variant="primary" onClick={handleAddAppointment}>
            Book Appointment
          </Button>
          <Modal show={show} onHide={handleClose}>
            {modalContent}
          </Modal>
      </>
    );
  }
  
  
  
  