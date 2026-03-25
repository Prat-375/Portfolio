export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-list">
        {project.tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </div>
  );
}