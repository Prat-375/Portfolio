import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="About Me"
          subtitle="A short introduction for recruiters and visitors."
        />

        <div className="info-box">
          <p>
            I come from a background that combines data analysis, machine
            learning, software development, and automation. I enjoy building
            practical projects that solve real problems and present information
            in a clear and meaningful way.
          </p>
          <p>
            My current focus is to strengthen my profile in data analysis and
            software-related roles while showcasing projects in a professional
            portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}