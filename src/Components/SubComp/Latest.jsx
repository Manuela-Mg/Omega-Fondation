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
                                <h2>VISITATION</h2>
                            </div>
                        <div className="scd-text">
                            <h2>D<span>'</span>HOPITAUX</h2>
                        </div>   
                    </div>
                    <div className="temp-text">
                        <h2>VISITATION</h2>
                        <h2>D<span>'</span>HOPITAUX</h2>
                    </div>
                    <div className="first-ctr lslideUp">
                        <div className="circular-line"></div>
                        <div className="scd-line"></div>

                        <div className="scd-textbox">
                        
                            <span>"Il n'y a pas d'amour,
                            <br></br>il n'y a que 
                            <br></br>des preuves d'amour."</span>
                            <p><br></br><span className="fstar">＊</span> Distribution de jeux
                            <br></br><span className="fstar">＊</span> Dons de cadeaux <br></br>et autres</p>
                        </div>

                    </div>

                    <div className="img-first lslideDown">
                    </div>

                    <div className="see-box">
                        <button className="see-more">
                        </button>
                        <a href="/Pellicule" className="see">Voir Plus</a>
                    </div>


                    <div className="scd-ctr lslideRight">
                        <div className="circular-line2"></div>
                        <div className="scd-line2"></div>

                        <div className="scd-textbox2">
                        
                            <span>"Il n'y a pas d'amour,
                            <br></br>il n'y a que 
                            <br></br>des preuves d'amour."</span>
                            <p><br></br><span className="fstar">＊</span> Distribution de jeux
                            <br></br><span className="fstar">＊</span> Dons de cadeaux <br></br>et autres</p>
                        </div>
                        <div className="straight"></div>
                        <div className="host-text">
                        
                            <span>L’hôpital Armand
                            <br></br>Trousseau</span>
                            <p>est un centre de référence souvent labellisé
                            <br></br>au titre des maladies rares.  Outre les maladies neurologiques et les handicaps,
                            <br></br>la prise en charge des enfants victimes de mauvais traitements
                            <br></br>est aussi une orientation à laquelle il attache beaucoup d’importance.
                            </p>
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