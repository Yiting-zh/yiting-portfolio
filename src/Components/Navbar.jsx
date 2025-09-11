import { useState } from "react";

function Navbar({ lang, setLang, dict }) {
  const [open, setOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

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
          <a href="#contact" onClick={() => setOpen(false)}>{dict.contact}</a>
          <a 
            href={`${import.meta.env.BASE_URL}YitingZhang_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.cv}
          </a>
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
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                zIndex: 10,
                minWidth: "80px"
              }}
            >
              <button style={{ width: "100%", padding: "8px", border: "none", background: "none", cursor: "pointer" }} onClick={() => { setLang("en"); setShowLangMenu(false); }}>EN</button>
              <button style={{ width: "100%", padding: "8px", border: "none", background: "none", cursor: "pointer" }} onClick={() => { setLang("zh"); setShowLangMenu(false); }}>中文</button>
              <button style={{ width: "100%", padding: "8px", border: "none", background: "none", cursor: "pointer" }} onClick={() => { setLang("sv"); setShowLangMenu(false); }}>SV</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


