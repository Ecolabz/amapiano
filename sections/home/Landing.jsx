/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import NewsletterSubscribeForm from '../../components/general/NewsletterSubscribeForm';

function Landing() {
  return (
    <div className="md:min-h-[90vh] min-h-[65vh] w-full h-full -no-repeat bg-cover flex flex-col items-start justify-center bg-center bg-homeHero py-7 md:py-0 px-2 relative">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="font-[900] text-xl md:text-[48px] capitalize font-montserat md:leading-[58px] bg-white px-4 py-2 hidden md:block md:max-w-[998px] text-left"
      >
        We Don't Host Parties
      </h1>
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="font-[900] text-xl md:text-[48px] capitalize font-montserat md:leading-[58px] bg-white px-4 py-2 hidden md:block md:max-w-[998px] text-left self-center mt-4"
      >
        We Are A Lifestyle Connoisseur
      </h1>
      <h1 className="font-[900] block md:hidden text-center px-6 leading-[45px] text-3xl uppercase font-sansPro text-white">
        {' '}
        AMAPIANO LIFESTYLE <br /> IS HOSTING THE BIGGEST PARTY YOU’VE EVER SEEN.
      </h1>
      <div className="self-center w-[53.5rem] mt-4">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="hidden md:inline float-right tracking-[2%] md:py-3 self-end leading-[40px] text-[18px] md:text-[25px] bg-white px-4 py-2 font-sansPro"
        >
          Get ready for the event of the year !
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full">
        <NewsletterSubscribeForm />
      </div>
      {/* <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex flex-col md:flex-row md:items-center justify-center w-full px-4 lg:px-0 mb-2   md:max-w-[470px] mx-auto py-4 md:space-x-4"
      >
        <Input type={'text'} placeholder={'Email Address'} />
        <div className="block mb-3 md:hidden"></div>
        <Button title={'Subscribe'} />
      </div> */}
      <div className="absolute left-0 w-full -bottom-[100px] ">
        <img src="/assets/home-shadow-rectangle.svg" alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Landing;
