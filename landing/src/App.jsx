import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Classification from './components/Classification';
import Trust from './components/Trust';
import OpenSource from './components/OpenSource';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-primary-text font-sans">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <hr className="border-t border-border-color" />
        <div id="problem-solution">
          <ProblemSolution />
        </div>
        <hr className="border-t border-border-color" />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <hr className="border-t border-border-color" />
        <div id="classification">
          <Classification />
        </div>
        <hr className="border-t border-border-color" />
        <div id="trust">
          <Trust />
        </div>
        <hr className="border-t border-border-color" />
        <div id="open-source">
          <OpenSource />
        </div>
        <hr className="border-t border-border-color" />
        <div id="cta">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;