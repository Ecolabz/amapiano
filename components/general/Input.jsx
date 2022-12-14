import React from 'react';

function Input({ type, placeholder, name, ...rest }) {
  return (
    <input
      type={type}
      name={name}
      {...rest}
      placeholder={placeholder}
      className="border border-AP-grey-200 text-AP-grey-200 focus:border-AP-blue-100 md:rounded-[12px] rounded-[12px] focus:outline-none w-full text-[16px] font-montserat px-4 py-4 h-full placeholder:font-sansPro"
      required
    />
  );
}

export default Input;
