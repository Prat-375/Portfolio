import SectionTitle from "../components/SectionTitle";

const journey = [
  {
    id: 1,
    year: "2005 – 2012",
    title: "Early Programming Foundations",
    text: "Gained my first exposure to programming through Core Java, where I developed a strong interest in software development. Built a solid foundation in object-oriented programming, while strengthening logical reasoning and analytical thinking. Recognized as a top performer in programming during this period.",
    tags: ["Core Java", "OOP", "Logical Thinking", "Problem Solving"],
    pointClass: "point-1",
    cardClass: "card-1",
  },
  {
    id: 2,
  year: "2012 – 2016",
  title: "Programming & Systems Foundations",
  text: "Built a strong programming foundation using C, C++, and Data Structures, strengthening algorithmic thinking and problem-solving skills. Gained additional exposure to Java and graphical programming with LabVIEW. Participated in a robotics workshop involving MATLAB, and developed a color-based pencil sorting conveyor system using LabVIEW.",
  tags: ["C", "C++", "Data Structures", "Java", "LabVIEW", "MATLAB"],
  pointClass: "point-2",
  cardClass: "card-2",
  },
  {
    id: 3,
    year: "2016 – 2019",
    title: "Industry Experience – Mainframe Development",
    text: "Worked as a Mainframe Developer at Capgemini on enterprise applications using COBOL, JCL, and IBM DB2. Developed and maintained batch processing systems, performed debugging and testing, and gained hands-on experience working with large-scale production environments.",
    tags: ["COBOL", "JCL", "IBM DB2", "Mainframe", "Batch Processing"],
    pointClass: "point-3",
    cardClass: "card-3",
  },
  {
    id: 4,
    year: "2019 – 2023",
    title: "Data Analysis & Machine Learning",
    text: "For my master’s thesis, I analyzed lion vocalizations by extracting audio features and applying machine learning models to classify different sound patterns.",
    tags: ["Python", "R", "Machine Learning", "SQL", "ETL", "Data Visualization"],
    pointClass: "point-4",
    cardClass: "card-4",
  },
  {
    id: 5,
    year: "2023 – 2024",
    title: "DevOps Automation Engineer",
    text: "Worked in the DevOps domain at Lennlay, focusing on automation, system configuration, and deployment workflows. Built and managed CI/CD pipelines using Ansible Automation Platform and worked with containerized environments using Docker.  Achieved certifications as a Docker Specialist and Red Hat Certified Engineer (RHCE).",
    tags: ["Ansible", "Docker", "DevOps", "Linux", "RHCE"],
    pointClass: "point-5",
    cardClass: "card-5",
  },
  {
    id: 6,
    year: "2024 – Present",
    title: "Current Focus – Data & Systems",
    text: "Currently focused on data analysis and building practical, end-to-end projects that solve real-world problems. Combining my background in software development and DevOps with analytical thinking to create structured and scalable solutions. Continuously improving my skills in data processing, visualization, and applied analytics.",
    tags: ["Data Analysis", "Python", "SQL", "Projects", "Systems Thinking"],
    pointClass: "point-6",
    cardClass: "card-6",
},
];

export default function About() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="My Journey in Computer Science"
          subtitle="A visual roadmap of how my learning evolved over time through curiosity, study, projects, and experimentation."
        />

        <div className="journey-roadmap">
          <svg
            className="journey-road-svg"
            viewBox="0 0 1200 1220"
            preserveAspectRatio="none"
          >
          <path
            d="
              M 70 120
              C 210 120, 230 300, 400 300
              C 620 300, 650 110, 900 110
              C 1080 110, 1080 360, 850 450
              C 620 540, 520 620, 540 820
              C 560 1010, 860 1060, 1140 1060
            "
            className="journey-road-shadow road-animate-shadow"
          />

          <path
            d="
              M 70 120
              C 210 120, 230 300, 400 300
              C 620 300, 650 110, 900 110
              C 1080 110, 1080 360, 850 450
              C 620 540, 520 620, 540 820
              C 560 1010, 860 1060, 1140 1060
            "
            className="journey-road road-animate-main"
          />

          <path
            d="
              M 70 120
              C 210 120, 230 300, 400 300
              C 620 300, 650 110, 900 110
              C 1080 110, 1080 360, 850 450
              C 620 540, 520 620, 540 820
              C 560 1010, 860 1060, 1140 1060
            "
            className="journey-road-line road-animate-line"
          />

          </svg>
          <div className="journey-connector connector-1"></div>
          <div className="journey-connector connector-2"></div>
          <div className="journey-connector connector-3"></div>
          <div className="journey-connector connector-4"></div>
          <div className="journey-connector connector-5"></div>
          <div className="journey-connector connector-6"></div>

          {journey.map((item) => (
            <div key={item.id}>
              <div className={`journey-point ${item.pointClass}`}>
                <span>{item.id}</span>
              </div>

              <div className={`journey-card ${item.cardClass}`}>
                <p className="journey-year">{item.year}</p>
                <h3>{item.title}</h3>
                <p className="journey-text">{item.text}</p>

                <div className="journey-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="journey-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}