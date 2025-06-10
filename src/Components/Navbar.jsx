import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="section-container navbar-container">
        <img src={`${import.meta.env.BASE_URL}Logo.svg`} alt="Logo" className="navbar-logo" id="navbar-logo" />
        <div className={`navbar-links${open ? " active" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#">CV</a>
        </div>
        <div className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


