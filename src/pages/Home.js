import React from "react";
import Service from "./Layouts/Service";
import About from "../pages/Layouts/About";
import Footer from "./Layouts/Footer";
import Hero from "./Layouts/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <About />
      <Footer/>
    </>
  );
}
