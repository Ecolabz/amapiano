import Head from 'next/head';
import React from 'react';
import LifeStyle from '../sections/events/LifeStyle';

function Events() {
  return (
    <>
      <Head>
        <title>Amapiano lifestyle - Events</title>
        <meta name="description" content="amapiano lifestyle events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LifeStyle />
    </>
  );
}

export default Events;
