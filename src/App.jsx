import BallsBackground from './Components/BallsBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';
import './index.css';

function App() {
  return (
    <>
      <BallsBackground />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <BackToTop />
    </>
  );
}
export default App;
