import React, { useEffect, useRef, useState } from 'react';
import qual from '../assets/images/qual.png';

function Qualunque() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[350px] md:h-[450px] xl:h-[500px] bg-black overflow-hidden"
    >
      {/* Mobile Image (Full Width) */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={qual}
          alt="Sculpture"
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            inView ? 'translate-x-0 opacity-80' : 'translate-x-full opacity-0'
          }`}
        />
      </div>

      {/* Desktop Image (Right Side) */}
      <div className="absolute top-0 right-[-5%] w-[60%] h-full z-0 hidden md:block">
        <img
          src={qual}
          alt="Sculpture"
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            inView ? 'translate-x-0 opacity-80' : 'translate-x-full opacity-0'
          }`}
        />
      </div>

      {/* Text Content (Left Slide) */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center pl-6 pr-4 sm:pl-12 xl:w-[85%] transform transition-all duration-1000 ease-out ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        <h1 className="text-white tracking-wide font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          Qualunque tecnologia<br />
          sufficientemente avanzata<br />
          è indistinguibi
          <span className="bg-[#0045FF] px-1">dalla magia.</span>
        </h1>
        <p className="xl:translate-x-45 xl:-translate-y-30 lg:translate-x-2 lg:-translate-y-20 text-white mt-3 text-sm md:text-base lg:text-right xl:text-right">
          Arthur C. <br className="hidden sm:block" />
          Clarke
        </p>
      </div>
    </section>
  );
}

export default Qualunque;
