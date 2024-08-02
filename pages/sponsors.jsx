import Head from 'next/head';
import React from 'react';

function Sponsors() {
  return (
    <>
      <Head>
        <title>Amapiano lifestyle - SPONSORS</title>
        <meta name="description" content="Be a sponsor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full flex flex-col items-center justify-center py-[100px] bg-AP-grey-200 px-8">
        <div className="w-full md:max-w-[755px] text-center mb-[4rem]" data-aos="flip-up" data-aos-duration="1000">
          <h1 className="my-4 font-montserat font-semibold text-white text-3xl md:text-[48px] md:leading-[59px]">
            SPONSORS
          </h1>
          <div>
            <a className="block w-100 max-w-[300px] mx-auto my-10" href="https://lepoledides.com/">
              <img src="/assets/lepoledides.png" alt="lepoledides" />
            </a>
          </div>
        </div>
        <div className="w-full md:max-w-[755px] text-center" data-aos="flip-up" data-aos-duration="1000">
          <h2 className=" font-montserat font-semibold text-white text-2xl md:text-[30px] md:leading-[31px]">
            BECOME A SPONSOR
          </h2>

          <p
            className=" font-sansPro font-normal text-white text-lg md:text-[22px] md:leading-[30px] tracking-[0.02em] pt-[55px]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Sponsors Wanted, are you are a brand looking to become a sponsor of our lifestyle events?
          </p>
          <p
            className=" font-sansPro font-normal text-white text-lg md:text-[22px] md:leading-[30px] tracking-[0.02em] pt-10"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Don&apos;t hesitate to shoot us an email:{' '}
            <a href="malito:info@amapianolifestyle.com" className="underline ">
              info@amapianolifestyle.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Sponsors;
