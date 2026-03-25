import { Link, useLocation, useParams } from "react-router-dom";
import { allProjects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const from = location.state?.from || "all";
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page">
        <section className="content-section">
          <div className="info-box">
            <h2>Project not found</h2>
            <p>This project does not exist or has not been added yet.</p>
            <div style={{ marginTop: "16px" }}>
              <Link
  to={
    from === "software"
      ? "/software-development"
      : from === "data"
      ? "/data-analysis"
      : from === "personal"
      ? "/personal-projects"
      : "/"
  }
  className="btn btn-outline"
>
  Back
</Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="content-section project-details">
        <div className="project-details-hero">
          <img
            src={project.image}
            alt={project.title}
            className="project-details-image"
          />

          <h1>{project.title}</h1>
          <p className="project-details-description">
            {project.longDescription || project.description}
          </p>

          <div className="tech-list">
            {project.tech?.map((item, index) => (
              <span key={index} className="tech-badge">
                {item}
              </span>
            ))}
          </div>

          <div className="project-detail-buttons">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Live Demo
            </a>

            <Link
              to={
                from === "software"
                  ? "/software-development"
                  : from === "data"
                  ? "/data-analysis"
                  : from === "personal"
                  ? "/personal-projects"
                  : "/"
              }
              className="btn btn-outline"
            >
              Back
            </Link>
          </div>
        </div>

        {project.highlights && (
          <div className="project-details-section">
            <h2>Highlights</h2>
            <ul className="project-highlights">
              {project.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}