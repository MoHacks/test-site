import React, { useState, useEffect } from 'react';
import './Testimonials.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import a from '../images/carousel/public-speaker.png';
import b from '../images/ben.jpg';
import c from '../images/joelvalve.jpg';
import e from '../images/carousel/mentorship.png';
import d from '../images/suad.jpg';



const Testimonials = () => {
  
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  };

  const {windowWidth} = useWindowSize();
  const isWindowLarge = window.innerWidth > 1000 ? true : false;
  console.log("windowWidth: ", windowWidth)
  console.log("window.innerWidth: ", window.innerWidth)
  console.log("isWindowLarge: ", isWindowLarge);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isWindowLarge ? 3 : 1,
    slidesToScroll: 1
  };
  return (
    <div className='testimonials-section w-3/4 m-auto'>
      <div className="mt-20">
        
        <div className="testimonials-container">
        <h1 className='testimonials-title pl-2 flex justify-center'>Testimonials</h1>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="flex bg-white h-auto text-black rounded-xl">
                <div className="h-auto bg-[#3C2E2E] flex justify-center items-center rounded-t-xl">
                  <img src={d.img} width={100} height={100} alt="" className="h-52 w-48 rounded-full"/>
                </div>

                <div className="description-container flex flex-col items-center justify-center gap-1 p-1 ml-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <div className="flex gap-2 mt-8 mr-30 justify-center">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "1rem"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "1rem"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "1rem"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "1rem"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "1rem"}} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: a,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: b,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: c,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: d,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: e,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];


export default Testimonials;