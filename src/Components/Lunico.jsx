import React from 'react';
import lunico from '../assets/images/lunico.png';

function Lunico() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] xl:h-[500px] bg-black overflow-hidden">
      {/* Image for md and below (full width, text overlay) */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={lunico}
          alt="Sculpture"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Image positioned on the left, slightly overlaying the text on lg and xl */}
      <div className="absolute top-0 left-[-5%] w-[60%] h-full z-0 hidden md:block">
        <img
          src={lunico}
          alt="Sculpture"
          className="w-4xl h-100 object-cover opacity-80" // Corrected w-4xl to w-full
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-4 pr-6 sm:pr-12 xl:w-[85%] xl:ml-auto">
        <h1 className="text-white tracking-wide font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl xl:translate-x-40 lg:translate-x-90  text-left">
          L’unico modo per scoprire<br/> 
          i limiti del possibile è<br />
          <span className="bg-[#0045FF] px-1">avventurarsiun po’ oltre</span>
          ,
          <br /> verso l’impossibile.
        </h1>
        <p className="xl:-translate-x-45 xl:-translate-y-55 lg:translate-x-2 lg:-translate-y-40 text-white mt-3 text-sm md:text-base lg:text-left xl:text-left">
          Arthur C. <br className="hidden sm:block" /> Clarke
        </p>
      </div>
    </section>
  );
}

export default Lunico;