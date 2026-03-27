import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { personalProjects } from "../data/projects";

export default function PersonalProjects() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="Personal Projects"
          subtitle="Independent experiments and projects built out of curiosity and practical exploration."
        />

        <div className="project-grid">
          {personalProjects.map((project) => (
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