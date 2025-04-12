
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Prizes from '@/components/Prizes';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-icpc-black overflow-x-hidden">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        {/* <About /> */}
        <Schedule />
        <Prizes />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
