import * as React from "react";
import './Galeria.scss';
import {Carousel} from '3d-react-carousal';

const Galeria = () => {
  let slides = [
    <div className="img1"></div>,
    <div className="img2"></div>,
    <div className="img3"></div>,
    <div className="img4"></div>,
    <div className="img5"></div>,
    <div className="img6"></div>,
    <div className="img7"></div>,
    <div className="img8"></div>,
    <div className="img9"></div>,
    ];

    return (
        <>
        <Carousel slides={slides} autoplay={true}
        interval={3000}/>
        </>
    
    );
}



export default Galeria;