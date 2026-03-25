import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { personalProjects } from "../data/projects";

export default function PersonalProjects() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="Personal Projects"
          subtitle="Independent and experimental projects that show initiative."
        />

        <div className="project-grid">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}