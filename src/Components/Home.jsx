import React from "react";
// import { Link } from "react-router-dom";
import './Home.css';
// import Carousel from 'react-bootstrap/Carousel';

import images from "../images";
import ImageSlider from "../ImageSlider";
const Home = () => {
    document.title = "O M E G A";
    return (
        <>
        <div>
            
                <ImageSlider images={images}/>
        </div>
        </>
    );
}

export default Home;