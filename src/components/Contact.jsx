import React, { useRef, useState } from 'react'
import Button from './Button'
import AnimatedTitle from './AnimatedTitle'

const DivTilt = ({ children, className = '' }) => {

  const [transformStyle, setTransformStyle] = useState('');

  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = (e) => {
    setTransformStyle('')
  }

  return (
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </div>
  )
}

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
)

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <DivTilt className='relative rounded-lg bg-black py-24 text-[#DFDFF0] sm:overflow-hidden transition-all duration-75'>
        <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
          <ImageClipBox src="img/contact-1.webp" clipClass="contact-clip-path-1" />
          <ImageClipBox src="img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" />
        </div>

        <div className='absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
          <ImageClipBox src="img/swordman-partial.webp" clipClass="absolute md:scale-125" />
          <ImageClipBox src="img/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
        </div>

        <div className='flex flex-col items-center text-center'>
          <p className='font-[general] text-[12px] uppercase mb-10'>join zentry</p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[7rem] !text-[#dfdff2] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <Button title={"Contact Us"} containerClass="mt-10 cursor-pointer" />
        </div>
      </DivTilt>
    </div>
  )
}

export default Contact