import Image from "next/image";
import Hero from "./components/Hero";
import Specialities from "./components/Specialties";
import About from "./components/About";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialities />
      <About />
      <FAQ />
    </>
  );
}
