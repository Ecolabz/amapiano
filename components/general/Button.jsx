import React from 'react';
import Link from 'next/link';

function Button({ title, href, ...rest }) {
  return (
    <>
      {href ? (
        <Link href={href} {...rest}>
          <span className="flex items-center justify-center cursor-pointer border-none bg-AP-blue-100 rounded-[10px] px-8 py-4 font-semibold font-montserat text-[16px] capitalize transition-all duration-500 hover:bg-AP-blue-200">
            {title}
          </span>
        </Link>
      ) : (
        <button
          className="flex items-center justify-center cursor-pointer border-none bg-AP-blue-100 rounded-[10px] px-8 py-4 font-semibold font-montserat text-[16px] capitalize transition-all duration-500 hover:bg-AP-blue-200"
          {...rest}
        >
          {title}
        </button>
      )}
    </>
  );
}

export default Button;
