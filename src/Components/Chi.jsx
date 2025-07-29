import React, { useRef, useEffect, useState } from 'react';
import linesl from '../assets/images/linesl.png';

function Chi() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section ref={sectionRef} className="overflow-hidden">
      <div className="w-[90%] m-auto mt-30 py-20">
        <div className="flex justify-between">
          <div
            className={`flex flex-col md:flex-row gap-3 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h1 className="text-white mt-2">
              <span className="text-[#0045FF]">(chi siamo) (chi siamo)</span>
              <br className="hidden sm:block" />(chi siamo)
            </h1>

            <div>
              <h1 className="text-2xl md:text-4xl text-white">
                no, non siamo giovani e dinamici,
                <br className="hidden sm:block" />
                anche se rischiamo come
                <br className="hidden sm:block" /> se avessimo 23 anni.
              </h1>
            </div>
          </div>

          <div
            className={`mt-5 sm:hidden lg:block transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <img src={linesl} alt="Lines" />
          </div>
        </div>

        <div
          className={`text-white/90 font-extralight text-2xl flex flex-col gap-3 md:ml-43 mt-7 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
        >
          <h1>
            usiamo tecniche creative di gruppo
            <br className="hidden sm:block" /> per sviluppare idee efficaci.
          </h1>

          <h1>
            significa che la capacità del team di
            <br className="hidden sm:block" /> elaborare un procedimento tra il problema
            <br className="hidden sm:block" /> e la soluzione è moltiplicata per tutti gli
            <br className="hidden sm:block" /> elementi del gruppo che partecipano con le
            <br className="hidden sm:block" /> loro competenze e conoscenze: una sorta
            <br className="hidden sm:block" /> di cervello collettivo che
            <span className="bg-[#0045FF]"> amplifica le idee </span>per
            <br className="hidden sm:block" /> rendere più fertile il processo creativo.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Chi;
