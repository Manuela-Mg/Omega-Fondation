import React from "react";
// import { Link } from "react-router-dom";
import './Contact.scss';
import Galeria from "./SubComp/Galeria";

const Contact = () => {
    document.title = "Contact - Omega";
    return (
        <>
            <div className="contact-box">
                <h1>CONTACTS</h1>
                <Galeria/>

            </div>
        </>
    );
}

export default Contact;