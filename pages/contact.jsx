import Head from 'next/head';
import React from 'react';
import Input from '../components/general/Input';

function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Amapiano lifestyle - Contact US</title>
        <meta
          name="description"
          content="Have any inquires? Send us a message and we will contact you as soon as we can"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-full px-4 py-12">
        <h1
          className="font-montserat text-[32px] leading-[44px] text-center font-semibold text-AP-grey-200"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Have Any Inquires?
        </h1>
        <p
          className="text-[22px] text-center py-4 lg:py-2 leading-[35px] tracking-[2%] font-sansPro"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Send us a message and we will contact you as soon as we can.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-[550px] py-4 mx-auto w-full flex flex-col"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="my-2">
            <Input type="text" placeholder="Full Name" />
          </div>
          <div className="my-2">
            <Input type="text" placeholder="Email Address" />
          </div>
          <div className="my-2">
            <Input type="text" placeholder="Phone Number" />
          </div>
          <div className="my-2">
            <textarea
              rows={5}
              placeholder="Type your message"
              className="border border-AP-grey-200 text-AP-grey-200 focus:border-AP-blue-100 md:rounded-[25px] rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
            />
          </div>
          <div className="flex lg:justify-end w-full py-[30px]">
            <button
              type="button"
              className="flex flex-row items-center justify-center py-2 px-8 gap-2 bg-AP-blue-100 rounded-[10px] text-AP-grey-300 font-sansPro font-bold text-[20px] leading-[32px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
