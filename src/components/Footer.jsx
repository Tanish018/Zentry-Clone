import React from 'react'
import { FaDiscord, FaMedium, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

const links = [
  { href: "https://discord.com/invite/zentry", icon: <FaDiscord /> },
  { href: "https://x.com/zentry", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/@zentryhq", icon: <FaYoutube /> },
  { href: "https://medium.com/zentry/", icon: <FaMedium /> },
  { href: "https://twitch.com", icon: <FaTwitch /> }
]

const Footer = () => {
  return (
    <footer className='w-screen bg-[#5542ff] py-4 text-black '>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm font-normal md:text-left'>©Zentry 2024. All rights reserved</p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {links.map((link)=> (
            <a key={link} href={link.href} target="_blank" rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>{link.icon}</a>
          ))}
        </div>

        <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right font-[general] font-medium'>Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer