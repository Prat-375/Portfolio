import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-overlay">
        <h3>{project.title}</h3>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="card-btn"
          >
            GitHub
          </a>

          <Link
            to={`/projects/${project.slug}`}
            state={{ from: project.category }}
            className="card-btn secondary"
>
            Details
          </Link>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="card-btn"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}