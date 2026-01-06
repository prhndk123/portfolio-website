import AboutMe from "@/components/AboutMe";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
          <div className="sticky top-0 absolute z-10"><Navbar /></div>
          <section id="Hero" className=""><Hero /></section>
          <section id="AboutMe" className=""><AboutMe /></section>
          <section id="Skills" className=""><Skills /></section>
          <section id="Portfolio" className="relative z-0"><Portfolio /></section>
          <section id="Contact" className=""><Contact /></section>
        </div>
  );
}
