import Link from 'next/link';
import React from 'react';
import { navLinks, socialLinks } from '../../util/links';
import Icons from '../general/Icons';
import NavLink from '../general/NavLink';

function Footer() {
  return (
    <div className="w-full flex flex-col text-center lg:items-center lg:max-w-[1000px] mx-auto  py-10 md:py-8 justify-center">
      <div className="flex py-4  items-center max-w-[350px] mx-auto w-full justify-between">
        {socialLinks.map(link => (
          <Icons key={link.id} icon={link.icon} href={link.href} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:flex gap-[4px] lg:justify-center py-6 lg:pt-0 lg:pb-4 px-4 text-left">
        {navLinks.map(link => (
          <NavLink
            key={link.id}
            href={link.href}
            text={link.text}
            classNames="font-semibold py-2 lg:py-0 text-base md:text-[18px] hover:text-AP-blue-200"
            footer
          />
        ))}
      </div>
      {/*   <div className="flex items-center justify-between  lg:max-w-[280px] w-full px-4 py-8 lg:py-0 lg:px-0 mx-auto">
        <Link href="#">
          <span className="tracking-[0.02em] text-base cursor-pointer font-montserat font-normal hover:text-AP-blue-500">
            Terms of service
          </span>
        </Link>
        <Link href="#">
          <span className="tracking-[0.02em] text-base cursor-pointer font-montserat font-normal hover:text-AP-blue-500">
            Privacy Policy
          </span>
        </Link>
      </div> */}
    </div>
  );
}

export default Footer;
