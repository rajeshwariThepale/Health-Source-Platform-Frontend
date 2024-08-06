import React from 'react';
import './App.css';
import { BrowserRouter} from'react-router-dom';
import { Routes, Route } from'react-router-dom';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Doctors from './Components/Doctors.js';
import PatientDashboard from './Components/PatientDashboard.js';
// import LoginPatient from './Components/LoginPatient.js';
import PatientForm from './Components/Patientform.js';
import LoginForm from './Components/LoginForm.js';
import DoctorLogin from "./Components/DoctorLogin.js";
import DoctorForm from './Components/Doctorform.js';


function App(){

  return(
    <div>
      <header className='main-wrapper'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/patients' element={<PatientDashboard/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/register' element={<PatientForm/>}/>   
      <Route path='/doctorForm' element={<DoctorLogin/>}/> 
      <Route path='/doctorRegister' element={<DoctorForm/>}/>  
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  )
}
 
export default App;