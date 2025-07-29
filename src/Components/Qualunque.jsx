import React from 'react';
import qual from '../assets/images/qual.png';

function Qualunque() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] xl:h-[500px] bg-black overflow-hidden">
      {/* Image for md and below (full width, text overlay) */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={qual}
          alt="Sculpture"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Image positioned on the right, slightly overlaying the text on lg and xl */}
      <div className="absolute top-0 right-[-5%] w-[60%] h-full z-0 hidden md:block">
        <img
          src={qual}
          alt="Sculpture"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-6 pr-4 sm:pl-12 xl:w-[85%]">
        <h1 className="text-white tracking-wide font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          Qualunque tecnologia<br/> 
          sufficientemente avanzata<br/>
          è indistinguibi
          <span className="bg-[#0045FF] px-1">dalla magia.</span>
        </h1>
        <p className="xl:translate-x-45 xl:-translate-y-30 lg:translate-x-2  lg:-translate-y-20 text-white mt-3 text-sm md:text-base lg:text-right xl:text-right">Arthur C. <br className='hidden sm:block'/>Clarke</p>
      </div>
    </section>
  );
}

export default Qualunque;