import React from "react";
import Layout from "./Layouts/Layout";
import Service from "./Layouts/Service";
import About from "../pages/Layouts/About";
import Footer from "./Layouts/Footer";
export default function Home() {
  return (
    <>
      <Layout />
      <Service />
      <About />
      <Footer/>
    </>
  );
}
