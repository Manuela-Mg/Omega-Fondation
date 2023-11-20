import React from "react";
// import { Link } from "react-router-dom";
import "./Home.scss";
import "./HomeBis.scss";
import About from "./About";
// import { ChildP } from "../animation";
import { Navbar } from "./utils/Navbar";
// import Carousel from 'react-bootstrap/Carousel';
// import images from "../images";
// import ImageSlider from "../ImageSlider";

const Home = () => {
  document.title = "O M E G A";
  let omtext;
  // let dontext;
  window.addEventListener("scroll", function () {
    // childArea = document.getElementById("front");
    omtext = document.getElementById("title-box");
    // dontext = document.getElementById("donate-box");
    let value = window.scrollY;
    // let donvalue = window.scrollY;
    // value += 130;

    // childArea.style.top = value * -1 + "px";
    omtext.style.top = value * 1.5 + "px";
    // dontext.style.left = donvalue * -0.8 + "px";
    // document.getElementById("back").style.top = value * 0.8 + "px";
    
  });

  window.addEventListener("scroll", slideRight);

    function slideRight() {
        let slides = document.querySelectorAll('.slideRight');

        for(let i = 0; i < slides.length; i++) {
            let windowheight = window.innerHeight;
            let revealtop = slides[i].getBoundingClientRect().top;
            let revealpoint = -250;

            if(revealtop < windowheight - revealpoint && window.scrollY >= 3) {
                slides[i].classList.add('active');
            }
            else {
                slides[i].classList.remove('active');
            }
        }
    }

  return (
    <>
      <div className="home-body">

        <header className="header-box">
  
          <Navbar/>
          
        </header>
          <section className="parallax">
            <div className="backmob" id="back"></div>
            <div className="title-box" id="title-box">
              <h1 className="hone">Omega</h1>
              <h1 className="htwo">ASSOCIATION</h1>
            </div>
            <div className="ctr-don slideRight">
              <div className="donate-box">
                <h2>Aide un <span>Orphelin</span></h2>
                <h2>Secours un <span>Démuni</span></h2>
                <p>Donne de Toi avec Nous,<br></br>
                    Pour le peuple et par le Peuple.
                </p>
                <a href="https://www.paypal.me/OmegAssociation?locale.x=fr_FR">Je donne!</a>
              </div>
            </div>

            <div className="frontmob" id="front"></div>
          </section>
        <About />
        
      </div>
      
    </>
  );
};

export default Home;
