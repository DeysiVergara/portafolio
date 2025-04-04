import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-green-100'>
      <nav>
        <ul className="flex justify-end space-x-8">
          <li>
            <a href="#about" className="text-white text-lg hover:text-orange-500">About</a>
          </li>
          <li>
            <a href="#projects" className="text-white text-lg hover:text-orange-500">Projects</a>
          </li>
          <li>
            <a href="#contact" className="text-white text-lg hover:text-orange-500">Contact</a>
          </li>
        </ul>
        </nav>
      </header>
      <main className='bg-blue-100'>
        {/* Sección About */}
        <section id="about" className="py-20 text-center bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>Contenido sobre mí...</p>
        </section>

        {/* Sección Projects */}
        <section id="projects" className="py-20 text-center bg-white">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>Contenido de mis proyectos...</p>
        </section>

        {/* Sección Contact */}
        <section id="contact" className="py-20 text-center bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Contenido para contactarme...</p>
        </section>
      </main>
      <footer className='bg-green-100'>
        <h1 class="text-3xl font-bold underline">
          footer!
        </h1>
      </footer>
    </>
  )
}

export default App
