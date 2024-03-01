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
            <Link to='/'>
              <span>Home</span>
            </Link>
          </Dropdown.Header>
          <Dropdown.Header>
            <Link to='/louisa'>
              <span>Louisa</span>
            </Link>
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
            <Link to='/'>
              <span>Testimonials</span>
            </Link>
          </Dropdown.Header>
          <Dropdown.Header>
            <Link to='/'>
              <span>Footer</span>
            </Link>
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
        <Button>Contact Us</Button>
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
