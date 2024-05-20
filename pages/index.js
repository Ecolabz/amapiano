import Head from 'next/head';
import CountDown from '../sections/home/CountDown';
import FAQ from '../sections/home/FAQ';
import Landing from '../sections/home/Landing';
import Packages from '../sections/home/Packages';
import Subscribe from '../sections/home/Subscribe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Amapiano lifestyle: hosting the biggest party you’ve ever seen.</title>
        <meta name="description" content="Amapiano lifestyle the Littiest Music Festival You Have Ever Seen!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#231c3b" />
      </Head>
      <Landing />
      <CountDown />
      <Packages />
      {/* <FAQ /> */}
      <Subscribe />
    </>
  );
}
