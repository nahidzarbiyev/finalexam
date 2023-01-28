import React from 'react'
import './index.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className='background'>
      <div className='sliders'>
      <Slider {...settings}>
          <div className='slick'>
           <div className="slider">
           <div className='text'>
              <h1>THE VIEW ON REFRESHING</h1>
              <p>Phosfluorescently maintain impactful process.</p>
              <button>READ MORE</button>
            </div>
            <div className='image'>
              <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image1.jpg" alt="" />
            </div>
           </div>
          </div>
          <div className='slick'>
           <div className="slider">
           <div className='text'>
              <h1>ONLY EXQUISITE REFRESHING</h1>
              <p>Phosfluorescently maintain impactful process.</p>
              <button>READ MORE</button>
            </div>
            <div className='image'>
              <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image2.jpg" alt="" />
            </div>
           </div>
          </div>
          <div className='slick'>
           <div className="slider">
           <div className='text'>
              <h1>THE FINE REFRESHING</h1>
              <p>Phosfluorescently maintain impactful process.</p>
              <button>READ MORE</button>
            </div>
            <div className='image'>
              <img src="https://mobirise.com/extensions/naturalm4/natural-cosmetic/assets/images/image3.jpg" alt="" />
            </div>
           </div>
          </div>
       
     
        </Slider>
      
      </div></div>
  )
}

export default SliderComponent