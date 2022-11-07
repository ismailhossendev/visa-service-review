import React from 'react';
import Review from './Review';
import Slider from "react-slick";
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa';



const Testimonials = () => {


    function SampleNextArrow(props) {
        const {  onClick } = props;
        return (
            <p onClick={onClick} className="absolute top-[50%] -right-1 inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"> <FaAngleRight/></p>
        );
      }
      
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <p onClick={onClick} className="absolute -left-3 top-[49%] z-50 inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"> <FaAngleLeft/></p>
        );
      }


    const settings = {
        dots: true,
        infinite: true,
        
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className='relative'>
          <h2 className='text-3xl text-center font-semibold my-2 font-serif'>Read trusted reviews from our travelers </h2>
          <Slider {...settings}>
            {
                [...Array(10)].map(review => <div className=""><Review/></div> )
            }
          </Slider>
        </div>
      );
};

export default Testimonials;