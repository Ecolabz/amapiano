/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from 'react';
import Button from '../../components/general/Button';

function CountDown() {
  // timer counter state
  let [days, setDays] = useState('00');
  let [hours, setHours] = useState('00');
  let [mins, setMins] = useState('00');
  let [secs, setSecs] = useState('00');
  const [display, setDisplay] = useState(false);
  let interval = useRef();

  // time counter function
  let startTimer = () => {
    let countdownDate = new Date('Aug 17, 2024 00:00:00').getTime();
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        setDisplay(false);
      } else {
        setDisplay(true);
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);
      }
    }, 1000);
  };

  // countdown functionality on load
  useEffect(() => {
    startTimer();
    const currentValue = interval.current;
    return () => {
      clearInterval(currentValue);
    };
  }, []);

  return (
    <div className="bg-AP-grey-200 min-h-[600px] md:min-h-[500px] h-full w-full py-12 md:py-20  flex flex-col text-center items-center justify-center px-2 relative">
      <h1 className="text-white font-montserat text-[28px] px-6 md:px-0 md:text-[40px] font-semibold leading-[45px] lg:leading-[51px]">
        The Littest Lifestyle Event You Have Ever Seen!{' '}
      </h1>
      <p className="font-sansPro text-white tracking-[0.02em] text-[18px] lg:text-[22px] py-4 leading-[40px]">
        Get ready to have the time of your life!
      </p>
      {display && (
        <div className="w-full flex  justify-center py-8 lg:pt-0 lg:pb-4 md:w-[500px] gap-4 px-4">
          <Time time={days} text="Days" />
          <Time time={hours} text="Hours" />
          <Time time={mins} text="Minutes" />
          <Time time={secs} text="Seconds" hide />
        </div>
      )}
      <div className="py-6 md:pb-[120px] md:pt-6">
        <Button title={'get your tickets'} />
      </div>
      {/* <div className="absolute -bottom-[100px] left-0 w-full">
        <img src="/assets/home-shadow-rectangle-2.svg" alt="" className="w-full h-full" />
      </div> */}
    </div>
  );
}

export default CountDown;

const Time = ({ time, text, hide }) => (
  <div className="flex flex-col w-[90px] items-center justify-center text-center">
    <div className="flex items-center">
      <h1 className="text-white font-montserat leading-[50px] lg:leading-[80px] mr-4 text-[30px] lg:text-[50px] font-light">
        {time}
      </h1>
      <span
        className={`text-white font-montserat leading-[50px] lg:leading-[80px] text-[30px] lg:text-[50px] font-light ${
          hide && 'hidden'
        }`}
      >
        :
      </span>
    </div>
    <p className="font-semibold text-[16px] text-center flex items-center justify-center text-white leading-[22px] md:-ml-6">
      {text}
    </p>
  </div>
);
