export const Header = () => {
  return (
    <div className='navbar shadow-sm bg-neutral text-[#ebe22f]'>
      <div className='flex-1 px-4'>
        {/* <img className='w-35' src='/logofooter.png' /> */}
        <h1>Deysi Meliza Vergara Dávila</h1>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <details>
              <summary>
                <a href='#projects'>Trabajos</a>
              </summary>
              <ul className='bg-neutral rounded-t-none p-2'>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='https://www.icfes.gov.co/' target='_blank'>
                    Instituto Colombiano para la evaluación de la educación
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a
                    href='https://bonsaicrea.com/en/inicio-english/'
                    target='_blank'
                  >
                    BonsaiCrea
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='https://lecar.com.co/' target='_blank'>
                    Le Car
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='https://hornojoaquin.es/' target='_blank'>
                    Horno Joaquin
                  </a>
                </li>
              </ul>
            </details>
          </li>
          {/* <li>
            <details>
              <summary>
                <a href='#equipo'>Equipo</a>
              </summary>
              <ul className='bg-neutral rounded-t-none p-2'>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a
                    href='https://www.linkedin.com/in/andreina-medina-yaquer/'
                    target='_blank'
                  >
                    Andreína Medina Yáquer
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a
                    href='https://www.linkedin.com/in/deysivergara/'
                    target='_blank'
                  >
                    Deysi Meliza Vergara Dávila
                  </a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <details>
              <summary>
                <a href='#footer'>Contáctanos</a>
              </summary>
              <ul className='bg-neutral rounded-t-none p-2'>
                {/* <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='Instagram' target='_blank'>
                    Instagram
                  </a>
                </li> */}
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='https://wa.me/+51983469574' target='_blank'>
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
