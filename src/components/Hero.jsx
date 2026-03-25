import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-tag">Open to Data and Software Opportunities</p>
        <h1>
          Hi, I’m <span>Prateek Kumar Nayak</span>
        </h1>
        <p>
          I build projects in data analysis, software development, and practical
          automation. This portfolio highlights the work I can proudly share on
          my resume.
        </p>

        <div className="hero-buttons">
          <Link to="/data-analysis" className="btn">
            View Projects
          </Link>
          <a
            className="btn btn-outline"
            href="https://github.com/Prat-375"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}