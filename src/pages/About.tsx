import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="page-content">
        <h1>À propos</h1>
        <p>Cette page présente le projet Website v3.2.</p>
      </main>
      <Footer />
    </>
  );
}
