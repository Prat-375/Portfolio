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
        <div className="data-details-header">
          <h1>{project.title}</h1>

          <div className="data-details-actions">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <Link to="/data-analysis" className="btn btn-outline">
              Back
            </Link>
          </div>
        </div>

        <div className="data-details-sections">
          {project.sections.map((section, index) => (
            <div key={index} className="data-detail-block">
              {section.type === "text" && (
                <div className="data-detail-text-card">
                  {section.title && <h2>{section.title}</h2>}
                  <p>{section.content}</p>
                </div>
              )}

              {section.type === "image" && (
                <div className="data-detail-image-card">
                  <img src={section.image} alt={section.alt || project.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}