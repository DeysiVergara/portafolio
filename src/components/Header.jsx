export const Header = () => {
  return (
    <div className='navbar shadow-sm bg-neutral text-neutral-content'>
      <div className='flex-1 px-4'>
        <img className='w-35' src='/logofooter.png' />
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
                  <a href='https://matromol.com/' target='_blank'>
                    Matromol
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
                    Lecar
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='https://hornojoaquin.es/' target='_blank'>
                    Horno Joaquin
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='https://proyectok68.com/' target='_blank'>
                    Proyecto 68
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                <a href='#footer'>Contáctanos</a>
              </summary>
              <ul className='bg-neutral rounded-t-none p-2'>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
                  <a href='Instagram' target='_blank'>
                    Instagram
                  </a>
                </li>
                <li className='hover:bg-base-300 hover:text-black rounded-md transition-colors duration-200'>
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
