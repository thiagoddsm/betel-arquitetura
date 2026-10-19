'use client' // 🔹 necessário para usar useState e useEffect

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MenuPrincipal from '@/components/MenuPrincipal'
import SocialMenu from '@/components/SocialMenu'
import SwiperWrapper from '@/components/SwiperWrapper'

const Header = ({ type = 'home', id, slides }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Cleanup
    return () => document.body.classList.remove('overflow-hidden')
  }, [isMenuOpen])

  return (
    <header id={`${id}`}>
      <div className="relative">
        <div className="absolute inset-0">
          <div className="container mx-auto px-5 md:px-0">
            <div className="grid grid-cols-[40%_1fr] md:grid-cols-[15%_1fr_1fr] grid-rows-flow md:ms-0">
              {/* Logo */}
              <div className="row-start-1 row-span-2 bg-primary flex items-center z-50 h-[120px] md:h-[170px]">
               
                <Link href="/">
                  <img className="p-4 lg:p-8" src="/logomarca-branca.png" alt="Logo" />
                </Link>
              </div>

              {/* Menu Desktop */}
              <div className="md:col-span-2 md:bg-neutral-950/80 flex items-center justify-end md:px-4 md:pr-8 z-50 h-[60px] md:h-[80px]">
                {/* Botão Menu Hamburguer */}
                <button
                  className="md:hidden text-gray-700"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Abrir menu"
                >
                  {isMenuOpen ? (
                    <div className="relative w-8 h-6 transition duration-300 ease-in-out">
                      <span className="absolute top-1/2 left-0 w-full h-[3px] bg-white rounded-full transform -translate-y-1/2 rotate-45 transition duration-300"></span>
                      <span className="absolute top-1/2 left-0 w-full h-[3px] bg-white rounded-full transform -translate-y-1/2 -rotate-45 transition duration-300"></span>
                    </div>
                  ) : (
                    <div className="w-8 h-6 flex flex-col justify-between transition duration-300 ease-in-out">
                      <span className="w-full h-[3px] bg-white rounded-full"></span>
                      <span className="w-full h-[3px] bg-white rounded-full"></span>
                      <span className="w-full h-[3px] bg-white rounded-full"></span>
                    </div>
                  )}
                </button>

                <MenuPrincipal classes="hidden md:flex justify-end list-none text-white nav-menu font-semibold gap-1 mr-6 z-2 h-full items-center" />
                <SocialMenu classes="hidden md:flex nav-menu-social" />
              </div>
              {/* Fim Menu Desktop */}

              {/* Menu Mobile */}
              <div
                className={`fixed top-0 right-0 h-screen w-screen z-49 bg-neutral-800/90 flex flex-col items-center justify-center list-none text-white nav-menu font-semibold gap-1 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                <div className="bg-neutral-800/80 absolute right-0 flex flex-col items-center justify-center h-[100vh] w-[100vw] gap-10">
                  <MenuPrincipal onLinkClick={() => setIsMenuOpen(false)} classes="list-none text-white text-center font-semibold gap-1" />
                  <SocialMenu onLinkClick={() => setIsMenuOpen(false)} classes="nav-menu-social" />
                </div>
              </div>
              {/* Fim Menu Mobile */}
            </div>
          </div>
        </div>
      </div>

      <SwiperWrapper type={type} slides={slides} />

      {/* Swiper */}
      {/* {type === 'servico' ? (
        <SwiperWrapper type={type} slides={slides} />
      ) : (
        <SwiperWrapper slides={slides} />
      )} */}
    </header>
  )
}

export default Header
