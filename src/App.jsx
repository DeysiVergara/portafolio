import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { db } from "./data/db";
import { Slider2 } from "./components/Slider2";

function App() {
  const [data] = useState(db);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section
          id='projects'
          className='bg-white container mx-auto mt-20 text-center'
        >
          <h1 className='text-center text-lg md:text-3xl font-bold'>
            MIS TRABAJOS EN WORDPRESS
          </h1>
          <Slider2></Slider2>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
