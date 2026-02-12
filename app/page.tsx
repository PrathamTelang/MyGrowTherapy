import Image from "next/image";
import Hero from "./components/Hero";
import Specialities from "./components/Specialties";
import About from "./components/About";
import FAQ from "./components/FAQ";
import ProfessionalBackground from "./components/ProfessionalBackground";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialities />
      <About />
      <FAQ />
      <ProfessionalBackground />
      <Footer />
    </>
  );
}
