import { useState, useRef } from 'react'
import Hero from './DropdownComponents.jsx/Hero'
import Louisa from './DropdownComponents.jsx/Louisa'
import WhatWeDo from './DropdownComponents.jsx/WhatWeDo'
import Testimonials from './DropdownComponents.jsx/Testimonials'
import WhatWeDo2 from './DropdownComponents.jsx/WhatWeDo2'
import WhatWeDo3 from './DropdownComponents.jsx/WhatWeDo3'
import WhatWeDo4 from './DropdownComponents.jsx/WhatWeDo4'
import { Dropdown, DropdownHeader } from 'flowbite-react'
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
  const designAndBuild = useRef()
  const testimonials = useRef()

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
    <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-36 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-48 transition-all duration-200 w-full"}>
      <div className="hidden lg:flex gap-10">
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
                designAndBuild.current.scrollIntoView({behavior: 'smooth'
              })
              }}
            >
              <span className='hover:opacity-80'>Design & Build</span>
            </button>
          </Dropdown.Header>
          <Dropdown.Header>
            <Link to='/about-us' className='hover:opacity-80'>
              About Us
            </Link>
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
      </div>
      {/* MOBILE */}
      <div className="ml-0 xl:ml-52">
        <Link to='/'>
          <img src={Image} alt="" className='w-[200px]'/>
        </Link>
      </div>
      <button 
        className="text-3xl flex lg:hidden"
        onClick={toggleNavbar}
      >
        {!isOpen ? <GiHamburgerMenu /> : <></>}
      </button>
      {/**/}
      <div className="hidden lg:flex items-center gap-10">
          <Link to='/commercial-projects' className='hover:opacity-80'>
            Commercial Projects
          </Link>
          <Link to='/about-us' className='hover:opacity-80'>
            About Us
          </Link>
          <Link to='/contact'>
            <button className='bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center text-black'>Contact Us</button>
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
        <div className="flex flex-col gap-14 mt-20 text-center text-3xl">
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
            <button className='bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center text-black'>Contact Us</button>
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
      <div>
        <Hero />
      </div>
      <div ref={introduction}>
        <Louisa />
      </div>
      <div className="min-h-screen mb-20" ref={whatWeDo}>
        <WhatWeDo />
      </div>
      <div>
        <WhatWeDo2 />
      </div>
      <div ref={designAndBuild}>
        <WhatWeDo3 />
      </div>
      <div>
        <WhatWeDo4 />
      </div>
      <div>
        <KnowMore />
      </div>
      <div ref={testimonials}>
        <Testimonials />
      </div>
    </>
  )
}

