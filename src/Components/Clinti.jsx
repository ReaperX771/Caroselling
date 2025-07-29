import React, { useEffect, useRef, useState } from 'react';

function Clinti() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id='copy'
      ref={sectionRef}
      className={`transition-all duration-1000 ease-in-out overflow-x-hidden ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
      }`}
    >
      <div className="mt-25 sm:mt-20 lg:mt-30 border-t border-white/70 w-[95%] sm:w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Title Section */}
          <div className="text-center lg:text-left mb-6 sm:mb-8 lg:mb-0 mt-10">
            <h1 className="text-[#0045FF] text-2xl sm:text-3xl lg:text-4xl font-bold">clinti</h1>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/4 xl:w-2/3 py-5">
            {[
              {
                name: 'APT Dolomiti Paganella',
                services: 'COPYWRITING',
              },
              {
                name: 'Gardalisa',
                services:
                  'brand, copywriting, posizionamento, seo, social media, traduzioni, web design',
              },
              {
                name: 'Mobiliar interiorarchitecture',
                services: 'copywriting, social media, traduzioni, web design',
              },
              {
                name: 'Cascina Casalina',
                services: 'brand, copywriting',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-white flex justify-between items-center border-b border-white/70 py-3 sm:py-4"
              >
                <div className="flex w-full max-w-[85%] sm:max-w-[90%] gap-4 sm:gap-6 lg:gap-8">
                  <p className="w-[40%] sm:w-1/3 font-semibold hover:text-[#4076FF] duration-700 text-sm sm:text-base lg:text-lg">
                    {item.name}
                  </p>
                  <p className="w-[60%] sm:w-2/3 text-sm sm:text-base hover:text-[#4076FF] duration-700 lg:text-lg">
                    {item.services}
                  </p>
                </div>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold hover:text-[#4076FF] duration-700">+</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <button className="text-3xl text-white border px-27 lg:px-37 py-2 rounded-full sm:text-4xl lg:text-5xl font-bold hover:text-[#4076FF] duration-700">
          +
        </button>
      </div>
    </section>
  );
}

export default Clinti;
