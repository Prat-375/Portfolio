import { Link } from "react-router-dom";

export default function ProjectCard({ project, detailsBasePath = "/projects" }) {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--px", `${x}px`);
    card.style.setProperty("--py", `${y}px`);
  };

  return (
    <div className="project-card" onMouseMove={handleMove}>
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <span className="project-reflection"></span>

      <div className="project-overlay">
        <h3>{project.title}</h3>

        <div className="project-buttons">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="card-btn"
            >
              GitHub
            </a>
          )}

          <Link
            to={`${detailsBasePath}/${project.slug}`}
            className="card-btn secondary"
            state={{ from: project.category }}
          >
            Details
          </Link>

          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="card-btn"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}