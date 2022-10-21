import React, { useState } from 'react';
import { navLinks } from '../../util/links';
import Logo from '../general/Logo';
import NavLink from '../general/NavLink';

function NavBar() {
  const [show, setShow] = useState();

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="bg-AP-blue-100 ">
      <nav className="w-full  py-[20px] flex items-center justify-between px-4 md:px-8">
        <Logo />

        <div className="items-center justify-between hidden md:flex">
          {navLinks.map(link => (
            <NavLink
              key={link.id}
              href={link.href}
              text={link.text}
              classNames="text-[18px] font-bold hover:text-AP-blue-400"
            />
          ))}
        </div>

        <button
          className='block md:hidden className="w-full px-2 py-1 rounded-lg text-AP-grey-200 hover:text-AP-blue-200 border-AP-grey-200 hover:border-AP-blue-400'
          onClick={toggle}
        >
          <i className={`${!show ? 'ri-menu-3-fill duration-500' : 'ri-close-line'} text-2xl text-gray-800`} />
        </button>
      </nav>
      <div className={`${show ? 'flex duration-500  flex-col items-center pt-2 pb-8' : 'py-0'}`}>
        {show &&
          navLinks.map(link => (
            <NavLink
              key={link.id}
              href={link.href}
              text={link.text}
              classNames="text-[15px] py-1 font-bold hover:text-AP-blue-400"
              onClick={() => setShow(false)}
            />
          ))}
      </div>
    </div>
  );
}

export default NavBar;
