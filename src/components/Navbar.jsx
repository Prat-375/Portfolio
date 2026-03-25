import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Prateek Portfolio</h2>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/data-analysis">Data Analysis</NavLink>
          <NavLink to="/software-development">Software Development</NavLink>
          <NavLink to="/personal-projects">Personal Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}