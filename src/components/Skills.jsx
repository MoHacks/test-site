import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import b from '../images/sales_tuxedo.png';
import a from '../images/marketing_sales.png';
import c from '../images/software.png';

const Skills = () => {
  const [isInView, setIsInView] = useState({
    img1: false,
    img2: false,
    img3: false,
    text1: false,
    text2: false,
    text3: false
  });

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(prevState => ({
            ...prevState,
            [entry.target.dataset.key]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    if (img1Ref.current) observer.observe(img1Ref.current);
    if (img2Ref.current) observer.observe(img2Ref.current);
    if (img3Ref.current) observer.observe(img3Ref.current);
    if (text1Ref.current) observer.observe(text1Ref.current);
    if (text2Ref.current) observer.observe(text2Ref.current);
    if (text3Ref.current) observer.observe(text3Ref.current);

    return () => {
      if (img1Ref.current) observer.unobserve(img1Ref.current);
      if (img2Ref.current) observer.unobserve(img2Ref.current);
      if (img3Ref.current) observer.unobserve(img3Ref.current);
      if (text1Ref.current) observer.unobserve(text1Ref.current);
      if (text2Ref.current) observer.unobserve(text2Ref.current);
      if (text3Ref.current) observer.unobserve(text3Ref.current);
    };
  }, []);

  return (
    <div className='skills-header'>
      <div className='skills-container'>
        <h1 className='skills-title'>Skills You Will Learn</h1>
        <div className='skills-section'>
          {/* Row 1 */}
          <div className='row-1'>
            <div className={`left-row-1 ${isInView.text1 ? 'slide-in-left' : ''}`} ref={text1Ref} data-key="text1">
              <h2>Choose from a Variety of Programs</h2>
              <p>Access a wide suite of Programs that teach you public speaking, sales, copywriting, marketing, and much more!</p>
            </div>
            <div className='centre-block-1'>
              <div className='centre-icon-wrap'>
                <div className='centre-number'>1</div>
              </div>
            </div>
            <img src={a} alt="a" className={`img-1 a ${isInView.img1 ? 'slide-in-right' : ''}`} ref={img1Ref} data-key="img1" style={{ width: '29rem', marginTop: '5rem', marginLeft: '3rem', borderRadius: '40%' }} />
          </div>
          {/* Row 2 */}
          <div className='row-2'>
            <div className={`left-row-2 ${isInView.text2 ? 'slide-in-left' : ''}`} ref={text2Ref} data-key="text2">
              <h2>Rigorous Mentors and Training Programs</h2>
              <p>Learn from those that have over a decade experience and made over 7 figures with high-ticket sales.</p>
            </div>
            <div className='centre-block-2'>
              <div className='centre-icon-wrap'>
                <div className='centre-number'>2</div>
              </div>
            </div>
            <img src={b} alt="b" className={`img-2 b ${isInView.img2 ? 'slide-in-right' : ''}`} ref={img2Ref} data-key="img2" style={{ width: '40%', marginTop: '5rem', marginLeft: '3rem', borderRadius: '40%' }} />
          </div>
          {/* Row 3 */}
          <div className='row-3'>
            <div className={`left-row-3 ${isInView.text3 ? 'slide-in-left' : ''}`} ref={text3Ref} data-key="text3">
              <h2>Learn to use the best tools to get the job done</h2>
              <p>Whether it be appointment setting, sales tracking, invoicing, and sales analytics, we are here to give and teach you the best tools for the job.</p>
            </div>
            <div className='centre-block-3'>
              <div className='centre-icon-wrap'>
                <div className='centre-number'>3</div>
              </div>
            </div>
            <img src={c} alt="c" className={`img-3 c ${isInView.img3 ? 'slide-in-right' : ''}`} ref={img3Ref} data-key="img3" style={{ width: '40%', marginTop: '5rem', marginLeft: '3rem', borderRadius: '40%' }} />
          </div>
        </div>
        <div className='process-line'></div>
      </div>
    </div>
  );
}

export default Skills;
