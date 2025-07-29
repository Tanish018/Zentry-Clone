import { useRef, useState } from "react"

const BentoTilt = ({ children, className = '' }) => {

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

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video src={src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div>
          <h1 className="bento-title text-[#DFDFFA] special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-[#C0C0D1] leading-5 font-medium">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className='bg-black pb-52 px-5'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className="pt-37 pb-48 md:max-w-xl max-w-md font-[circular-web]">
          <p className='text-[#D9D9EB] text-[22px] font-semibold'>Explore the Zentry Universe</p>
          <p className='text-[#54545b] text-[22px] font-medium leading-6'>Immerse yourself in an IP-rich product universe where players, agentic AI and blockchain lead the new economic paradigm.</p>
        </div>

        <BentoTilt className='border border-[#323232] mx-auto relative mb-7 h-96 w-full transition-transform duration-300 ease-out overflow-hidden rounded-md md:h-[75vh] hover:cursor-grab'>
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>RADIA<b>N</b>T</>}
            description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>ZIG<b>M</b>A</>}
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0 border border-[#323232]">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>N<b>E</b>XUS</>}
              description="The metagame portal uniting humans & AI to play, compete and earn."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0  border border-[#323232]">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>AZ<b>U</b>L</>}
              description="The agent of agents elevating agentic AI experience to be more fun and productive."
            />
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <div className="flex size-full flex-col justify-between bg-[#5724FF] p-5">
              <h1 className="bento-title special-font max-w-64 text-black">M<b>O</b>RE CO<b>M</b>ING S<b>O</b>ON.</h1>
              <img src="img/logo-black.png" width={100} className="self-end m-5" alt="" />
            </div>
          </BentoTilt>

          <BentoTilt className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <video src="videos/feature-5.mp4" className="size-full object-cover object-center" loop autoPlay muted />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features