import BallsBackground from './Components/BallsBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s" }}>
        <BallsBackground />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
