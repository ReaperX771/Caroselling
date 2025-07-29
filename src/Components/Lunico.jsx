import React, { useEffect, useRef, useState } from 'react';
import lunico from '../assets/images/lunico.png';

function Lunico() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => {
        setImageVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        setTextVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-[350px] md:h-[450px] xl:h-[500px] bg-black overflow-hidden">
      {/* Mobile Image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={lunico}
          alt="Sculpture"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Animated Image (left side on md and above) */}
      <div
        ref={imageRef}
        className={`absolute top-0 left-[-5%] w-[60%] h-full z-0 hidden md:block transition-all duration-1000 ease-in-out ${
          imageVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
      >
        <img
          src={lunico}
          alt="Sculpture"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Animated Text Content */}
      <div
        ref={textRef}
        className={`relative z-10 h-full flex flex-col justify-center pl-4 pr-6 sm:pr-12 xl:w-[85%] xl:ml-auto transition-all duration-1000 ease-in-out ${
          textVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        <h1 className="text-white tracking-wide font-light text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-left">
          L’unico modo per scoprire<br />
          i limiti del possibile è<br />
          <span className="bg-[#0045FF] px-1">avventurarsi un po’ oltre</span>,
          <br /> verso l’impossibile.
        </h1>
        <p className="text-white mt-3 text-sm md:text-base text-left">
          Arthur C. <br className="hidden sm:block" /> Clarke
        </p>
      </div>
    </section>
  );
}

export default Lunico;
