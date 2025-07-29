import React from 'react'
import linesl from '../assets/images/linesl.png'

function Come() {
  return (
      <section>
           <div className='w-[87%] m-auto flex flex-col gap-17 py-27 md:mt-20'>
          
                  <div className='flex justify-between'>
          
                    <div className=' flex flex-col md:flex-row gap-3'>
                       <h1 className='text-white mt-2'><span className='text-[#0045FF]'>(come) (come) </span><br className='hidden sm:block' />(come)</h1>
          
                    <div>
                      <h1 className='text-2xl md:text-4xl text-white'>progettiamo per il futuro.</h1>
                    </div>
                    </div>
                   
                    <div className='mt-5 sm:hidden lg:block'>
                      <img src={linesl}/>
                    </div>
                  </div>
                  
                  <div className='text-white/90 font-extralight text-2xl flex flex-col gap-3 md:ml-42'>
                  <h1>Nei momenti caotici il linguaggio e la
                      <br className='hidden sm:block' /> comunicazione possono fare piccole
                      <br className='hidden sm:block' /> grandi cose,tipo
                      <span className='bg-[#0045FF]'> 5 messaggi </span>
                      nella
                      <br className='hidden sm:block' /> capsula del tempo.
                  </h1>
                  </div>
                </div>



          <div className='w-[90%] m-auto'>
              <div className='flex flex-col lg:flex-row lg:flex-wrap gap-7 lg:gap-0'>
                  
                  <div className='flex gap-7 w-80 lg:w-100 leading-1'>
                      <h1 className='text-white text-8xl'>01</h1>
                      <p className='text-white text-xl leading-5.5'>Progetta
                          <br className='hidden sm:block' /> contenuti come
                          <br className='hidden sm:block' /> se lavorassi per la
                          <br className='hidden sm:block' />
                          <div className='bg-[#0045FF] w-fit'>
                              <p> Fisher Price. </p>
                          </div>
                          
                      </p>
                  </div>

                  <div className='flex gap-7 w-80 lg:w-100'>
                      <h1 className='text-white text-8xl'>02</h1>
                      <p className='text-white text-xl leading-5.5'>Rispetta le
                          <br className='hidden sm:block' />
                          <span className='bg-[#0045FF] w-fit'>emozinio </span>di chi
                          <br className='hidden sm:block' />
                          legge e
                          <br className='hidden sm:block' />fruisce del tuo
                          <br className='hidden sm:block' /> contenuto.
                      </p>
                  </div>

                  <div className='flex gap-7 w-80 lg:w-100'>
                      <h1 className='text-white text-8xl'>03</h1>

                      <div className=''>
                          <div className='flex'>
                             <div className='bg-[#0045FF] flex flex-col gap-1.5 text-white text-xl h-fit py-2 leading-4'>
                              <p className='ml-20'>voc</p>
                              
                          <p>e umanaon u</p>
                              </div>
                          <p className='text-white mt-6 text-xl'>n</p>        
                          </div>
                          
                      <p className='text-white text-xl'>tone of voice</p> 
                      </div>
                  </div>

                  <div className='flex gap-7 w-80 lg:w-100 lg:mt-20'>
                      <h1 className='text-white text-8xl'>04</h1>
                      <p className='text-white text-xl leading-5.5'>
                          <p>Transmetti</p>
                          <div className='bg-[#0045FF] text-white py-2  leading-5 text-2xl'>
                              <p className='ml-25 mr-3 font-extralight'>etica</p>
                              <p>e valori.</p>
                          </div>
                      </p>
                  </div>

                  <div className='flex gap-7 w-80 lg:w-100 lg:mt-20'>
                      <h1 className='text-white text-8xl'>05</h1>
                      <p className='text-white text-xl leading-5.5'>
                          Guida le azioni
                          <br className='hidden sm:block' />delle persone,
                          <br className='hidden sm:block' /> risolvi i loro
                          <br className='hidden sm:block' /> problemi e
                          <br className='hidden sm:block'/>
                          <div className=''>
                              <p className='bg-[#0045FF] w-fit'> cambia in meglio</p>
                              <p>la loro vita.</p>
                          </div>
                          <br className='hidden sm:block'/>
                          
                      </p>
                  </div>

              </div>
          </div>
          
    </section>
  )
}

export default Come