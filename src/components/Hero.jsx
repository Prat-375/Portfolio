import { Link } from "react-router-dom";
import { BarChart3, Cog, MapPin } from "lucide-react";

const metaItems = [
  {
    icon: BarChart3,
    label: "Focus",
    value: "Data Analysis • Software Development",
  },
  {
    icon: Cog,
    label: "Approach",
    value: "Learning by building and experimenting",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Magdeburg, Germany",
  },
];

export default function Hero() {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">
          Exploring data, software, and ideas through practical projects
        </p>

        <h1>
          Hi, I’m <span>Prateek Kumar Nayak</span>
        </h1>

        <h2 className="hero-subtitle">
          I enjoy building across data analysis, machine learning, and web development.
        </h2>

        <p className="hero-description">
          This portfolio brings together projects that helped me learn,
          experiment, and understand computer science more deeply. Some are
          analytical, some are application-focused, and some began simply as
          ideas I wanted to explore by building.
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
          {metaItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="hero-meta-item"
                onMouseMove={handleMove}
              >
                <div className="meta-top">
                  <Icon className="meta-icon" />
                  <p className="meta-label">{item.label}</p>
                </div>

                <p className="meta-value">{item.value}</p>
                <span className="meta-light"></span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}