// import PatientDashboard from "./PatientDashboard";

import LoginPatient from "./LoginPatient";


export default function Patients(){

    return(
        <>
        <section className="container-fluid" style={{"margin-top":"25px"}}>
            {/* <PatientDashboard></PatientDashboard> */}
            <LoginPatient></LoginPatient>
        </section>
        </>
    )

};