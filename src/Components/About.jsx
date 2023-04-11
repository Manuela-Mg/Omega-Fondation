import React from "react";
// import { Link } from "react-router-dom";
import './About.scss';
import { Cards } from "./utils/Cards";
import { Mid } from "./utils/Mid";
import Latest from "./SubComp/Latest";
import Galeria from "./SubComp/Galeria";
// import { ChildP } from "../animation";
// import Helmet from "react-helmet";

const About = () => {
    window.addEventListener("scroll", slideDown);
    window.addEventListener("scroll", slideLeft);
    window.addEventListener("scroll", appear);

    function slideDown() {
        let slides = document.querySelectorAll('.slideDown');

        for(let i = 0; i < slides.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = slides[i].getBoundingClientRect().top;
            let revealpoint = -150;

            if(revealtop < windowheight - revealpoint && window.scrollY >= 200) {
                slides[i].classList.add('active');
            }
            else {
                slides[i].classList.remove('active');
            }
        }
    }

    function slideLeft() {
        let slides = document.querySelectorAll('.slideLeft');

        for(let i = 0; i < slides.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = slides[i].getBoundingClientRect().top;
            let revealpoint = 150;

            if(revealtop < windowheight - revealpoint && window.scrollY >= 200) {
                slides[i].classList.add('active');
            }
            else {
                slides[i].classList.remove('active');
            }
        }
    }

    function appear() {
        let slides = document.querySelectorAll('.appear');

        for(let i = 0; i < slides.length; i++) {
            if(window.scrollY >= 200) {
                slides[i].classList.add('active');
            }
            else {
                slides[i].classList.remove('active');
            }
        }
    }

    return (
        <>
        
            <div className="container">
                <div className="cards-ctr">
                    <section className="verse-box">
                    <img src="./pics/oth/world.png" className="world slideDown" alt="planet"></img>
                    <div className="separator appear"></div>
                    <p className="verse slideLeft">“<span id="majChar">J</span>e vous l’ai toujours montré: <br></br>
                    il faut travailler de cette façon pour aider les pauvres.<br></br>
                    Et il faut se rappeler ce que le Seigneur Jésus lui-même a dit:<br></br>
                    “Il y a plus de bonheur à donner qu’à recevoir.” »”<br></br>
                    <span id="sig">Actes 20:35</span></p>
                    </section>
                    <Mid _title={"Qui Sommes Nous?"}/>
                    <Cards/>
                    <Mid _title={"Activités Récentes"}/>
                </div>
                <Latest/>
            </div>
            
        </>
    );
}

export default About;