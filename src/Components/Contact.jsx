import React from "react";
// import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import './Contact.scss';

const Contact = () => {
    document.title = "Contact - Omega";
   
    return (
        <>
            <div className="log-body">
                <div className="login-header">
                    <div className="title-spec">
                        <h1 style={{ color: '#DEDEDE' }}>c o n t a c t .</h1>
                    </div>
                </div>
                <div className="log-main">
                    <div className="log-user">
                    <p>Soit alerté pour tous nos évènements</p>
                    <div className="action-box">
                        <input type="email"  name="email" placeholder="Entrez votre e-mail" required/>
                        <button className="but-inf" type="submit" name="submit">INFORMEZ MOI</button>
                    </div>
                    <a className="ref-insta" href="https://www.instagram.com/omegafondation/">
                        <button className="insta-ctr" >
                        </button>
                    </a>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Contact;