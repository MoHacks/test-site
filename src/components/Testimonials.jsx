import React from 'react';
import './Testimonials.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import a from '../images/carousel/public-speaker.png';
import b from '../images/ben.jpg';
import c from '../images/carousel/mentorship.png';
import d from '../images/suad.jpg';
import e from '../images/joelvalve.jpg';


const Testimonials = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='testimonials-section w-3/4 m-auto'>
      <div className="mt-20">
        <h1 className='testimonials-title'>Testimonials</h1>
        <div className="testimonials-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-100 bg-[#3C2E2E] flex justify-center items-center rounded-t-xl">
                  <img src={d.img} width={100} height={100} alt="" className="h-52 w-48 rounded-full"/>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <div className="flex gap-2 mt-8 w-[15rem]">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "40px"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "40px"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "40px"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "40px"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", height: "40px"}} />
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