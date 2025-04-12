
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "Who can participate?",
      answer: "The competition is open to all university students. Teams must consist of three members from the same institution."
    },
    {
      question: "How do I register my team?",
      answer: "Registration can be done through the 'Register Now' button on the homepage. You'll need to provide details for all team members and select a team name."
    },
    {
      question: "What programming languages are supported?",
      answer: "The competition supports C, C++, Java, and Python. Teams can choose which language to use for each problem."
    },
    {
      question: "What is the format of the competition?",
      answer: "Teams will have 5 hours to solve 8-12 algorithmic problems. Solutions are submitted through an online judge system that provides immediate feedback."
    },
    {
      question: "What should we bring on competition day?",
      answer: "Each team member should bring a valid ID. Laptops will be provided, but you may bring your own keyboard if preferred."
    },
    {
      question: "How are teams ranked?",
      answer: "Teams are ranked based on the number of problems solved. Ties are broken by the total time taken to solve the problems, including penalty time for incorrect submissions."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl pl-8 relative vertical-accent mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            FREQUENTLY <span className="text-icpc-yellow">ASKED</span> QUESTIONS
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-800 rounded-lg bg-black/20 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-black/30 hover:no-underline">
                  <span className="text-left font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Add some decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-icpc-yellow/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-icpc-blue/5 rounded-full blur-xl"></div>
    </section>
  );
};

export default Faq;
