/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';

function Logo() {
  return (
    <Link href={'/'} passHref>
      <a className="flex items-center justify-center w-[203px] h-[33] md:h-[48px]">
        <img src="/assets/logo.svg" alt="logo" className="object-cover w-full h-full bg-center bg-cover" />
      </a>
    </Link>
  );
}

export default Logo;
