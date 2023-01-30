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
  let childArea;
  let omtext;
  window.addEventListener("scroll", function () {
    childArea = document.getElementById("back");
    omtext = document.getElementById("title-box");
    let value = window.scrollY;
    // value += 130;

    childArea.style.top = value * -1 + "px";
    omtext.style.top = value * 1.5 + "px";
    // document.getElementById("back").style.top = value * 0.8 + "px";
    
  });

  return (
    <>
      <div className="home-body">

        <header className="header-box">
  
          <Navbar/>
          
        </header>
        <div className="intro">
          <section className="parallax">
            <div className="backmob" id="back"></div>
            <div className="title-box" id="title-box">
              <h1 className="hone">Omega</h1>
              <h1 className="htwo">FONDATION</h1>
            </div>
            <div className="frontmob" id="front"></div>
            {/* <img src="./pics/oth/backmob.jpg" id="back" alt="background" />
            <img src="./pics/oth/frontmob.png" id="frontmob" alt="childsmall" /> */}
            {/* <img src="./pics/oth/ground.png" id="ground" alt="ground" />
            <img src="./pics/oth/table.png" id="table" alt="table" /> */}
          </section>
        </div>
    
      </div>
      {/* <ChildP /> */}
      <About />
    </>
  );
};

export default Home;
