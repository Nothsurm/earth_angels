import { useState, useRef } from 'react'
import Hero from './DropdownComponents.jsx/Hero'
import Louisa from './DropdownComponents.jsx/Louisa'
import WhatWeDo from './DropdownComponents.jsx/WhatWeDo'
import Testimonials from './DropdownComponents.jsx/Testimonials'
import ParallaxImage from './DropdownComponents.jsx/Parallax'
import WhatWeDo4 from './DropdownComponents.jsx/WhatWeDo4'
import { Dropdown } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import KnowMore from './DropdownComponents.jsx/KnowMore'
import { IoMdClose } from "react-icons/io";
import Image from '../images/earth-angels-logo.png'

export default function Home() {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const filePickerRef = useRef()
  const introduction = useRef()
  const whatWeDo = useRef()
  const aboutUs = useRef()
  const testimonials = useRef()
  const home = useRef()

  const changeBackground = () => {
    if (window.scrollY > 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <>
    <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 bg-opacity-80 h-44 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-56 transition-all duration-200 w-full"}>
      <div className="hidden text-sm 2xl:text-base lg:flex items-center gap-10 ml-2 mr-2">
        <Dropdown 
          arrowIcon={true}
          inline
          label = {
            <span className='hover:opacity-80'>Home</span>
          }
        >
          <Dropdown.Header>
            <button
              onClick={() => {
                home.current.scrollIntoView({behavior: 'smooth'})
              }}
            >
              <span className='hover:opacity-80'>Home</span>
            </button>
          </Dropdown.Header>
          <Dropdown.Header>
            <button
              onClick={() => {
                introduction.current.scrollIntoView({behavior: 'smooth'})
              }}
            >
              <span className='hover:opacity-80'>Introduction</span>
            </button>
          </Dropdown.Header>
          <Dropdown.Header>
            <button 
              onClick={() => {
                whatWeDo.current.scrollIntoView({behavior: 'smooth'
              })
              }}
            >
              <span className='hover:opacity-80'>What We Do</span>
            </button>
          </Dropdown.Header>
          <Dropdown.Header>
            <button 
              onClick={() => {
                aboutUs.current.scrollIntoView({behavior: 'smooth'
              })
              }}
            >
              <span className='hover:opacity-80'>About Us</span>
            </button>
          </Dropdown.Header>
          <Dropdown.Header>
            <button 
              onClick={() => {
                testimonials.current.scrollIntoView({behavior: 'smooth'
              })
              }}
            >
              <span className='hover:opacity-80'>Testimonials</span>
            </button>
          </Dropdown.Header>
        </Dropdown>
        <Link to='/design' className='hover:opacity-80'>
          Design
        </Link>
        <Link to='/visualisation' className='hover:opacity-80'>
          Visualisations
        </Link>
        <Link to='/commercial-projects' className='hover:opacity-80'>
            Commercial Projects
        </Link>
      </div>
      {/* MOBILE */}
      <div className="ml-0 xl:mr-6">
        <Link to='/'>
          <img src={Image} alt="" className='w-[300px] sm:w-[400px]'/>
        </Link>
      </div>
      <button 
        className="text-3xl flex lg:hidden"
        onClick={toggleNavbar}
      >
        {!isOpen ? <GiHamburgerMenu /> : <></>}
      </button>
      {/**/}
      <div className="hidden lg:flex items-center text-sm 2xl:text-base gap-10 ml-2 mr-2">
          <Link to='/sustainability' className='hover:opacity-80'>
            Sustainability
          </Link>
          <Link to='/about-us' className='hover:opacity-80'>
            About Us
          </Link>
          <Link to='/contact'>
            <button className='px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 transition ease-in-out delay-50 flex items-center text-black hover:text-white bg-gradient-to-tr from-zinc-200 from-10% via-zinc-400 via-50% to-zinc-600 to-90%'>Contact Us</button>
          </Link>
          <input type="file" accept='/images/*' ref={filePickerRef} hidden/>
          <button 
            onClick={() => filePickerRef.current.click()}
            className='hover:opacity-80'
          >
            Brochure
          </button>
      </div>
    </div>
    {/* MOBILE */}
    {isOpen && (
      <div className='min-h-screen flex flex-col items-center fixed bg-zinc-700 z-50 w-full text-stone-300'>
        <div className="absolute right-10 top-10 text-6xl">
          <button onClick={toggleNavbar}>
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col justify-center gap-14 mt-20 text-center text-3xl">
          <Link to='/' className='hover:opacity-80' onClick={toggleNavbar}>
            <span>Home</span>
          </Link>
          <Link to='/design' className='hover:opacity-80' onClick={toggleNavbar}>
            Design
          </Link>
          <Link to='/visualisation' onClick={toggleNavbar}>
            <span className='hover:opacity-80'>Visualisations</span>
          </Link>
          <Link to='/commercial-projects' onClick={toggleNavbar}>
            <span className='hover:opacity-80'>Commercial Projects</span>
          </Link>
          <Link to='/about-us' onClick={toggleNavbar}>
            <span className='hover:opacity-80'>About us</span>
          </Link>
          <Link to='/contact' onClick={toggleNavbar}>
            <button className='px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 transition ease-in-out delay-50 text-black hover:text-white bg-gradient-to-tr from-zinc-200 from-10% via-zinc-400 via-50% to-zinc-600 to-90%'>Contact Us</button>
          </Link>
          <input type="file" accept='/images/*' ref={filePickerRef} hidden/>
          <button 
            onClick={() => filePickerRef.current.click()}
            className='hover:opacity-80'
          >
            Brochure
          </button>
        </div>
      </div>
    )}
    </>
      {/* COMPONENTS */}
      <div ref={home}>
        <Hero />
      </div>
      <div ref={introduction}>
        <Louisa />
      </div>
      <div className="min-h-screen mb-20" ref={whatWeDo}>
        <WhatWeDo />
      </div>
      <div>
        <ParallaxImage />
      </div>
      <div>
        <WhatWeDo4 />
      </div>
      <div ref={aboutUs}>
        <KnowMore />
      </div>
      <div ref={testimonials}>
        <Testimonials />
      </div>
    </>
  )
}

