import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import Image from '../images/earth-angels-logo.png'
import { Modal, Button } from "flowbite-react";
import ModalContent from '../components/ModalContent'

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

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
    <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-44 transition-all duration-200 w-full bg-opacity-80" : "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-56 transition-all duration-200 w-full"}>
      <div className="hidden lg:flex text-sm 2xl:text-base gap-10 ml-2 mr-2">
        <Link to='/' className='hover:opacity-80'>
          Home
        </Link>
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
      <div className="">
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
        <Link to='/contact' className='hover:opacity-80'>
          <button className='px-4 py-2 rounded-lg font-semibold transition ease-in-out delay-50 flex items-center text-black hover:text-white bg-gradient-to-tr from-zinc-200 from-10% via-zinc-400 via-50% to-zinc-600 to-90%'>
            Contact Us
          </button>
        </Link>
        <button 
            onClick={() => setOpenModal(true)}
            className='self-center hover:opacity-80 flex items-center gap-1'
          >
            <RiLockPasswordFill />
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
            <button className='px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 transition ease-in-out delay-50 text-black hover:text-white bg-gradient-to-tr from-zinc-200 from-10% via-zinc-400 via-50% to-zinc-600 to-90%'>
              Contact Us
            </button>
          </Link>
          <button 
            onClick={() => setOpenModal(true)}
            className='self-center hover:opacity-80 flex items-center gap-1'
          >
            <RiLockPasswordFill />
            Brochure
          </button>
        </div>
      </div>
    )}

    {/* MODAL */}
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="sm">
        <ModalContent />
      </Modal>
    </>
  )
}
