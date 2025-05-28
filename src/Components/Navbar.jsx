const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <img src="/public/Logo.svg" alt="Logo" className="navbar-logo" style={{ height: "40px" }} />
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#">CV</a>
      </div>
    </div>
  </nav>
);

export default Navbar;


