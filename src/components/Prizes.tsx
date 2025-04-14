import React from 'react';
import { Award, Gift } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Prizes = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={sectionRef} id="prizes" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            EVENT <span className="text-icpc-blue">PRIZES</span>
          </h2>
          <p className="text-gray-400 mb-10">Compete to win exciting prizes and recognition</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 100]),
              rotate: useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, -15]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
            }}
          >
            <PrizeCard 
              position="2nd"
              prize="₹50,000"
              icon={<Award className="text-[#C0C0C0]" size={40} />}
              color="bg-gradient-to-b from-[#C0C0C0]/20 to-black/40"
              borderColor="border-[#C0C0C0]/40"
            />
          </motion.div>
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 50]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]),
              zIndex: 10
            }}
          >
            <PrizeCard 
              position="1st"
              prize="₹100,000"
              icon={<Award className="text-[#FFD700]" size={50} />}
              color="bg-gradient-to-b from-[#FFD700]/20 to-black/40"
              borderColor="border-[#FFD700]/40"
              featured={true}
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -100]),
              rotate: useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, 15]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]),
            }}
          >
            <PrizeCard 
              position="3rd"
              prize="₹25,000"
              icon={<Award className="text-[#CD7F32]" size={40} />}
              color="bg-gradient-to-b from-[#CD7F32]/20 to-black/40"
              borderColor="border-[#CD7F32]/40"
            />
          </motion.div>
        </div>
        
        {/* Special Awards Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Special Awards</h3>
          <div className="grid grid-cols-1 gap-6 max-w-lg mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <Gift className="text-icpc-yellow" size={32} />
                <h3 className="text-xl font-bold">Best Fresher Team Award</h3>
              </div>
              <p className="text-gray-400">Special recognition and prizes for the highest-scoring team composed entirely of first-year students.</p>
              <div className="mt-4 text-lg font-semibold text-icpc-yellow">₹15,000</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-icpc-blue/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-icpc-red/5 rounded-full blur-xl"></div>
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
    <div className={`
      rounded-lg p-6 
      ${color} border ${borderColor} 
      ${featured ? 'py-10 -mt-4 shadow-lg shadow-icpc-yellow/10' : ''}
      relative
      group
      overflow-hidden
      hover:border-opacity-75
      transition-all
      duration-500
      before:absolute
      before:content-['']
      before:w-24
      before:h-[200%]
      before:bg-gradient-to-r
      before:from-transparent
      before:via-white/10
      before:to-transparent
      before:-left-32
      before:top-[-50%]
      before:rotate-45
      before:transition-all
      before:duration-500
      hover:before:translate-x-[400%]
      before:opacity-0
      hover:before:opacity-100
    `}>
      <div className="flex flex-col items-center text-center relative z-10">
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
