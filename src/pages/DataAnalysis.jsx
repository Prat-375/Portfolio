import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { dataAnalysisProjects } from "../data/projects";

export default function DataAnalysis() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="Data Analysis Projects"
          subtitle="Projects focused on data, machine learning, and business insights."
        />

        <div className="project-grid">
          {dataAnalysisProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}