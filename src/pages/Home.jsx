import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <main className="page">
      <Hero />

      <section className="content-section">
        <SectionTitle
          title="Portfolio Sections"
          subtitle="Browse my work across analytics, software development, and personal projects."
        />

        <div className="home-grid">
          <div className="info-box">
            <h3>Data Analysis</h3>
            <p>Projects involving dashboards, machine learning, and insights.</p>
          </div>

          <div className="info-box">
            <h3>Software Development</h3>
            <p>Frontend and full-stack projects with practical implementation.</p>
          </div>

          <div className="info-box">
            <h3>Personal Projects</h3>
            <p>Independent work that shows curiosity and initiative.</p>
          </div>
        </div>
      </section>
    </main>
  );
}