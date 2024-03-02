import { Button, Dropdown } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

export default function Header() {
  const [navbar, setNavbar] = useState(false)

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
    <div className={ navbar ? "flex justify-around fixed z-20 text-stone-300 items-center bg-zinc-700 h-36 transition-all duration-200 w-full" : "flex justify-around fixed z-20 text-stone-300 items-center bg-zinc-700 h-48 transition-all duration-200 w-full"}>
      <div className="hidden lg:flex gap-10">
        <Link to='/' className='hover:opacity-80'>
          <span>Home</span>
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
  )
}
