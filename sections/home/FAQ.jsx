import React, { useState } from 'react';

function FAQ() {
  return (
    <div className="bg-AP-grey-200 min-h-[500px] w-full py-8 px-1 md:px-12 h-full flex flex-col text-center items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center md:text-left w-full md:max-w-[75%] p-4 py-8 flex flex-col justify-center h-full items-center"
        >
          <h1 className="font-bold text-white font-montserat text-[35px] lg:text-[42px] leading-[50px] lg:leading-[65px] text-center md:text-left">
            Frequently Asked Question
          </h1>
          <p className=" text-white py-6 md:py-3 font-sansPro leading-[30px] text-[18px]">
            Here are the answers to some of your questions. Have more? Get in touch with us info@amapianolife.style
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center px-2 md:p-6">
          <FaqItem
            question="What is Amapiano Lifestyle?"
            desc="Amapiano Lifestyle is a biannual music festival dedicated to celebrating the Creative works of Amapiano creatives."
          />
          <FaqItem
            question="What are the festival dates?"
            desc="The Festival begins on 15th December and will run into the early morning of 18th December 2023"
          />
          <FaqItem
            question="Where is the location of the Amapiano Lifestyle Fest?"
            desc="The Concert will take place Zanzibar. Zanzibar is one of the most popular tourist locations in East Africa."
          />
          <FaqItem
            question="How do I book / get a ticket to the Amapiano Lifestyle Fest"
            desc="Early bird ticket bookings will commence shortly, be sure to be following us on Twitter & Instagram to get notified the minute it’s launched."
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;

const FaqItem = ({ question, desc }) => {
  const [show, setShow] = useState(false);
  const toggleFAQ = () => {
    setShow(!show);
  };
  return (
    <div
      className={`w-full px-4 lg:px-6 items-center py-4 duration-300 mb-8 rounded-[12px] flex flex-col ${
        show ? 'bg-AP-blue-50' : 'border-2 border-white'
      } justify-between`}
    >
      <div className="flex items-center justify-between w-full">
        <h1
          className={`text-[16px] lg:text-[20px] leading-[30px] text-left font-semibold max-w-[90%] lg:max-w-[85%] ${
            show ? 'text-AP-grey-200' : 'text-white'
          }  font-montserat`}
        >
          {question}
        </h1>
        <div
          className={`flex items-center justify-center w-[25px] lg:w-[35px] border cursor-pointer ${
            show ? 'border-AP-grey-200' : 'border-white'
          } h-[25px] lg:h-[35px] rounded-[50%]`}
          onClick={toggleFAQ}
        >
          <i
            className={`ri-${show ? 'subtract' : 'add'}-fill ${
              show ? 'text-AP-grey-200' : 'text-white'
            } text-[14px] lg:text-[18px] font-semibold`}
          ></i>
        </div>
      </div>
      <p
        className={`${
          show ? 'block' : 'hidden'
        } font-sansPro text-[18px] leading-[22px] text-AP-grey-200 duration-300 text-left py-4`}
      >
        {desc}
      </p>
    </div>
  );
};
