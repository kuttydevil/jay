import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Philosophy />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;