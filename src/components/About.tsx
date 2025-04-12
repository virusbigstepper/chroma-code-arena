
import React from 'react';

const About = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pl-8 relative vertical-accent">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ABOUT THE <span className="text-icpc-red">EVENT</span>
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <p>
              The International Collegiate Programming Contest (ICPC) is the premier global programming competition conducted by and for the world's universities. For over four decades, the ICPC has grown to be a game-changing global competitive educational program that has raised aspirations and performance of generations of the world's problem solvers in the computing sciences and engineering.
            </p>
            <p>
              Our event simulates the ICPC experience, challenging participants with algorithmic problems that must be solved efficiently under time pressure. Teams collaborate to solve as many problems as possible within a strict time limit, writing code that is not only correct but optimized.
            </p>
            <p>
              Whether you're a seasoned competitive programmer or new to the field, this event provides valuable experience in problem-solving, teamwork, and coding under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
