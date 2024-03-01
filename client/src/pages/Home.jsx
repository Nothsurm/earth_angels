import { Button, Dropdown } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import Hero from './DropdownComponents.jsx/Hero'
import Louisa from './DropdownComponents.jsx/Louisa'
import WhatWeDo from './DropdownComponents.jsx/WhatWeDo'
import Testimonials from './DropdownComponents.jsx/Testimonials'
import WhatWeDo2 from './DropdownComponents.jsx/WhatWeDo2'
import WhatWeDo3 from './DropdownComponents.jsx/WhatWeDo3'
import ComingSoon from './DropdownComponents.jsx/ComingSoon'

export default function Header() {
  const [navbar, setNavbar] = useState(false)

  const filePickerRef = useRef()
  const heroRef = useRef()
  const louisaRef = useRef()
  const testimonialRef = useRef()

  const changeBackground = () => {
    if (window.scrollY > 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <div className="">
      {/* NAVBAR */}
      <div className={ navbar ? "flex justify-around fixed z-20 text-white items-center bg-black h-36 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-white items-center bg-black h-48 transition-all duration-200 w-full"}>
        <div className="hidden lg:flex gap-10">
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <span className='hover:opacity-80'>Home</span>
            }
          >
            <Dropdown.Header>
              <button
                onClick={() => {
                  heroRef.current.scrollIntoView({behavior: 'smooth'})
                }}
              >
                <span>Home</span>
                </button>
            </Dropdown.Header>
            <Dropdown.Header>
              <button 
                onClick={() => {
                  louisaRef.current.scrollIntoView({behavior: 'smooth'
                })
              }}
              >
                <span>Louisa</span>
              </button>
            </Dropdown.Header>
            <Dropdown label="What we do" placement="right">
              <Link to='/'>
                <Dropdown.Item>ID</Dropdown.Item>
              </Link>
              <Link to='/'>
                <Dropdown.Item>V</Dropdown.Item>
              </Link>
              <Link to='/'>
                <Dropdown.Item>RTP</Dropdown.Item>
              </Link>
            </Dropdown>
            <Dropdown.Header>
              <Link to='/'>
                <span>About us</span>
              </Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <button
                onClick={() => {
                  testimonialRef.current.scrollIntoView({behavior: 'smooth'})
                }}
              >
                <span>Testimonials</span>
              </button>
            </Dropdown.Header>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline
            label = {
              <span className='hover:opacity-80'>I.D</span>
            }
          >
            <Dropdown.Header>
              <Link to='/'>
                <span>Link here</span>
              </Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to='/'>
                <span>Another Link</span>
              </Link>
            </Dropdown.Header>
          </Dropdown>
          <Dropdown
            arrowIcon={true}
            inline
            label = {
              <span className='hover:opacity-80'>VIS</span>
            }
          >
            <Dropdown.Header>
              <Link to='/'>
                <span>Link here</span>
              </Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to='/'>
                <span>Another Link</span>
              </Link>
            </Dropdown.Header>
          </Dropdown>
        </div>
        <div className="">
          <span>Earth Angels Logo goes here</span>
        </div>
        <div className="hidden lg:flex gap-10">
          <Dropdown
            arrowIcon={false}
            inline
            label = {
              <span className='hover:opacity-80'>RTP</span>
            }
          >
            <Dropdown.Header>
              <Link to='/'>
                <span>Link here</span>
              </Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to='/'>
                <span>Another Link</span>
              </Link>
            </Dropdown.Header>
          </Dropdown>
          <Dropdown
            arrowIcon={false}
            inline
            label = {
              <span className='hover:opacity-80'>About us</span>
            }
          >
            <Dropdown.Header>
              <Link to='/'>
                <span>Link here</span>
              </Link>
            </Dropdown.Header>
            <Dropdown.Header>
              <Link to='/'>
                <span>Another Link</span>
              </Link>
            </Dropdown.Header>
          </Dropdown>
          <button className='bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center'>Contact Us</button>
          <input type="file" accept='/images/*' ref={filePickerRef} hidden/>
          <button 
            onClick={() => filePickerRef.current.click()}
            className='hover:opacity-80'
          >
            Brochure
          </button>
        </div>
      </div>
      {/* COMPONENTS */}
      <div ref={heroRef}>
        <Hero />
      </div>
      <div className="" ref={louisaRef}>
        <Louisa />
      </div>
      <div className="min-h-screen">
        <WhatWeDo />
      </div>
      <div>
        <WhatWeDo2 />
      </div>
      <div>
        <WhatWeDo3 />
      </div>
      <div>
        <ComingSoon />
      </div>
      <div className="testimonials min-h-screen" ref={testimonialRef}>
        <Testimonials />
      </div>
    </div>
  )
}

