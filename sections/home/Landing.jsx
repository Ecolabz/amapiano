/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import MailchimpFormContainer from '../../components/MailChimpFormContainer';

function Landing() {
  return (
    <div className="md:min-h-[90vh] min-h-[65vh] w-full h-full -no-repeat bg-cover flex flex-col items-center justify-center bg-center bg-homeHero py-7 md:py-0 px-2 relative">
      <h1bg
        data-aos="fade-right"
        data-aos-duration="1000"
        className="font-[900] text-xl md:text-[48px] uppercase font-montserat md:leading-[58px] text-white text-center hidden md:block md:max-w-[998px] mx-auto"
      >
        AMAPIANO LIFESTYLE IS HOSTING THE BIGGEST PARTY YOU’VE EVER SEEN.
      </h1bg>
      <h1 className="font-[900] block md:hidden text-center px-6 leading-[45px] text-3xl uppercase font-sansPro text-white">
        {' '}
        AMAPIANO LIFESTYLE <br /> IS HOSTING THE BIGGEST PARTY YOU’VE EVER SEEN.
      </h1>
      <p
        data-aos="fade-right"
        data-aos-duration="1000"
        className="tracking-[2%] md:py-3 text-white leading-[40px] text-[18px] md:text-[25px] font-sansPro"
      >
        Get ready for the event of the year !
      </p>
      <div data-aos="fade-up" data-aos-duration="2000" className="w-full">
        <MailchimpFormContainer />
        {/* <Input type={'text'} placeholder={'Email Address'} />
        <div className="block mb-3 md:hidden"></div>
        <Button title={'Subscribe'} /> */}
      </div>
      {/* <div className="bg-home-sahdow top-[502px] -left-[156px] bg-no-repeat h-full" /> */}
      <div className="absolute left-0 w-full -bottom-[100px] ">
        <img src="/assets/home-shadow-rectangle.svg" alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Landing;
