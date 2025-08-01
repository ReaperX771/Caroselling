import React, { useEffect, useRef, useState } from 'react'
import mute from '../assets/images/mute.png'
import line from '../assets/images/line.png'
import linesl from '../assets/images/linesl.png'

function Hero() {
  const [animateHero, setAnimateHero] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimateHero(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section id='menu'  ref={heroRef}>
      <div className="py-7">
        <div className="flex flex-col xl:flex-row w-[90%] m-auto md:justify-between lg:justify-start justify-center">
          <div
            className={`flex flex-col gap-7 transform transition-all duration-[1500ms] ease-out ${
              animateHero
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-8xl">Caroselling</h1>
              <h1 className="text-white text-4xl md:text-5xl lg:text-8xl ml-4">digital studio for</h1>
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-8xl">
              <span className="bg-[#0045FF]">human</span> experiences
            </h1>

            <div className="flex gap-5 ml-5">
              <div>
                <img src={line} alt="line" />
              </div>

              <div className="flex gap-10 mt-32">
                <h1 className="text-white/90">scorri e scopri di più</h1>
                <img className="w-5 h-5" src={mute} alt="mute" />
              </div>
            </div>
          </div>

          <div
            className={`ml-5 md:ml-0 py-4 md:py-0 flex flex-col gap-3 lg:mt-20 transform transition-all duration-[1500ms] ease-out delay-300 ${
              animateHero
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <h1 className="text-white/90">
              Usiamo il design per mettere al <br className="hidden sm:block" />
              <span className="text-white text-lg/1">centro le persone e le loro scelte.</span>
            </h1>

            <h1 className="text-white/90 text-lg/5">
              Realizziamo <span className="text-white">siti web, brand<br /> identity e contenuti creativi</span> che<br /> prendono per mano i tuoi clienti<br /> e li portano <span className="text-white">verso di te.</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`w-[87%] m-auto flex flex-col gap-17 py-27 md:mt-20 transform transition-all duration-[1500ms] ease-out delay-300 ${
          animateHero
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-20 scale-95'
        }`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row gap-3">
            <h1 className="text-white mt-2">
              <span className="text-[#0045FF]">(noi) (noi) </span>(noi)
            </h1>

            <div>
              <h1 className="text-2xl md:text-4xl text-white">le grandi cose, come le piccole,</h1>
              <h1 className="text-2xl md:text-4xl text-white ml-2">tutto ci appassiona.</h1>
            </div>
          </div>

          <div className="mt-5 sm:hidden lg:block">
            <img src={linesl} alt="lines" />
          </div>
        </div>

        <div className="text-white/90 font-extralight text-xl flex flex-col gap-3 md:ml-30">
          <h1>
            ogni giorno nutriamo l’ambizione di{' '}
            <span className="bg-[#0045FF]">semplificare la complessità.</span>
          </h1>
          <h1>
            non amiamo i compromessi, le risposte standard per qualsiasi problema, ma solo
            la soluzione studiata e giusta per te.
          </h1>
          <h1>
            crediamo nelle idee che sappiano abbracciare una visione strategica.
          </h1>
          <h1>
            ti diremo che faremo delle cose, e poi le faremo{' '}
            <span className="bg-[#0045FF]">davvero.</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
