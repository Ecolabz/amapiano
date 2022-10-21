/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function History() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center mx-auto px-4 md:px-[291px] py-[58px] md:py-[90px] relative">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="font-montserat text-2xl md:text-[32px] md:leading-[44px] lg:mb-4 text-center font-semibold text-AP-grey-200"
        >
          ABOUT <span className="text-AP-blue-300">AMAPIANO LIFESTYLE</span>
        </h1>
        <div className="w-full flex flex-col pt-[24px] lg:pt-[30px] pb-4 md:pb-[147px] gap-5">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-lg md:text-[28px] md:leading-[40px] tracking-[0.02em] font-normal text-AP-grey-300 font-sansPro"
          >
            Amapiano Lifestyle is an Amapiano themed music festival dedicated to celebrating the Creative works of
            Amapiano creatives.
          </p>
          <p className="text-lg md:text-[28px] md:leading-[40px] tracking-[0.02em] font-normal text-AP-grey-300 font-sansPro">
            Amapiano Lifestyle brand was created to explore the developing fusion of Amapiano and our everyday lifestyle
            and as a way of bringing not just Africa, but the world together through Amapiano Music.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-lg md:text-[28px] md:leading-[40px] tracking-[0.02em] font-normal text-AP-grey-300 font-sansPro"
          >
            During this year's maiden event, Amapiano Lifestyle will bring "Lifestyle Tourism" to life through fashion,
            food, art and music{' '}
          </p>
        </div>
      </section>

      <div className="w-full h-full bg-AP-blue-100 mt-[143px] relative">
        <div className="flex flex-col items-center justify-center px-4 md:px-[258px]">
          <div
            className="w-full md:w-[768px] h-full md:h-[570px] -mt-[100px] md:-mt-[250px]"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src="/assets/about.png" alt="" className="w-full h-full" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2300"
            className="w-full flex flex-col pt-[60px] lg:pt-[99px] pb-[100px] lg:pb-[133px]"
          >
            <div className="flex items-center justify-start w-full gap-6 md:gap-6 pb-[26px]">
              <img src="/assets/vision.svg" alt="our vision" className="w-[40px] h-[40px]  md:w-[60px] md:h-[60px]" />

              <h2 className="text-2xl md:text-[28px] font-montserat font-semibold text-AP-grey-200">Our Vision</h2>
            </div>
            <p className=" text-AP-grey-300 text-lg md:text-[28px] md:leading-[40px] font-sansPro font-normal">
              We are on a mission to empower the next sets of Amapiano creatives from African as we will give them a
              platform to be heard by mainstream audience and community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
