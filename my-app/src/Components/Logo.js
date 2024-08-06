 import React from "react";
 import Logo from "../Assets/Logo.png";
 import "./Logo.css";

 export default function logo (){

    return(
        <div className="logo-item">
            <img className="logoImg" src={Logo} alt="Healthcare Logo" ></img>
            <a className="logoName" href="/"> Doctor Co. </a>
        </div>
    )
 }