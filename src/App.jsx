import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { db } from "./data/db";

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
            NUESTROS TRABAJOS EN WORDPRESS
          </h1>
          <div className='flex flex-wrap justify-center mt-10 mx-5'>
            {data.map((project) => (
              <Projects key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
