import { Dropdown } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const filePickerRef = useRef()

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
    <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-36 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-stone-300 items-center shadow-xl bg-zinc-700 h-48 transition-all duration-200 w-full"}>
      <div className="hidden lg:flex gap-10">
        <Link to='/' className='hover:opacity-80'>
          Home
        </Link>
        <Link to='/design' className='hover:opacity-80'>
          Design
        </Link>
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
      {/* MOBILE */}
      <div className="">
        <span>Earth Angels Logo goes here</span>
      </div>
      <button 
        className="text-3xl flex lg:hidden"
        onClick={toggleNavbar}
      >
        {!isOpen ? <GiHamburgerMenu /> : <></>}
      </button>
      {/**/}
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
          <Link to='/' onClick={toggleNavbar}>
            <span className='hover:opacity-80'>VIS</span>
          </Link>
          <Link to='/' onClick={toggleNavbar}>
            <span className='hover:opacity-80'>RTP</span>
          </Link>
          <Link to='/' onClick={toggleNavbar}>
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
  )
}
