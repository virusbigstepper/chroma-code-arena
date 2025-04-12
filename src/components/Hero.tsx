import React from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";

import { Button } from "@/components/ui/button";
import Countdown from './Countdown';
import { ChevronDown, Code, Users, Trophy, Calendar, Clock } from 'lucide-react';

const Hero = () => {
  // Set target date to 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-8">
      {/* Background animated elements */}
      <BackgroundBeams className="opacity-" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-icpc-blue/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-icpc-yellow/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-icpc-red/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Title Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h1 className="text-6xl md:text-9xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-icpc-yellow via-icpc-red to-icpc-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                HASHCODE
              </span>
            </h1>
            <p className="text-gray-400 text-lg text-center mb-8">
              An immersive coding competition inspired by the International Collegiate Programming Contest
            </p>
            <div className="flex justify-center">
              <Button 
                className="rounded-full px-12 py-8 text-white text-xl font-bold relative overflow-hidden group hover:scale-105 transition-transform duration-200"
                style={{
                  background: 'linear-gradient(45deg, #F8C949, #B42926, #328CC8)',
                  backgroundSize: '200% 200%',
                  transition: 'background-position 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0%';
                }}
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* Countdown and Date Cards */}
          <div className="md:col-span-2 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="text-icpc-yellow" size={32} />
              <h3 className="text-xl font-bold">Event Countdown</h3>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-white font-mono bg-black/70 px-4 py-2 rounded">
                <Countdown targetDate={targetDate} />
              </span>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="text-icpc-blue" size={32} />
              <h3 className="text-xl font-bold">Event Date</h3>
            </div>
            <p className="text-gray-400">Coming Soon</p>
          </div>

          {/* Feature Cards */}
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <Code className="text-icpc-blue" size={32} />
              <h3 className="text-xl font-bold">Algorithmic Excellence</h3>
            </div>
            <p className="text-gray-400">Tackle challenging problems that test your algorithmic thinking and problem-solving skills.</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-icpc-yellow" size={32} />
              <h3 className="text-xl font-bold">Team Collaboration</h3>
            </div>
            <p className="text-gray-400">Work in teams of three to combine strengths and solve problems together.</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="text-icpc-red" size={32} />
              <h3 className="text-xl font-bold">Compete to Win</h3>
            </div>
            <p className="text-gray-400">Test your skills against other teams for prizes and recognition.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
