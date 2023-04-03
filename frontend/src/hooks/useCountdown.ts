import { useEffect, useRef, useState } from 'react';

// Hook Props
interface Props {
  goalTime: number;
}

// Time DataType
type Time = {
  days: number; 
  hours: number; 
  minutes: number; 
  seconds: number;
}

const getReturnValues: (countDown: number) => Time = (countDown) => {
  // Calculate time left
  const days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes: number = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const useCountdown: ({ ...Props }: Props) => Time = ({ goalTime }) => {
  // Clock Time
  const countDownTime: number = Date.now() + goalTime;
  const currentTime: number = new Date().getTime();

  // Statements
  const [ countDown, setCountDown ] = useState<number>(countDownTime - currentTime);
  const setCountDownRef = useRef<() => void>(() => setCountDown(countDownTime - new Date().getTime()));
  
  useEffect(() => {
    if(countDown <= 0) return;
    const interval: NodeJS.Timer = setInterval(setCountDownRef.current, 1000);

    return () => clearInterval(interval);
  }, [ countDown ]);

  return getReturnValues(countDown);
};


