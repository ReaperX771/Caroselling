import React, { useEffect, useRef, useState } from 'react';
import linesl from '../assets/images/linesl.png';

function Humann() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    const sec = sectionRef.current;
    if (sec) observer.observe(sec);
    return () => sec && observer.unobserve(sec);
  }, []);

  return (
    <section id='web' ref={sectionRef} className="overflow-x-hidden">
      <div className='w-[90%] m-auto mt-30 py-20'>

        <div className='flex justify-between flex-col lg:flex-row gap-10'>
          <div
            className={`flex flex-col md:flex-row gap-3 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h1 className='text-white mt-2'>
              <span className='text-[#0045FF]'>(human) (human) </span>
              <br className='hidden sm:block' />(human)
            </h1>
            <div>
              <h1 className='text-2xl md:text-4xl text-white'>
                abbiamo bisogno di <span className='bg-[#0045FF]'>parole che
                  <br className='hidden sm:block' /> dicono cose.</span>
                e poi di cose che
                <br className='hidden sm:block' /> si trasformano in realtà.
              </h1>
            </div>
          </div>

          <div
            className={`mt-5 sm:hidden lg:block transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <img src={linesl} />
          </div>
        </div>

        <div
          className={`text-white/90 font-extralight text-2xl flex flex-col gap-3 md:ml-34 mt-7 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1>
            il designer non deve mai dimenticare che i
            <br className='hidden sm:block' /> modelli mentali delle persone cambiano:
            <br className='hidden sm:block' />restituire un contenuto alla portata di tutti
            <br className='hidden sm:block' /> vuol dire comprendere intimamente le
            <br className='hidden sm:block' /> motivazioni dei processi mentali dietro uno
            <br className='hidden sm:block' /> stato d’animo e le modalità di fruizione
            <br className='hidden sm:block' /> delle informazioni.
          </h1>
          <h1>ed è un processo costante.</h1>
        </div>

      </div>
    </section>
  );
}

export default Humann;
