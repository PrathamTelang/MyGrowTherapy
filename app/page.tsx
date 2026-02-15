import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";
import ProfessionalBackground from "./components/ProfessionalBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OfficeExperience from "./components/OfficeExperience";
import Specialties from "./components/Specialties";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specialties />
      <About />
      <OfficeExperience />
      <FAQ />
      <ProfessionalBackground />
      <Footer />
    </>
  );
}
