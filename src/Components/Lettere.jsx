import React, { useEffect, useRef, useState } from 'react'
import lion from '../assets/images/lion.png'
import engin from '../assets/images/engin.png'
import ange from '../assets/images/ange.png'
import angee from '../assets/images/angee.png'

function Lettere() {
  const sectionsRef = useRef([])
  const [visibleIndexes, setVisibleIndexes] = useState([])

  const leters = [
    {
      img: lion,
      text: `Siate creativi,
siate originali,
distinguetevi.
Come?`,
      stext: `Siamo alla ricerca di
qualcosa di interessante
e lepersone originali e
creative ci aiutano a
trovare queste cose.
Come imparare queste
preziose qualità?`,
      plus: '+',
    },
    {
      img: engin,
      text: `L’editing:
l’importanza
della revisione di
un testo`,
      stext: `Con la revisione testi
garantiamo che ogni
carattere, ogni frase e
ogni paragrafo
trasmetta il messaggio
giusto in modo
accurato e potente.`,
      plus: '+',
    },
    {
      img: ange,
      text: `Creare il marchio:
come il payoff e il
naming vanno di
pari passo`,
      stext: `Il payoff è la frase che
cattura lessenza del
naming e ciò che
rappresenta. È ciò che
volete che i vostri clienti
ricordino e associno alla
vostra azienda.`,
      plus: '+',
    },
    {
      img: angee,
      text: `Logo di
successo: guida
alla creazione di
un’immagine
efficace del
marchio`,
      stext: `Ci sono molti aspetti da
considerare quando si
progetta un logo di
successo. Di seguito
una guida che aiuta a
creare unimmagine
efficace del marchio.`,
      plus: '+',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleIndexes(prev => [...new Set([...prev, index])])
          } else {
            setVisibleIndexes(prev => prev.filter(i => i !== index))
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionsRef.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => {
      sectionsRef.current.forEach(el => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section>
      <div className='border-t border-white/70 w-[90%] m-auto py-20 mb-10 mt-10'>
        <div className='flex gap-7 lg:gap-37'>
          <div className='text-center xl:text-left mb-10 xl:mb-0'>
            <h1 className='text-[#0045FF] text-3xl'>Lettere</h1>
          </div>
          <div className='text-white/90 font-extralight text-2xl gap-3'>
            lettere perché sono fotografie
            <br className='hidden sm:block' /> pensate, lettere perché fanno
            <br className='hidden sm:block' /> succedere cose incredibili, lettere
            <br className='hidden sm:block' /> perché puoi prenderci alla lettera
          </div>
        </div>
      </div>

      <div className='w-[90%] m-auto py-20'>
        <div className='flex flex-col lg:grid gap-10 lg:grid-cols-2'>
          {leters.map((leter, index) => (
            <div
              key={index}
              ref={el => (sectionsRef.current[index] = el)}
              data-index={index}
              className='sm:w-140 lg:w-140 flex flex-col gap-7 overflow-hidden'
            >
              <img
                src={leter.img}
                className={`w-100 sm:w-140 max-sm:w-140 transform transition-all duration-1000 ease-in-out ${
                  visibleIndexes.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-20 opacity-0'
                }`}
              />
              <div
                className={`text-white flex justify-between transform transition-all duration-1000 ease-in-out delay-200 ${
                  visibleIndexes.includes(index)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
              >
                <div className='flex gap-7 md:gap-17 text-sm lg:text-lg'>
                  <h1 className='whitespace-pre-line hover:text-[#4076FF] duration-700'>
                    {leter.text}
                  </h1>
                  <h1 className='whitespace-pre-line hover:text-[#4076FF] duration-700'>
                    {leter.stext}
                  </h1>
                </div>
                <p className='text-5xl lg:text-7xl hover:text-[#4076FF] duration-700'>
                  {leter.plus}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-20'>
          <button className='text-3xl text-white border px-27 lg:px-37 py-2 rounded-full sm:text-4xl lg:text-5xl font-bold hover:text-[#4076FF] duration-700'>
            +
          </button>
        </div>
      </div>
    </section>
  )
}

export default Lettere
