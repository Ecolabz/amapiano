import React from 'react';
import Button from '../../components/general/Button';
import Carousel from '../../components/general/Carousel';

function Packages() {
  return (
    <div className="min-h-[600px] bg-AP-blue-25  h-full w-full py-12 flex items-center justify-center flex-col">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="font-montserat text-[30px] lg:text-[40px] font-semibold mb-10 leading-[58px] text-center"
      >
        Amapiano Lifestyle Summer Vibes Zanzibar
      </h1>
      <div className="w-full px-4  md:max-w-[1300px] mx-auto">
        <Carousel />
      </div>
      <p className="text-center max-w-[800px] mx-auto font-sansPro leading-[30px] pt-16 pb-8 lg:pt-12  lg:pb-8 px-6 lg:px-0 text-[17px] lg:text-[22px]">
        Yes, our first lifestyle event is happening in Zanzibar this summer! <br /> We also have a host of other extra
        experiences to ensure you have a well rounded and culturally immersed visit to Zanzibar for Amapiano Lifestyle
        Summer Vibes Event.
      </p>
      <Button title="Learn More" href="/events" />
    </div>
  );
}

export default Packages;
