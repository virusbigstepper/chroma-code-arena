
import React from 'react';
import { Button } from "@/components/ui/button";
import Countdown from './Countdown';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  // Set target date to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative py-16">
      {/* Background animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-icpc-blue/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-icpc-yellow/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-icpc-red/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute h-px w-px bg-white shadow-[0_0_10px_10px_rgba(255,255,255,0.2)] left-1/4 top-1/4"></div>
        <div className="absolute h-px w-px bg-white shadow-[0_0_10px_10px_rgba(255,255,255,0.1)] left-3/4 top-3/4"></div>
        <div className="absolute h-px w-px bg-white shadow-[0_0_10px_10px_rgba(255,255,255,0.15)] left-1/2 top-2/3"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl pl-8 relative vertical-accent">
          <div className="animate-fade-in">
            <p className="text-xl md:text-3xl mb-2">
              <span className="text-icpc-yellow">ICPC</span> INSPIRED
            </p>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-text-gradient">
              CHROMA <span className="text-icpc-yellow">CODE</span> ARENA
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              An immersive coding competition inspired by the International Collegiate Programming Contest. Teams of three tackle algorithmic challenges in a test of skill, speed, and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button 
                className="rounded-full px-6 py-6 bg-icpc-yellow text-icpc-black hover:bg-icpc-yellow/80 text-black font-bold"
              >
                Register Now
              </Button>
              
              <div className="flex items-center space-x-2 p-2 bg-black/40 backdrop-blur-sm rounded-md border border-gray-800">
                <span className="text-icpc-yellow font-mono">Event starts in:</span>
                <span className="text-white font-mono bg-black/70 px-2 py-1 rounded">
                  <Countdown targetDate={targetDate} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <button 
          onClick={scrollToAbout} 
          className="text-gray-400 hover:text-icpc-yellow transition-colors animate-bounce flex flex-col items-center"
          aria-label="Scroll to About section"
        >
          <span className="mb-2 text-sm">Learn more</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
