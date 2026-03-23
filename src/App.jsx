import React from 'react';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Cta from './components/Cta';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bgMain font-inter text-textDark selection:bg-brandGreen selection:text-white">
      <TopNavBar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Cta />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
