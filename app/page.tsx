import Image from "next/image";
import Hero from "./components/Hero";
import Specialities from "./components/Specialties";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialities />
      <About />
    </>
  );
}
