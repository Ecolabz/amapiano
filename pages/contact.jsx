import Head from 'next/head';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../components/general/Input';
// import { addDocument } from '../db/methods';
import { send } from 'emailjs-com';

function Contact() {
  const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    send('service_7u1cbgb', 'template_oezgjg1', form, 'ghNsOgyHsphEuXA90')
      .then(res => {
        setLoading(false);
        toast.success('Your response was sent successfully');
        setForm(initialState);
      })
      .catch(err => {
        setLoading(false);
        console.log(err.messge);
        toast.error('Error while sending message');
      });
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
            <Input type="text" placeholder="Full Name" name="fullName" onChange={handleChange} />
          </div>
          <div className="my-2">
            <Input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
          </div>
          <div className="my-2">
            <Input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} />
          </div>
          <div className="my-2">
            <textarea
              rows={5}
              name="message"
              onChange={handleChange}
              placeholder="Type your message"
              className="border border-AP-grey-200 text-AP-grey-200 focus:border-AP-blue-100 md:rounded-[25px] rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
              required
            />
          </div>
          <div className="flex lg:justify-end w-full py-[30px]">
            <button className="flex flex-row items-center justify-center py-2 px-8 gap-2 bg-AP-blue-100 rounded-[10px] text-AP-grey-300 font-sansPro font-bold text-[20px] leading-[32px]">
              {loading ? 'Sending....' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
