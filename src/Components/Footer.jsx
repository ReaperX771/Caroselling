import React from 'react';

function Footer() {
  return (
    <section>
      <div className="mt-25 sm:mt-20 lg:mt-30 border-t border-white/70 w-[90%] sm:w-[90%] mx-auto">
        {/* Header */}
        <div className="flex flex-col mt-10 sm:flex-row justify-between items-center gap-5">
          <div className="text-center lg:text-left">
            <h1 className="text-white text-2xl sm:text-5xl lg:text-8xl">contatti</h1>
          </div>

          <div className="text-white text-2xl flex flex-wrap justify-center gap-3 sm:gap-7">
            <a className="border-b border-white/70" href="">facebook</a>
            <a className="border-b border-white/70" href="">instagram</a>
            <a className="border-b border-white/70" href="">linkedin</a>
          </div>
        </div>

        {/* FORM SECTION - LG and Below */}
        <div className="mt-10 flex flex-col gap-6 xl:hidden">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-5 text-white">
            <div className="flex justify-between items-center border-b border-white/90 w-full sm:w-[48%] py-2">
              <p>Vorrei conoscervi per parlare di</p>
              <p className="text-2xl">+</p>
            </div>
            <div className="flex justify-between items-center border-b border-white/90 w-full sm:w-[48%] py-2">
              <p>Budget</p>
              <p className="text-2xl">+</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-5 text-white">
            <div className="flex justify-between items-center border-b border-white/90 w-full sm:w-[48%] py-2">
              <p>Come ci hai conosciuto?</p>
              <p className="text-2xl">+</p>
            </div>
            <div className="border-b border-white/90 w-full sm:w-[48%] py-2 text-[#757575]">
              <p>Nome e Cognome</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap gap-5 text-[#757575]">
            <div className="border-b border-white/90 w-full sm:w-[48%] py-2">
              <p>Azienda (opzionale)</p>
            </div>
            <div className="border-b border-white/90 w-full sm:w-[48%] py-2">
              <p>Scrivi la tua email</p>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between border-t border-white/70 mt-20">
            <div className="mt-5 space-y-5">
              <label className="flex gap-2 text-white">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-black checked:bg-black accent-blue-500 border border-white rounded-sm"
                />
                Spuntando questa casella ci autorizzi al trattamento dei tuoi dati<br />
                personali, ne avremo cura.
              </label>

              <label className="flex gap-2 text-white">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-black checked:bg-black accent-blue-500 border border-white rounded-sm"
                />
                Voglio iscrivermi alla newsletter
              </label>
            </div>

            <div className="text-white text-center hover:text-[#4076FF] duration-700 border border-white/70 px-15 py-4 rounded-4xl">
              <p>Invia</p>
            </div>
          </div>
        </div>

        {/* FORM SECTION - XL Only */}
        <div className="hidden xl:block xl:ml-97 mt-10">
          <div className="text-white xl:mt-5 flex gap-17">
            <div className="flex border-b py-2 border-white/70 xl:gap-35 xl:w-95">
              <p>Vorrei conoscervi per parlare di</p>
              <p className="text-2xl">+</p>
            </div>
            <div className="flex border-b py-2 border-white/70 xl:gap-78 xl:w-95">
              <p>Budget</p>
              <p className="text-2xl">+</p>
            </div>
          </div>

          <div className="text-white flex xl:mt-5 gap-17">
            <div className="flex border-b py-2 border-white/70 xl:gap-47 xl:w-95">
              <p>Come ci hai conosciuto?</p>
              <p className="text-2xl">+</p>
            </div>
            <div className="text-[#757575] border-b border-white/70 xl:gap-80 xl:w-95">
              <p className="py-2">Nome e Cognome</p>
            </div>
          </div>

          <div className="text-[#757575] flex xl:mt-5 gap-17">
            <div className="flex border-b border-white/70 xl:gap-49 xl:w-95">
              <p className="py-2">Azienda (opzionale)</p>
            </div>
            <div className="border-b border-white/70 xl:gap-80 xl:w-95">
              <p className="py-2">Scrivi la tua email</p>
            </div>
          </div>

          <div className="flex items-center gap-19 border-t border-white/70 mt-20">
            <div className="mt-5 space-y-5">
              <label className="flex gap-2 text-white">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-black checked:bg-black accent-blue-500 border border-white rounded-sm"
                />
                Spuntando questa casella ci autorizzi al trattamento dei tuoi dati<br />
                personali, ne avremo cura.
              </label>

              <label className="flex gap-2 text-white">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 bg-black checked:bg-black accent-blue-500 border border-white rounded-sm"
                />
                Voglio iscrivermi alla newsletter
              </label>
            </div>

            <div className="">
              <button className='text-white text-center border border-white/70 px-15 py-4 rounded-4xl'>Invia</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[90%] m-auto text-white/80 border-t flex flex-col lg:flex-row justify-between border-white/70 mt-10 mb-3">
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 mt-10">
          <p>Caroselling</p>
          <span className="border-l border-white/70 px-l-2"></span>
          <p>Copyright 2022</p>
          <span className="border-l border-white/70 px-l-2"></span>
          <p>P.IVA 02472870209</p>
          <span className="border-l border-white/70 px-l-2"></span>
          <p>Mantua, Italy and everywhere</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-10">
          <p className="border-b w-fit">Privacy Policy</p>
          <span className="border-l border-white/70 px-l-2"></span>
          <p className="border-b w-fit">Cookie Policy</p>
          <span className="border-l border-white/70 px-l-2"></span>
          <p className="border-b w-fit">Aggiorna preferenze cookie</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
