import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Schedule = () => {
  const scheduleItems = [
    {
      date: 'May 15, 2025',
      time: '09:00 AM',
      title: 'Registration Opens',
      description: 'Registration portal opens for teams to sign up for the competition.'
    },
    {
      date: 'May 25, 2025',
      time: '11:59 PM',
      title: 'Registration Closes',
      description: 'Last day to register your team for the competition.'
    },
    {
      date: 'May 30, 2025',
      time: '10:00 AM',
      title: 'Competition Day',
      description: 'Teams will gather to solve algorithmic problems in a five-hour contest.'
    },
    {
      date: 'May 30, 2025',
      time: '04:00 PM',
      title: 'Results & Awards',
      description: 'Winners will be announced and prizes distributed.'
    }
  ];

  return (
    <section id="schedule" className="py-20 relative bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pl-8 relative vertical-accent mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            EVENT <span className="text-icpc-red">SCHEDULE</span>
          </h2>
          <p className="text-gray-400 mb-10">Mark your calendars for these important dates</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-800"></div>
            
            {/* Schedule items */}
            <div className="space-y-12">
              {scheduleItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2 mb-4 md:mb-0">
                    <div className={`p-6 border border-gray-800 rounded-lg bg-black/20 backdrop-blur-sm hover:border-icpc-yellow/50 transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <div className="flex items-center text-icpc-yellow mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.date}</span>
                        <Clock size={16} className="ml-4 mr-2" />
                        <span>{item.time}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-icpc-black border-4 border-icpc-yellow rounded-full z-10"></div>
                  
                  <div className="flex-1 md:w-1/2"></div>
                </div>
              ))}
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

export default Schedule;
