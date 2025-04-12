
import React from 'react';
import { Button } from "@/components/ui/button";
import Countdown from './Countdown';

const Hero = () => {
  // Set target date to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pl-8 relative vertical-accent">
          <p className="text-xl md:text-3xl mb-2">
            <span className="text-icpc-yellow">ICPC</span> INSPIRED
          </p>
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
            EVENT <span className="text-icpc-yellow">NAME</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Some description about the event along with a timer below the register now button giving it a codeforces vibe to it.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button 
              className="rounded-full px-6 py-6 bg-transparent border border-icpc-yellow hover:bg-icpc-yellow/20 text-white"
            >
              <span className="mr-2">Register Now</span>
              <Countdown targetDate={targetDate} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 text-xs text-gray-500 p-4">
        *video mashup behind
      </div>
    </section>
  );
};

export default Hero;
