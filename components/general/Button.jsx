import React from 'react';

function Button({ title, ...rest }) {
  return (
    <button
      className="flex items-center justify-center border-none bg-AP-blue-100 rounded-[10px] px-8 py-4 font-semibold font-montserat text-[16px] capitalize transition-all duration-500 hover:bg-AP-blue-200"
      {...rest}
    >
      {title}
    </button>
  );
}

export default Button;
