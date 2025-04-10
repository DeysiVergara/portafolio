import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <main className='bg-blue-100'>
        <Hero />
        <section id='projects' className='py-20 text-center bg-white'>
          <h2 className='text-3xl font-bold mb-4'>
            Trabajos Realizados en Wordpress
          </h2>
          <Slider />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
