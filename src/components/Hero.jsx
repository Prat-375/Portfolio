import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">Open to Data Analyst and Software-Focused Opportunities</p>

         <h1>
          Hi, I’m <span>Prateek Kumar Nayak</span>
        </h1>

        <h2 className="hero-subtitle">
          I build practical projects in data analysis, machine learning, and web development.
        </h2>

        <p className="hero-description">
          This portfolio highlights my work across analytics, full-stack applications,
          and personal projects. My goal is to build useful, well-structured solutions
          and present them in a clear, professional way.
        </p>

        <div className="hero-buttons">
          <Link to="/data-analysis" className="btn">
            View Projects
          </Link>

          <Link to="/about" className="btn btn-outline">
            About Me
          </Link>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="meta-label">Focus</span>
            <span className="meta-value">Data Analysis • Software Development</span>
          </div>

          <div className="hero-meta-item">
            <span className="meta-label">Location</span>
            <span className="meta-value">Magdeburg, Germany</span>
          </div>
        </div>
      </div>
    </section>
  );
}