import { LANGUAGES } from "./i18n";
import { useState, useEffect } from "react";
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

function App() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en"); // 默认英文

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} dict={LANGUAGES[lang]} />
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s" }}>
        <BallsBackground />
        <Hero dict={LANGUAGES[lang]} />
        <Projects dict={LANGUAGES[lang]} />
        <About dict={LANGUAGES[lang]} />
        <Contact dict={LANGUAGES[lang]} />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
