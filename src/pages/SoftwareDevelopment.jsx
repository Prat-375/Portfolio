import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { softwareProjects } from "../data/projects";

export default function SoftwareDevelopment() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="Software Development Projects"
          subtitle="Projects focused on frontend and application development."
        />

        <div className="project-grid">
          {softwareProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailsBasePath="/projects"
            />
          ))}
        </div>
      </section>
    </main>
  );
}