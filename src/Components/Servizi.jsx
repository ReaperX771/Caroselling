import React, { useRef, useEffect, useState } from 'react';

function Servizi() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <div className='border-t border-white/70 w-[90%] m-auto py-20 mb-10 mt-10'>
        <div className='xl:flex xl:flex-row xl:justify-between'>
          <div className='text-center xl:text-left mb-10 xl:mb-0'>
            <h1 className='text-[#0045FF] text-3xl'>servizi</h1>
          </div>

          <div className='grid md:grid-cols-3 gap-12 xl:flex xl:gap-40'>
            {/* Brand Design */}
            <div
              className={`transition-all flex flex-col gap-5 duration-700 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } delay-[100ms]`}
            >
              <h1 className='text-2xl text-white border-b-2 border-[#606060] w-fit'>
                brand design
              </h1>
              <div className='text-white text-lg flex flex-col'>
                <p>consulenza generale</p>
                <p>brand strategy</p>
                <p>brand & rebranding</p>
                <p>logo design</p>
                <p>visual identity</p>
                <p>packaging design</p>
                <p>corporate identity</p>
              </div>
            </div>

            {/* Web Design */}
            <div
              className={`transition-all flex flex-col gap-5 duration-700 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } delay-[300ms]`}
            >
              <h1 className='text-2xl text-white border-b-2 border-[#606060] w-fit'>
                Web Design
              </h1>
              <div className='text-white text-lg flex flex-col'>
                <p>UX/UI design</p>
                <p>art direction</p>
                <p>siti web</p>
                <p>development</p>
                <p>microinteractions</p>
                <p>ecommerce</p>
                <p>content design</p>
                <p>manutenzione e sicurezza</p>
                <p>hosting e privacy consultant</p>
                <p>video e photo shooting</p>
                <p>audit SEO</p>
                <p>SEO strategy & positioning</p>
                <p>check-up per il tuo sito web</p>
              </div>
            </div>

            {/* Copywriting */}
            <div
              className={`transition-all flex flex-col gap-5 duration-700 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-100'
              } delay-[500ms]`}
            >
              <h1 className='text-2xl text-white border-b-2 border-[#606060] w-fit'>
                Copywriting
              </h1>
              <div className='text-white text-lg flex flex-col'>
                <p>testi SEO e piani editoriali</p>
                <p>revisioni</p>
                <p>landing pages</p>
                <p>brochure e company profile</p>
                <p>creatività e slogan</p>
                <p>testi per siti web & ecommerce</p>
                <p>naming & payoff</p>
                <p>microcopy</p>
                <p>testi company profile</p>
                <p>testi company profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servizi;
