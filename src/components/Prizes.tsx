
import React from 'react';
import { Award, Gift } from 'lucide-react';

const Prizes = () => {
  return (
    <section id="prizes" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pl-8 relative vertical-accent mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            EVENT <span className="text-icpc-blue">PRIZES</span>
          </h2>
          <p className="text-gray-400 mb-10">Compete to win exciting prizes and recognition</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <PrizeCard 
            position="2nd"
            prize="₹50,000"
            icon={<Award className="text-[#C0C0C0]" size={40} />}
            color="bg-gradient-to-b from-[#C0C0C0]/20 to-black/40"
            borderColor="border-[#C0C0C0]/40"
          />
          <PrizeCard 
            position="1st"
            prize="₹100,000"
            icon={<Award className="text-[#FFD700]" size={50} />}
            color="bg-gradient-to-b from-[#FFD700]/20 to-black/40"
            borderColor="border-[#FFD700]/40"
            featured={true}
          />
          <PrizeCard 
            position="3rd"
            prize="₹25,000"
            icon={<Award className="text-[#CD7F32]" size={40} />}
            color="bg-gradient-to-b from-[#CD7F32]/20 to-black/40"
            borderColor="border-[#CD7F32]/40"
          />
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Gift className="mr-2 text-icpc-yellow" />
            Special Awards
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SpecialAward title="Most Elegant Solution" description="For the team with the most elegant and efficient approach to solving problems" />
            <SpecialAward title="Best Newcomers" description="For the best performing team participating for the first time" />
            <SpecialAward title="Most Problems Solved" description="For the team that solves the highest number of problems" />
            <SpecialAward title="Fastest Solution" description="For the team with the fastest correct solution to a specific challenge" />
          </ul>
        </div>
      </div>
      
      {/* Add some decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-icpc-yellow/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-icpc-blue/5 rounded-full blur-xl"></div>
    </section>
  );
};

const PrizeCard = ({ position, prize, icon, color, borderColor, featured = false }: { 
  position: string; 
  prize: string; 
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  featured?: boolean;
}) => {
  return (
    <div className={`rounded-lg p-6 ${color} border ${borderColor} ${featured ? 'py-10 -mt-4 shadow-lg shadow-icpc-yellow/10' : ''}`}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-1">{position} Place</h3>
        <div className="text-3xl font-bold text-white mb-2">{prize}</div>
        <p className="text-gray-400 text-sm">+ Certificates & Swag</p>
      </div>
    </div>
  );
};

const SpecialAward = ({ title, description }: { title: string; description: string }) => {
  return (
    <li className="border border-gray-800 rounded-lg p-4 hover:border-icpc-yellow/30 transition-all">
      <h4 className="text-lg font-semibold text-icpc-yellow mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </li>
  );
};

export default Prizes;
