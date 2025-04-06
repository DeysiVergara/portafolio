export const Header = () => {
  return (
    // <header className='bg-green-100 flex items-center justify-end p-4'>
    //     <nav>
    //         <ul className="flex flex-row gap-4">
    //             <li>
    //             <a href="#about" className="text-white text-lg hover:text-orange-500">About</a>
    //             </li>
    //             <li>
    //             <a href="#projects" className="text-white text-lg hover:text-orange-500">Projects</a>
    //             </li>
    //             <li>
    //             <a href="#contact" className="text-white text-lg hover:text-orange-500">Contact</a>
    //             </li>
    //         </ul>
    //     </nav>
    // </header>
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Nombre del equipo</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>Trabajos</summary>
              <ul className='bg-base-100 rounded-t-none p-2'>
                <li>
                  <a href='https://matromol.com/' target='_blank'>
                    Matromol
                  </a>
                </li>
                <li>
                  <a
                    href='https://bonsaicrea.com/en/inicio-english/'
                    target='_blank'
                  >
                    BonsaiCrea
                  </a>
                </li>
                <li>
                  <a href='https://lecar.com.co/' target='_blank'>
                    Lecar
                  </a>
                </li>
                <li>
                  <a href='https://hornojoaquin.es/' target='_blank'>
                    Horno Joaquin
                  </a>
                </li>
                <li>
                  <a href='https://proyectok68.com/' target='_blank'>
                    Proyecto 68
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Contáctanos</summary>
              <ul className='bg-base-100 rounded-t-none p-2'>
                <li>
                  <a href='Instagram' target='_blank'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='Whatsapp' target='_blank'>
                    Whatsapp
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
