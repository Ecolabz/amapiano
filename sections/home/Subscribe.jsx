import React from 'react';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import MailchimpFormContainer from '../../components/MailChimpFormContainer';

function Subscribe() {
  return (
    <div className="min-h-[400px] py-4 md:min-h-[300px] h-full md:pt-12 flex mb-4 flex-col text-center items-center justify-center px-2">
      <h1 className="font-montserat text-2xl md:text-[34px] font-semibold leading-[44px]">Subscribe To</h1>
      <h1 className="font-montserat text-[28px] lg:text-[48px] font-bold leading-[35px] lg:leading-[59px]">
        AMAPIANO LIFESTYLE
      </h1>
      <p className="font-sansPro  tracking-[0.02em] text-[22px] py-2 leading-[40px]">
        Get ready to have the time of your life
      </p>
      {/* <div className="flex flex-col md:flex-row md:items-center w-full md:max-w-[470px] mx-auto px-2 md:px-0 py-4 md:space-x-4">
        <Input type={'text'} placeholder={'Email Address'} />
        <div className="block mb-2 md:hidden"></div>
        <Button title={'Subscribe'} />
      </div> */}
      <div className="w-full">
        <MailchimpFormContainer />
      </div>
    </div>
  );
}

export default Subscribe;
