import Link from 'next/link';
import React from 'react';

function Icons({ href, icon }) {
  return (
    <Link href={href}>
      <a target={'_blank'}>
        <i className={`ri-${icon} text-5xl cursor-pointer hover:text-AP-blue-100 duration-300`}></i>
      </a>
    </Link>
  );
}

export default Icons;
