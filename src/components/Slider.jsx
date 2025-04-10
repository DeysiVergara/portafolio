import React, { useRef } from "react";

export const Slider = () => {
  const carouselRef = useRef(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.querySelector(".carousel-item").offsetWidth;
      carouselRef.current.scrollBy({
        left: -itemWidth - 16,
        behavior: "smooth",
      });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.querySelector(".carousel-item").offsetWidth;
      carouselRef.current.scrollBy({
        left: itemWidth + 16,
        behavior: "smooth",
      });
    }
  };

  const handleLink = (path) => {
    open(path, "_blank");
  };

  return (
    <div className='relative'>
      <div className='carousel rounded-box md:w-100 w-64' ref={carouselRef}>
        <div
          className='carousel-item w-full cursor-pointer'
          onClick={() => handleLink("https://matromol.com/")}
        >
          <img src='/matromol.png' className='w-full h-65' alt='Matromol' />
        </div>
        <div
          className='carousel-item w-full cursor-pointer'
          onClick={() => handleLink("https://hornojoaquin.es/")}
        >
          <img src='/horno.png' className='w-full h-65' alt='Horno Joaquín' />
        </div>
        <div
          className='carousel-item w-full cursor-pointer'
          onClick={() =>
            handleLink("https://bonsaicrea.com/en/inicio-english/")
          }
        >
          <img src='/bonsai.png' className='w-full h-65' alt='Bonsai' />
        </div>
        <div
          className='carousel-item w-full cursor-pointer'
          onClick={() => handleLink("https://lecar.com.co/")}
        >
          <img src='/lecar.png' className='w-full h-65' alt='Le car' />
        </div>
        <div
          className='carousel-item w-full cursor-pointer'
          onClick={() => handleLink("https://proyectok68.com/")}
        >
          <img
            src='/proyecto.png'
            className='w-full h-70'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='absolute justify-between transform -translate-y-1/2 left-50 right-50 top-1/2 hidden md:flex'>
          <button
            onClick={scrollPrev}
            className='btn btn-circle btn-lg bg-base-100 opacity-70 hover:opacity-100 text-3xl text-[#ebe22f]'
          >
            ❮
          </button>
          <button
            onClick={scrollNext}
            className='btn btn-circle btn-lg bg-base-100 opacity-70 hover:opacity-100 text-3xl text-[#ebe22f]'
          >
            ❯
          </button>
        </div>
      </div>
    </div>
    // <div className='relative'>
    //   <div
    //     ref={carouselRef}
    //     className='carousel carousel-center bg-neutral rounded-box max-w-sm md:max-w-lg space-x-3 p-4'
    //   >
    //     <div className='carousel-item w-full h-80 object-cover'>
    //       <a
    //         href='https://matromol.com/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //         className='rounded-box'
    //       >
    //         <img
    //           src='/matromol.png'
    //           alt='Matromol'
    //           className='h-full w-auto rounded-box'
    //         />
    //       </a>
    //     </div>
    //     <div className='carousel-item w-full h-80 object-cover'>
    // <a
    //   href='https://hornojoaquin.es/'
    //   target='_blank'
    //   rel='noopener noreferrer'
    //   className='rounded-box'
    // >
    //         <img
    //           src='/horno.png'
    //           alt='Horno Joaquin'
    //           className='h-full w-auto rounded-box'
    //         />
    //       </a>
    //     </div>
    //     <div className='carousel-item w-full h-80 object-cover'>
    //       <a
    //         href='https://bonsaicrea.com/en/inicio-english/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //         className='rounded-box'
    //       >
    //         <img
    //           src='/bonsai.png'
    //           alt='Bonsai Crea'
    //           className='h-full w-auto rounded-box'
    //         />
    //       </a>
    //     </div>
    //     <div className='carousel-item w-full h-80 object-cover'>
    //       <a
    //         href='https://lecar.com.co/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //         className='rounded-box'
    //       >
    //         <img
    //           src='/lecar.png'
    //           alt='Le Car'
    //           className='h-full w-auto rounded-box'
    //         />
    //       </a>
    //     </div>
    //     <div className='carousel-item w-full h-80 object-cover'>
    //       <a
    //         href='https://proyectok68.com/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //         className='rounded-box'
    //       >
    //         <img
    //           src='/proyecto.png'
    //           alt='Proyecto k68'
    //           className='h-full w-auto rounded-box'
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};
