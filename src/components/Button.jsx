import React, { useRef, useState } from 'react'

const ButtonTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');
  
    const itemRef = useRef();
  
    const handleMouseMove = (e) => {
      if (!itemRef.current) return;
  
      const { left, top, width, height } = itemRef.current.getBoundingClientRect();
  
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
  
      const tiltX = (relativeY - 0.5) * 25;
      const tiltY = (relativeX - 0.5) * -25;
  
      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05,1.05,1.05)`
  
      setTransformStyle(newTransform)
    }
  
    const handleMouseLeave = (e) => {
      setTransformStyle('')
    }

  return (
    <button className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
      {children}
    </button>
  )
}

const Button = ({ id, title, leftIcon, rightIcon, containerClass }) => {
  return (
    <ButtonTilt id={id} className={`group relative z-10 w-fil cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-all duration-75 ${containerClass}`} >
      {leftIcon}

      <span className='relative incline-flex overflow-hidden font-[general] text-[14px] font-bold uppercase'>
        <div>
          {title}
        </div>
      </span>

      {rightIcon}
    </ButtonTilt>
  )
}

export default Button
