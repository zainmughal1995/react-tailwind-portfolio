import React from "react";
import Hero from "@/sections/Hero.jsx";
import Navbar from "@/layout/Navbar.jsx";
import About from "@/sections/About.jsx";
import Project from "@/sections/Project.jsx";
import Experience from "@/sections/Experience.jsx";
import Contact from "@/sections/Contact.jsx";
import Testimonial from "@/sections/Testimonial";
import Footer from "@/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
