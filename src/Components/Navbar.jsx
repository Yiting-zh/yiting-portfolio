import { useState, useEffect } from "react";

function Navbar({ lang, setLang, dict }) {
  const [open, setOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showCvMenu, setShowCvMenu] = useState(false);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.cv-dropdown')) {
        setShowCvMenu(false);
      }
      if (!event.target.closest('.navbar-lang-switch')) {
        setShowLangMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="section-container navbar-container">
        <img
          src={`${import.meta.env.BASE_URL}Logo.svg`}
          alt="Logo"
          className="navbar-logo"
          id="navbar-logo"
        />
        <div className={`navbar-links${open ? " active" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>{dict.about}</a>
          <a href="#projects" onClick={() => setOpen(false)}>{dict.projectsLabel}</a>
          <a href="#photography" onClick={() => setOpen(false)}>{dict.photography}</a>
          <a href="#contact" onClick={() => setOpen(false)}>{dict.contact}</a>
          <div className="nav-link cv-dropdown">
            <a 
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                setShowCvMenu(prev => !prev);
              }}
              className="cv-button"
              aria-haspopup="true"
              aria-expanded={showCvMenu}
            >
              {dict.cv}
            </a>
            {showCvMenu && (
              <div className="cv-menu">
                <a 
                  href={`${import.meta.env.BASE_URL}YitingZhang_CV_EN.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-option"
                >
                  English CV
                </a>
                <a 
                  href={`${import.meta.env.BASE_URL}YitingZhang_CV_CN.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-option"
                >
                  中文简历
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
        {/* 地球图标语言切换 */}
        <div className="navbar-lang-switch" style={{ position: "relative", marginLeft: "16px" }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center"
            }}
            onClick={() => setShowLangMenu((v) => !v)}
            aria-label="Change language"
          >
            {/* 语言logo */}
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="languageIconTitle"
              stroke="#b7aed2"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
              color="#000000"
            >
              <title id="languageIconTitle">Language</title>
              <circle cx="12" cy="12" r="10"></circle>
              <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"></path>
              <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"></path>
            </svg>
          </button>
          {showLangMenu && (
            <div className="dropdown-menu">
              <button 
                className="dropdown-item"
                onClick={() => { setLang("en"); setShowLangMenu(false); }}
              >
                EN
              </button>
              <button 
                className="dropdown-item"
                onClick={() => { setLang("zh"); setShowLangMenu(false); }}
              >
                中文
              </button>
              <button 
                className="dropdown-item"
                onClick={() => { setLang("sv"); setShowLangMenu(false); }}
              >
                SV
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


