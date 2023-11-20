import React from "react";
import { MidDark } from "../utils/MidDark";
import Galeria from "./Galeria";
import './Latest.scss';

class Latest extends React.Component {

    render () {
        window.addEventListener("scroll", lslideRight);
        window.addEventListener("scroll", lslideLeft);
        window.addEventListener("scroll", lslideUp);
        window.addEventListener("scroll", lslideDown);
        

        function lslideLeft() {
            let slides = document.querySelectorAll('.lslideLeft');
    
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
        function lslideRight() {
            let slides = document.querySelectorAll('.lslideRight');
    
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
        function lslideUp() {
            let slides = document.querySelectorAll('.lslideUp');
    
            for(let i = 0; i < slides.length; i++) {
                let windowheight = window.innerHeight;
                let revealtop = slides[i].getBoundingClientRect().top;
                let revealpoint = 150;
    
                if(revealtop < windowheight - revealpoint && window.scrollY >= 50) {
                    slides[i].classList.add('active');
                }
                else {
                    slides[i].classList.remove('active');
                }
            }
        }
        function lslideDown() {
            let slides = document.querySelectorAll('.lslideDown');
    
            for(let i = 0; i < slides.length; i++) {
                let windowheight = window.innerHeight;
                let revealtop = slides[i].getBoundingClientRect().top;
                let revealpoint = -150;
    
                if(revealtop < windowheight - revealpoint && window.scrollY >= 140) {
                    slides[i].classList.add('active');
                }
                else {
                    slides[i].classList.remove('active');
                }
            }
        }


        return (
            <section className="latest-box">
                <div className="ctr reveal">
                    <div className="full-text">
                        <div className="first-text">
                                <h2>VOYAGE</h2>
                            </div>
                        <div className="scd-text">
                            <h2>HUMANITAIRE</h2>
                        </div>   
                    </div>
                    <div className="temp-text">
                        <h2>VOYAGE</h2>
                        <h2>HUMANITAIRE</h2>
                    </div>
                    <div className="first-ctr lslideUp">
                        <div className="circular-line"></div>
                        <div className="scd-line"></div>

                        <div className="scd-textbox">
                        <span>Ensemble, chaque kilomètre devient, un pas de plus vers un avenir empreint de compassion et de soutien.</span>

                            {/* <span>. Ensemble, chaque kilomètre devient,
                            <br></br>un pas de plus vers un avenir
                            <br></br> empreint de compassion et de soutien.</span> */}
                        </div>

                    </div>

                    <div className="img-first lslideDown">
                    </div>

                    <div className="see-box">
                        <button className="see-more">
                        </button>
                        <a href="/Pellicule-Orphelinat" className="see">Voir Plus</a>
                    </div>


                    <div className="scd-ctr lslideRight">
                        <div className="circular-line2"></div>
                        <div className="scd-line2"></div>

                        <div className="scd-textbox2">
                            <span>Ensemble, chaque kilomètre devient, un pas de plus vers un avenir empreint de compassion et de soutien.</span>
                        </div>
                            
                        <div className="straight"></div>
                        <div className="host-text orph">
                        
                            <span>
                            Nous avons rendu visite à l’orphelinat « Notre Dame de la Divine » situé à Brazzaville.
                            Au delà des dons (Ventilateur, huile, riz, sardine, couche pour enfants,
                            ballons de foot etc..), c’est le don de l’amour que nous avons voulu leurs transmettre.
                            </span>
                           
                        </div>

                    </div>

                </div>

                <MidDark _title={"Galerie"}/>
                <Galeria/>
            </section>
        );
    }
}

export default Latest;