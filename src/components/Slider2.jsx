import React from "react";

export const Slider2 = () => {
  return (
    <div className='banner'>
      <div className='slider' style={{ "--quantity": 4 }}>
        <div className='item' style={{ "--position": 1 }}>
          <a href='https://www.icfes.gov.co/' target='_blank'>
            <img src='icfes.png' alt='' />
          </a>
        </div>
        <div className='item' style={{ "--position": 2 }}>
          <a href='https://hornojoaquin.es/' target='_blank'>
            <img src='horno.png' alt='' />
          </a>
        </div>
        <div className='item' style={{ "--position": 3 }}>
          <a href='https://bonsaicrea.com/en/inicio-english/' target='_blank'>
            <img src='bonsai.png' alt='' />
          </a>
        </div>
        <div className='item' style={{ "--position": 4 }}>
          <a href='https://lecar.com.co/' target='_blank'>
            <img src='lecar.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};
