import React, { useEffect, useRef, useState } from 'react';
import awwards from '../assets/images/awwards.png';
import m from '../assets/images/m.png';
import cssd from '../assets/images/cssd.png';
import bestc from '../assets/images/bestc.png';
import cssl from '../assets/images/cssl.png';

function Premi() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div className="border-t border-white/70 w-[90%] m-auto py-20 mb-10 mt-10">
        <div className="flex flex-col lg:flex-row gap-37">
          <div
            className={`text-center xl:text-left xl:mb-0 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h1 className="text-[#0045FF] text-3xl">Premi</h1>
          </div>

          <div
            className={`flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-7 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-3">
              <img className="w-30" src={awwards} alt="awwards" />
              <div className="text-white">
                <p>
                  3 honorable mentions <br />
                  3 mobile excellence
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <img className="w-10" src={m} alt="m" />
              <div className="text-white">
                <p>5 Site of the Day</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <img className="w-40" src={cssd} alt="cssd" />
              <div className="text-white">
                <p>4 Special Judge Kudos Award</p>
                <div className="lg:ml-2">
                  <p>6 Best Innovation</p>
                  <p>6 best UI design</p>
                  <p>6 best UX design</p>
                  <p>2 Site of the Day</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:ml-15">
              <img className="w-25" src={bestc} alt="bestc" />
              <div className="text-white">
                <p>2 Site of the Day</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <img className="w-30" src={cssl} alt="cssl" />
              <div className="text-white">
                <p>2 Featured of the Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Premi;
