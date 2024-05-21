/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
// import getWindowDimensions from '../../util/viewPort';
import dynamic from 'next/dynamic';
import useDeviceSize from '../../util/viewPort';

// const NoSSRDimension = dynamic(() => import('../../util/viewPort'), { ssr: false });

const Carousel = () => {
  const [width] = useDeviceSize();
  const [current, setCurrent] = useState(0);
  const settings = {
    className: 'center',
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    // focusOnSelect: true,
    draggable: true,
    dots: true,
    autoplaySped: 1000,
    speed: 500,
    afterChange: current => setCurrent(current),
    customPaging: i => (
      <div
        className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${current === i ? 'bg-AP-blue-300' : 'bg-gray-500'}`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 450,
        settings: {
          autoplay: true,
          centerMode: false,
          infinite: true,
          centerPadding: '60px',
          slidesToShow: 1,
          arrows: false,
          draggable: true,
          dots: true,
          autoplaySped: 1000,
          speed: 500,
          afterChange: current => setCurrent(current),
          customPaging: i => (
            <div
              className={`w-[20px]  mt-4 h-[4px] rounded-[10px] ${current === i ? 'bg-AP-blue-300' : 'bg-gray-500'}`}
            ></div>
          ),
        },
      },
    ],
  };

  const images = [
    '/assets/pool.jpeg',
    '/assets/room.jpg',
    '/assets/darktime.jpg',
    '/assets/lightfall.png',
    '/assets/moonlight.jpg',
    '/assets/apartment.jpg',
  ];
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i} className={`w-[260px]  cursor-pointer  h-[350px] md:h-[300px]`}>
            <img
              src={image}
              className={`object-cover object-center w-full h-full ${
                current === i
                  ? 'scale-110 -translate-x-3  duration-500'
                  : ` z-50 ${width <= 410 ? 'scale-75' : 'scale-100'}`
              }`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
