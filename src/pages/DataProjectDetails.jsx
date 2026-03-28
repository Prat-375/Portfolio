import { Link, useParams } from "react-router-dom";
import { dataAnalysisProjects } from "../data/projects";

export default function DataProjectDetails() {
  const { slug } = useParams();

  const project = dataAnalysisProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page">
        <section className="content-section">
          <div className="info-box">
            <h2>Project not found</h2>
            <p>This data analysis project could not be found.</p>
            <div style={{ marginTop: "16px" }}>
              <Link to="/data-analysis" className="btn">
                Back to Data Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="content-section data-details-page">
        <div className="data-details-header glass-card">
          <div className="data-details-header-content">
            <span className="project-eyebrow">Data Analysis Project</span>
            <h1>{project.title}</h1>

            {project.subtitle && (
              <p className="data-details-subtitle">{project.subtitle}</p>
            )}

            {project.tags?.length > 0 && (
              <div className="data-details-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="data-details-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
              )}

              <Link to="/data-analysis" className="btn btn-outline">
                Back
              </Link>
            </div>
          </div>

          {project.image && (
            <div className="data-details-hero-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
        </div>

        {project.metrics?.length > 0 && (
          <div className="data-details-metrics">
            {project.metrics.map((metric, index) => (
              <div key={index} className="data-metric-card glass-card">
                <span className="data-metric-label">{metric.label}</span>
                <h3>{metric.value}</h3>
              </div>
            ))}
          </div>
        )}

        <div className="data-details-sections">
          {project.sections?.map((section, index) => {
            if (section.type === "text") {
              return (
                <div key={index} className="data-detail-block">
                  <div className="data-detail-text-card glass-card">
                    {section.title && <h2>{section.title}</h2>}
                    <p>{section.content}</p>
                  </div>
                </div>
              );
            }

            if (section.type === "image") {
              return (
                <div key={index} className="data-detail-block">
                  <div className="data-detail-image-card glass-card">
                    <img
                      src={section.image}
                      alt={section.alt || project.title}
                    />
                  </div>
                </div>
              );
            }

            if (section.type === "list") {
              return (
                <div key={index} className="data-detail-block">
                  <div className="data-detail-text-card glass-card">
                    {section.title && <h2>{section.title}</h2>}
                    <ul className="data-detail-list">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            if (section.type === "cards") {
              return (
                <div key={index} className="data-detail-block">
                  <div className="data-detail-cards-section">
                    {section.title && (
                      <h2 className="data-section-title">{section.title}</h2>
                    )}

                    <div className="data-detail-cards-grid">
                      {section.items?.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="data-detail-mini-card glass-card"
                        >
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </section>
    </main>
  );
}