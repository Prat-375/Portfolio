import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  const stats = [
    { value: "6+", label: "Projects explored" },
    { value: "3", label: "Different domains" },
    { value: "Ongoing", label: "Learning and building" },
  ];

  const sections = [
    {
      title: "Data Analysis",
      text: "Projects focused on understanding data, building models, and extracting insights from real-world problems.",
      link: "/data-analysis",
    },
    {
      title: "Software Development",
      text: "Applications built using React and full-stack tools, focusing on structure, usability, and clean implementation.",
      link: "/software-development",
    },
    {
      title: "Personal Projects",
      text: "Independent experiments and ideas built out of curiosity, where I explore new concepts and approaches.",
      link: "/personal-projects",
    },
  ];

  const handleFeatureMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty("--fx", `${x}px`);
  card.style.setProperty("--fy", `${y}px`);
};

  const handleSpotlightMove = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty("--sx", `${x}px`);
  card.style.setProperty("--sy", `${y}px`);
};

  return (
    <main className="page">
      <div className="home-glow home-glow-1"></div>
      <div className="home-glow home-glow-2"></div>

      <Hero />

      <section className="content-section">
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section featured-intro">
        <div className="featured-intro-box">
          <p className="featured-tag">Portfolio Overview</p>
          <h2>Explore the work that keeps me learning and building</h2>
          <p>
            This portfolio is organized as a collection of my work across different
            areas — from structured data projects to hands-on software builds.
            It reflects both what I’ve learned and what I enjoy building.
          </p>

          <div className="featured-actions">
            <Link to="/software-development" className="btn">
              Explore Projects
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          title="Project Categories"
          subtitle="A structured view of the areas I keep exploring through practical work."
        />

        <div className="feature-grid">
          {sections.map((section) => (
            <div
              key={section.title}
              className="feature-card"
              onMouseMove={handleFeatureMove}
            >
              <div className="feature-card-top">
                <span className="feature-dot"></span>
                <span className="feature-mini-label">Featured Section</span>
              </div>

              <h3>{section.title}</h3>
              <p>{section.text}</p>

              <Link to={section.link} className="feature-link">
                View Section →
              </Link>

              <span className="feature-light"></span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section spotlight-section">
        <div className="spotlight-card">
          <div className="spotlight-text">
            <p className="featured-tag">Why this portfolio?</p>
            <h2>A space to build, explore, and understand</h2>
            <p>
              This portfolio reflects my interest in computer science through practical work.
              I enjoy exploring how systems behave, how data can be interpreted, and how ideas
              can be translated into working applications. Each project here represents a step
              in understanding concepts more deeply by building and experimenting with them.
            </p>
          </div>

          <div className="spotlight-panel">
            <div className="spotlight-mini-card" onMouseMove={handleSpotlightMove}>
              <p className="spotlight-mini-label">Focus</p>
              <p className="spotlight-mini-value">Data + Software Development</p>
              <span className="spotlight-mini-light"></span>
            </div>

            <div className="spotlight-mini-card" onMouseMove={handleSpotlightMove}>
              <p className="spotlight-mini-label">Approach</p>
              <p className="spotlight-mini-value">Learning by Building</p>
              <span className="spotlight-mini-light"></span>
            </div>

            <div className="spotlight-mini-card" onMouseMove={handleSpotlightMove}>
              <p className="spotlight-mini-label">Interest</p>
              <p className="spotlight-mini-value">Understanding Systems in Depth</p>
              <span className="spotlight-mini-light"></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}