import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function NavLink({ href, text, classNames, footer, ...rest }) {
  const router = useRouter();
  const active = router.pathname === href ? 'text-AP-blue-400' : 'text-AP-grey-300';
  return (
    <Link href={href}>
      <span
        {...rest}
        className={`${active} ${classNames} font-montserat font-bold duration-500 uppercase  cursor-pointer text-[24px] leading-[34px]`}
      >
        {text}
      </span>
    </Link>
  );
}

export default NavLink;
