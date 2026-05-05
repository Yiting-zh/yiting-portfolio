import { LANGUAGES } from "./i18n";
import { useState, useEffect, Suspense, lazy } from "react";
import BallsBackground from './Components/BallsBackground';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Loader from './Loader';

// 懒加载非首屏组件
const About = lazy(() => import('./Components/About'));
const Projects = lazy(() => import('./Components/Projects'));
const Photography = lazy(() => import('./Components/Photography'));
const Contact = lazy(() => import('./Components/Contact'));
const BackToTop = lazy(() => import('./Components/BackToTop'));

// 预加载 AOS
const loadAOS = () => import('aos').then((AOS) => {
  import('aos/dist/aos.css');
  AOS.default.init({ once: true, duration: 800 });
});

function App() {
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en"); // 默认英文

  useEffect(() => {
    if (!loading) {
      // 页面加载完成后再加载 AOS
      loadAOS();
    }
  }, [loading]);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} dict={LANGUAGES[lang]} />
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s" }}>
        <BallsBackground />
        <Hero dict={LANGUAGES[lang]} />
        <Suspense fallback={<div style={{ height: '100vh' }} />}>
          <Projects dict={LANGUAGES[lang]} />
          <About dict={LANGUAGES[lang]} />
          <Contact dict={LANGUAGES[lang]} />
          <Photography dict={LANGUAGES[lang]} />
          <BackToTop />
        </Suspense>
        <footer className="footer">
          <p>
            Created with <span role="img" aria-label="white heart">🤍</span> by Yiting Zhang © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
