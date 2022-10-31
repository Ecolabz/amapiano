import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    email && email.indexOf('@') > -1 && onValidated({ EMAIL: email });
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <>
      {status && status === 'success' ? (
        <div className="flex flex-col items-center justify-center text-AP-blue-100 font-sansPro  tracking-[0.02em] text-[32px] leading-[40px] py-16">
          {message}
        </div>
      ) : (
        <form
          className="flex flex-col md:flex-row md:items-center w-full md:max-w-[470px] mx-auto px-2 md:px-0 py-4 md:space-x-4"
          onSubmit={e => handleSubmit(e)}
        >
          <Input type="email" placeholder={'Email Address'} value={email} onChange={handleChange} />
          <div className="block mb-2 md:hidden"></div>

          <Button type="submit" title={status === 'sending' ? 'Loading...' : 'Subcribe'} />
        </form>
      )}
    </>
  );
};

const NewsletterSubscribeForm = props => {
  const MAILCHIMP_URL = `${process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY}`;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={props => {
        const { subscribe, status, message } = props || {};
        return <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />;
      }}
    />
  );
};

export default NewsletterSubscribeForm;
