import React, { useRef } from "react";

export const Slider = () => {
  const carouselRef = useRef(null);

  const scrollPrev = () => {
    if (carouselRef.current) {
      // Obtener el ancho de un elemento carrusel para saber cuánto desplazar
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
      // Obtener el ancho de un elemento carrusel para saber cuánto desplazar
      const itemWidth =
        carouselRef.current.querySelector(".carousel-item").offsetWidth;
      carouselRef.current.scrollBy({
        left: itemWidth + 16,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='relative'>
      <div
        ref={carouselRef}
        className='carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4'
      >
        <div className='carousel-item'>
          <img
            src='../../public/matromol.png'
            alt='Matromol'
            className='rounded-box max-w-md'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='../../public/horno.png'
            alt='Horno Joaquin'
            className='rounded-box max-w-md'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='../../public/bonsai.png'
            alt='Bonsai Crea'
            className='rounded-box max-w-md'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='../../public/lecar.png'
            alt='Le Car'
            className='rounded-box max-w-md'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='../../public/proyecto.png'
            alt='Proyecto k68'
            className='rounded-box max-w-md'
          />
        </div>
      </div>

      {/* Controladores de carrusel */}
      <div className='absolute flex justify-between transform -translate-y-1/2 left-50 right-50 top-1/2'>
        <button
          onClick={scrollPrev}
          className='btn btn-circle btn-lg bg-base-100 opacity-70 hover:opacity-100 text-3xl'
        >
          ❮
        </button>
        <button
          onClick={scrollNext}
          className='btn btn-circle btn-lg bg-base-100 opacity-70 hover:opacity-100 text-3xl'
        >
          ❯
        </button>
      </div>
    </div>
  );
};
