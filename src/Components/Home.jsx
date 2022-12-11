import React from "react";
// import { Link } from "react-router-dom";
import './Home.css';
// import Carousel from 'react-bootstrap/Carousel';

// import images from "../images";
// import ImageSlider from "../ImageSlider";
const Home = () => {
    document.title = "O M E G A";
    return (
        <>
        <div className="home-body">
        <div className="background">
        </div>
        {/* <header className="nav-header flex">
                <div className="logo-box">
                    <img src={"./pics/logo.png"} className="Home-logo" alt="logo" />
                </div>
                <button className="nav-close" aria-controls="prim-nav" aria-expanded="false">

                </button>

                <nav>
                    <ul className="prim-nav flex">
                        <li className="active"><a href="Home">Accueil</a></li>
                        <li><a href="Donate">Dons</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </ul>
                </nav>
            </header> */}
        <div className="intro">
            <div className="main-img">
                    <img src={"./pics/big-smile.jpg"} className="cover-img" alt="baseimage"/>
            </div>
            <div className="grad-transit"></div>
            <div className="clouds">
                    <img src={"./pics/oth/cloud1.png"} alt="cloud" className="cloud1" />
                    <img src={"./pics/oth/cloud2.png"} alt="cloud" className="cloud2" / >
                    <img src={"./pics/oth/cloud3.png"} alt="cloud" className="cloud3"/ >
                    <img src={"./pics/oth/cloud4.png"} alt="cloud" className="cloud4"/ >
                    <img src={"./pics/oth/cloud5.png"} alt="cloud" className="cloud5"/ >
                    <img src={"./pics/oth/cloud1.png"} alt="cloud" className="cloud10"/ >
                    <img src={"./pics/oth/cloud2.png"} alt="cloud" className="cloud9"/ >
                    <img src={"./pics/oth/cloud3.png"} alt="cloud" className="cloud8"/ >
                    <img src={"./pics/oth/cloud4.png"} alt="cloud" className="cloud7"/ >
                    <img src={"./pics/oth/cloud5.png"} alt="cloud" className="cloud6"/ >
                    <img src={"./pics/oth/cloud2.png"} alt="cloud" className="cloud11"/ >
                    <img src={"./pics/oth/cloud4.png"} alt="cloud" className="cloud12"/ >
                    <img src={"./pics/oth/cloud2.png"} alt="cloud" className="cloud13"/ >
                    <img src={"./pics/oth/cloud4.png"} alt="cloud" className="cloud14"/ >
            </div>
            </div>
                {/* <ImageSlider images={images}/> */}
        </div>
        </>
    );
}

export default Home;