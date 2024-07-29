import React from 'react';
import './Hero.css';
import B from '../images/B-nobackground.png';
import dollar from '../images/dollar-nobackground.png';
import cursive from '../images/swish-nobackground.png';
import Carousel from './Carousel.jsx';

const slides = [
  {src: require('../images/carousel/public-speaker.png'), alt: 'public-speaker', text: "Become a confident public speaker"},
  {src: require('../images/carousel/btcmoney.png'), alt: 'btcmoney', text: "Earn cash quickly"},
  {src: require('../images/carousel/mentorship.png'), alt: 'mentorship', text: "Be mentored by 7-figure experts with over a decade of experience"},
  {src: require('../images/carousel/close-deals.png'), alt: 'close-deals', text: "Close high-ticket offers"},
  {src: require('../images/carousel/line-chart-sales.png'), alt: 'line-chart-sales', text: "Track sales, invoices, and revenue using software"},
];


const Hero = () => {
  return (
    <div className='hero-header'>
      <div className='Hero-container'>
        <div className='images-container'>
          <img src={B} alt="B" className='hero-image'></img>
          <img src={dollar} alt="dollar" className='hero-image'></img>
          <img src={B} alt="B" className='hero-image'></img>
        </div>
        
        <h1 className='hero-title'>
          Brute Sales Bootcamp
        </h1>
        <div>
          <img src={cursive} alt="cursive" className='cursive'></img>
        </div>
        <h2 className='hero-subtitle'>Ready to take your business to the next level? This rigorous bootcamp will help you get there.</h2>
        {/* <h2 className='hero-subtitle'>Master <span style={{ fontWeight: 'bolder', color:'#0040ff96'}}> client out-reach, sales, marketing, and closing high-ticket offers </span> with our exclusive master class  */}
          {/* Sales Bootcamp Program!</h2> */}
          <div>
            <Carousel children={slides}/>
          </div>
          
        </div>
        
    </div>
  )
}

export default Hero