import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <main className="page">
      <section className="content-section">
        <SectionTitle
          title="Contact"
          subtitle="Let’s connect for opportunities or collaboration."
        />

        <div className="info-box">
          <p>Email: <a href="mailto:prateek.nayak50@gmail.com">prateek.nayak50@gmail.com</a></p>
          <p>Location: Magdeburg, Germany</p>
          <p>Phone: <a href="tel:+4917674116472">+49 17674116472</a></p>
          <p>GitHub: <a href="https://github.com/Prat-375" target="_blank" rel="noopener noreferrer">github.com/Prat-375</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/prateek-kumar-nayak-666a2886" target="_blank" rel="noopener noreferrer">linkedin.com/in/prateek-kumar-nayak-666a2886</a></p>
        </div>
      </section>
    </main>
  );
}