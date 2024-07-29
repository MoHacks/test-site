import React, {useState, useEffect} from 'react';
import './Carousel.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Carousel = ({children : slides}) => {
    
    // const src = slides[0].src
    // console.log("SRC: ", src)
    
    
    const [index, setIndex] = useState(0);
    
    const length = slides.length;
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    }   

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval); // Cleanup on component unmount
      }, [handlePrevious, handleNext]); // if the handlePrevious or handleNext buttons were pressed, the useEffect() will reset itself

    return (
        <div className='carousel-header'>
            
            {console.log("index: ", index)}
            <div className='carousel-container'> 
                    {slides.map((slide, i) => (
                        <div key={i} className={`slide ${index === i ? 'visible' : 'hidden'}`}>
                        <img
                            src={slide.src}
                            alt={`Slide ${index}`}
                            className="gallery-image"
                        />
                        {index === i && (
                        <div className="text-overlay">
                            {slide.text}
                        </div>
                    )}
                    </div>   
                        
                    ))}
                    <button className='nav-button prev' onClick={handlePrevious}><FaRegArrowAltCircleLeft/></button>
                    <button className='nav-button next' onClick={handleNext}><FaRegArrowAltCircleRight/></button>
            </div>

        </div>
  )
}

export default Carousel