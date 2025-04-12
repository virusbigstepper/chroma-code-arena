
import React from 'react';
import { Code, Users, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pl-8 relative vertical-accent mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            ABOUT THE <span className="text-icpc-yellow">EVENT</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            icon={<Code className="text-icpc-blue" />}
            title="Algorithmic Excellence"
            description="Tackle challenging problems that test your algorithmic thinking and problem-solving skills under time pressure."
          />
          <FeatureCard 
            icon={<Users className="text-icpc-yellow" />}
            title="Team Collaboration"
            description="Work in teams of three to combine your strengths, divide tasks, and collaborate effectively to solve more problems."
          />
          <FeatureCard 
            icon={<Trophy className="text-icpc-red" />}
            title="Compete to Win"
            description="Test your skills against other talented teams for a chance to win prizes and recognition in the programming community."
          />
        </div>
          
        <div className="space-y-6 text-gray-300 max-w-4xl mx-auto">
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
      
      {/* Add some decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-icpc-blue/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-icpc-red/5 rounded-full blur-xl"></div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-6 border border-gray-800 rounded-lg bg-black/20 backdrop-blur-sm hover:border-icpc-yellow/50 transition-all hover:-translate-y-1">
      <div className="p-3 bg-black/40 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default About;
