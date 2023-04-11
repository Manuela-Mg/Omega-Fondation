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
  let dontext;
  window.addEventListener("scroll", function () {
    // childArea = document.getElementById("front");
    omtext = document.getElementById("title-box");
    dontext = document.getElementById("donate-box");
    let value = window.scrollY;
    let donvalue = window.scrollY;
    // value += 130;

    // childArea.style.top = value * -1 + "px";
    omtext.style.top = value * 1.5 + "px";
    dontext.style.left = donvalue * 0.8 + "px";
    // document.getElementById("back").style.top = value * 0.8 + "px";
    
  });

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
              <h1 className="htwo">FONDATION</h1>
            </div>
            <div className="ctr-don" id="donate-box">
              <div className="donate-box">
                <h2>Aide un <span>Orphelin</span></h2>
                <h2>Secourt un <span>Démuni</span></h2>
                <p>Donne de Toi avec Nous,<br></br>
                    Pour le peuple et par le Peuple.
                </p>
                <a href="Donate">Je donne!</a>
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
