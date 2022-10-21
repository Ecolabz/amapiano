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

      <section className="w-full flex flex-col items-center justify-center py-[100px] md:py-[159px] bg-AP-grey-200 px-8">
        <div className="w-full md:max-w-[755px] text-center" data-aos="flip-up" data-aos-duration="1000">
          <h1 className=" font-montserat font-semibold text-white text-3xl md:text-[48px] md:leading-[59px]">
            BE A SPONSOR
          </h1>

          <p className="text-left font-sansPro font-normal text-white text-lg md:text-[32px] md:leading-[40px] tracking-[0.02em] pt-[55px]">
            Amapiano Lifestyle seeks sponsors for it’s Maiden event to ensure it’s a massive success.
          </p>
          <p className="text-left font-sansPro font-normal text-white text-lg md:text-[32px] md:leading-[40px] tracking-[0.02em] pt-10">
            To become a sponsor of the Amapiano lifestyle event, please contact{' '}
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
