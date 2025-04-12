
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-icpc-black">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
