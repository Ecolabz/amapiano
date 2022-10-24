import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Input from './general/Input';
import Button from './general/Button';
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
    <form
      className="flex flex-col md:flex-row md:items-center w-full md:max-w-[470px] mx-auto px-2 md:px-0 py-4 md:space-x-4"
      onSubmit={e => handleSubmit(e)}
    >
      <Input type="email" name="email" placeholder={'Email Address'} value={email} onChange={handleChange} />
      <div className="block mb-2 md:hidden"></div>

      {status === 'sending' ? (
        <Button title={'sending...'} />
      ) : status === 'success' ? (
        <Button title={'Subcribe'} />
      ) : (
        <Button type="submit" title={'Subscribe'} />
      )}
    </form>
  );
};

const MailchimpFormContainer = props => {
  //   const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=6f74895adb75ee60d74c66f77&id=2ead9935e1`;

  const post_url = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const form_uid = process.env.NEXT_PUBLIC_MAILCHIMP_FORM_UID;
  const form_id = process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ID;

  const mailchimp_url = `${post_url}?u=${form_uid}&id=${form_id}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={mailchimp_url}
        render={({ subscribe, status, message }) => (
          <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)} />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
