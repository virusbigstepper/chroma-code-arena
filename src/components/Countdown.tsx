import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const TimeUnit = ({ value, label }: { value: string, label: string }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="bg-black/70 rounded-lg px-4 py-2 text-3xl font-mono font-bold min-w-[80px] text-center">
        {value}
      </div>
      <div className="text-sm mt-1 text-gray-400">{label}</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-pink-500">TIME LEFT</h3>
      <div className="flex items-center">
        <TimeUnit value={formatNumber(timeLeft.days)} label="Days" />
        <div className="text-2xl font-bold mx-1 mb-8">:</div>
        <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
        <div className="text-2xl font-bold mx-1 mb-8">:</div>
        <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
        <div className="text-2xl font-bold mx-1 mb-8">:</div>
        <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" />
      </div>
    </div>
  );
};

export default Countdown;
