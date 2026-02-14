import Hero from "./components/Hero";
import Specialities from "./components/Specialties";
import About from "./components/About";
import FAQ from "./components/FAQ";
import ProfessionalBackground from "./components/ProfessionalBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OfficeExperience from "./components/OfficeExperience";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specialities />
      <About />
      <OfficeExperience />
      <FAQ />
      <ProfessionalBackground />
      <Footer />
    </>
  );
}
