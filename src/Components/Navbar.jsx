const Navbar = () => (
  <nav className="navbar">
    <div className="section-container navbar-container">
      <img src={`${import.meta.env.BASE_URL}Logo.svg`} alt="Logo" className="navbar-logo" id="navbar-logo" />
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


