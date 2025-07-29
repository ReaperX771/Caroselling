import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const sections = [
  { id: 'brand', label: 'brand design' },
  { id: 'web', label: 'web design' },
  { id: 'copy', label: 'copywriting' },
  { id: 'menu', label: 'menu' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Top Navbar Bar (with blur) */}
        <div className="backdrop-blur-3xl shadow shadow-[#4076FF]">
          <div className="flex justify-between w-[90%] m-auto items-center py-6">
            <div className="flex gap-30 items-center z-50 relative">
              <h1 className="text-3xl text-white font-bold">Caroselling</h1>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex gap-7">
                {sections.slice(0, 3).map((s) => (
                  <AnchorLink
                    key={s.id}
                    offset={50}
                    href={`#${s.id}`}
                    className={`border-b ${
                      activeSection === s.id
                        ? 'text-[#4076FF]'
                        : 'text-white/90 hover:text-[#4076FF]'
                    } transition-colors duration-300`}
                  >
                    {s.label}
                  </AnchorLink>
                ))}
              </nav>
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:block">
              <AnchorLink
                offset={50}
                href="#menu"
                className={`border-b ${
                  activeSection === 'menu'
                    ? 'text-[#4076FF]'
                    : 'text-white/90 hover:text-[#4076FF]'
                } transition-colors duration-300`}
              >
                menu
              </AnchorLink>
            </div>

            {/* Hamburger Button */}
            {!menuOpen && (
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden z-50 flex flex-col gap-1 focus:outline-none"
                aria-label="Open Menu"
              >
                <span className="w-7 h-1 bg-white rounded"></span>
                <span className="w-7 h-1 bg-white rounded"></span>
                <span className="w-7 h-1 bg-white rounded"></span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Overlay Menu (NO blur here) */}
        <div
          className={`fixed inset-0 z-40 transition-transform duration-700 lg:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } bg-black`}
        >
          <div className="flex items-center justify-between px-8 mt-5">
            {/* Logo in Mobile Menu */}
            <h1 className="text-3xl text-white font-bold">Caroselling</h1>
            <button
              className="text-5xl font-bold text-white hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col items-center gap-8 text-white mt-16 text-2xl font-semibold">
            {sections.map((s) => (
              <AnchorLink
                key={s.id}
                offset={50}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className={`${
                  activeSection === s.id
                    ? 'text-[#4076FF]'
                    : 'text-white/90 hover:text-[#4076FF]'
                } transition-colors duration-300`}
              >
                {s.label}
              </AnchorLink>
            ))}
          </ul>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[80px] lg:h-[100px]"></div>
    </>
  );
}

export default Navbar;