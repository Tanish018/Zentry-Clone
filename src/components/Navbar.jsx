import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const navItems = ['Nexus', 'Vault', 'Prolouge', 'About', 'Contact']

const Navbar = () => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const audioElementRef = useRef(null)
  const navContainerRef = useRef(null)

  const { y: currentScrollY } = useWindowScroll()

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove("floating-nav")
    }
    else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add("floating-nav")
      navContainerRef.current.classList.add("py-10")
    }
    else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add("floating-nav")
      navContainerRef.current.classList.add("py-10")
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.1,
    })
  }, [isNavVisible])

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
  }

  useEffect(() => {
    if (isPlaying) {
      audioElementRef.current.play();
    }
    else {
      audioElementRef.current.pause();
    }
  }, [isPlaying])

  return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="left-side flex items-center gap-7">
            <a href="/"><img src="/img/logo.png" width={75} alt="logo" /></a>

            <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="!bg-[#f5f3ff] md:flex items-center justify-center gap-1 hidden " />
          </div>

          <div className="right-side flex items-center h-full ">
            <div className='hidden md:block '>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn !text-[14px]' >{item}</a>
              ))}
            </div>

            <button onClick={toggleAudio} className='ml-10 flex items-center space-x-0.5 cursor-pointer p-3'>
              <audio ref={audioElementRef} src="/audio/loop.mp3" className='hidden' loop />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
