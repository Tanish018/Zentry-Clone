import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'
import Button from './Button'

const Story = () => {

  const frameRef = useRef('null')

  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut'
    })
  }

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut'
    })
  }

  return (
    <div id='story' className='bg-black min-h-dvh w-screen text-[#DFDFE2]'>
      <div className='flex flex-col size-full items-center py-10 pb-24'>
        <p className='text-[14px] md:text-[12px] font-medium font-[general]'>THE OPEN IP UNIVERSE</p>

        <div className='relative size-full'>
          <AnimatedTitle title="THE ST<b>O<b/>RY OF <br /> A HIDDEN REAL<b>M<b/>" sectionId="#story" containerClass="mt-15 pointer-events-none mix-blend-difference relative z-10" />


          <div className='story-img-container'>
            <div className='story-img-mask'>
              <div className='story-img-content'>
                <img ref={frameRef} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove} src="/img/entrance.webp" alt="entrance" className='object-contain' />
              </div>
            </div>

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end px-5'>
          <div className='flex h-full w-fit flex-col items-center md:items-start'>
            <p className="mt-3 text-[18px] max-w-sm text-center font-[circular-web] leading-[1.2] text-[#DFDFE2] md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story