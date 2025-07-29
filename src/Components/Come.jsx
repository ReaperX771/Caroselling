import React, { useEffect, useRef, useState } from 'react';
import linesl from '../assets/images/linesl.png';

function Come() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className='w-[87%] m-auto flex flex-col gap-17 py-27 md:mt-20'>
        {/* Top Row */}
        <div
          className={`flex justify-between transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className='flex flex-col md:flex-row gap-3'>
            <h1 className='text-white mt-2'>
              <span className='text-[#0045FF]'>(come) (come) </span>
              <br className='hidden sm:block' />
              (come)
            </h1>

            <div>
              <h1 className='text-2xl md:text-4xl text-white'>
                progettiamo per il futuro.
              </h1>
            </div>
          </div>

          <div className='mt-5 sm:hidden lg:block'>
            <img src={linesl} alt="lines" />
          </div>
        </div>

        {/* Subheading */}
        <div
          className={`text-white/90 font-extralight text-2xl flex flex-col gap-3 md:ml-42 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-50'
          }`}
        >
          <h1>
            Nei momenti caotici il linguaggio e la
            <br className='hidden sm:block' /> comunicazione possono fare piccole
            <br className='hidden sm:block' /> grandi cose, tipo
            <span className='bg-[#0045FF]'> 5 messaggi </span>
            nella
            <br className='hidden sm:block' /> capsula del tempo.
          </h1>
        </div>
      </div>

      {/* Content Boxes */}
      <div className='w-[90%] m-auto'>
        <div className='flex flex-col lg:flex-row lg:flex-wrap gap-7 lg:gap-0'>
          {[
            {
              number: '01',
              text: (
                <>
                  Progetta
                  <br className='hidden sm:block' /> contenuti come
                  <br className='hidden sm:block' /> se lavorassi per la
                  <br className='hidden sm:block' />
                  <div className='bg-[#0045FF] w-fit'>
                    <p>Fisher Price.</p>
                  </div>
                </>
              ),
            },
            {
              number: '02',
              text: (
                <>
                  Rispetta le
                  <br className='hidden sm:block' />
                  <span className='bg-[#0045FF] w-fit'>emozinio </span>di chi
                  <br className='hidden sm:block' />
                  legge e
                  <br className='hidden sm:block' />fruisce del tuo
                  <br className='hidden sm:block' /> contenuto.
                </>
              ),
            },
            {
              number: '03',
              text: (
                <>
                  <div className='flex'>
                    <div className='bg-[#0045FF] flex flex-col gap-1.5 text-white text-xl h-fit py-2 leading-4'>
                      <p className='ml-20'>voc</p>
                      <p>e umanaon u</p>
                    </div>
                    <p className='text-white mt-6 text-xl'>n</p>
                  </div>
                  <p className='text-white text-xl'>tone of voice</p>
                </>
              ),
            },
            {
              number: '04',
              text: (
                <>
                  <p>Transmetti</p>
                  <div className='bg-[#0045FF] text-white py-2 leading-5 text-2xl'>
                    <p className='ml-25 mr-3 font-extralight'>etica</p>
                    <p>e valori.</p>
                  </div>
                </>
              ),
            },
            {
              number: '05',
              text: (
                <>
                  Guida le azioni
                  <br className='hidden sm:block' />delle persone,
                  <br className='hidden sm:block' /> risolvi i loro
                  <br className='hidden sm:block' /> problemi e
                  <br className='hidden sm:block' />
                  <div>
                    <p className='bg-[#0045FF] w-fit'> cambia in meglio</p>
                    <p>la loro vita.</p>
                  </div>
                </>
              ),
            },
          ].map((item, idx) => (
            <div
              key={item.number}
              className={`flex gap-7 w-80 lg:w-100 ${
                idx >= 3 ? 'lg:mt-20' : ''
              } transition-all duration-1000 delay-[${idx * 100}ms] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className='text-white text-8xl'>{item.number}</h1>
              <div className='text-white text-xl leading-5.5'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Come;
