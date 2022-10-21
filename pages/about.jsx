import Head from 'next/head';
import React from 'react';
import History from '../sections/about/About';

function About() {
  return (
    <>
      <Head>
        <title>Amapiano lifestyle - About</title>
        <meta
          name="description"
          content="Amapiano Lifestyle is an Amapiano themed music festival dedicated to celebrating the Creative works of Amapiano creatives"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <History />
    </>
  );
}

export default About;
