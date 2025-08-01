import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })

    clipAnimation.to('.mass-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: '0',
      
    })
  })

  return (
    <div id='about' className='min-h-screen w-screen bg-[#dfdff2]'>
      <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <h2 className='font-[general] text-sm uppercase md:text-[10px]'>Welcome to Zentry</h2>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className='about-subtext'>
          <p>The Metagame begins - your life, now an epic MMOPRG</p>
          <p className='text-[rgba(134,134,145,1)]'>Zentry is the unified play layer driving attention and contribution through cross-world AI gamification.</p>
        </div>
      </div>

      <div className='h-dvh w-screen' id='clip'>
        <div className="mass-clip-path about-image">
          <img src="img/about.webp" alt="Background" className='absolute left-0 top-0 size-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default About
