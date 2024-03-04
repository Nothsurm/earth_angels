import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function FooterSection() {
  return (
    <footer className='w-full bg-zinc-700 text-stone-300'>
      <div className="flex flex-wrap justify-around">
        <div className="mt-4">
          <h1>Earth Angels logo goes here</h1>
        </div>
        <div className="flex flex-row flex-wrap gap-20 mt-4">
          <div className="flex flex-col gap-2">
            <h1 className='font-bold text-lg'>About</h1>
            <span>
              <Link to='/' className='hover:opacity-80'>
                About Us
              </Link>
            </span>
            <span>
              <Link to='/' className='hover:opacity-80'>
                What We Do
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className='font-bold text-lg'>Follow Us</h1>
            <span>
              <Link to='/' className='hover:opacity-80'>
                Facebook
              </Link>
            </span>
            <span>
              <Link to='/' className='hover:opacity-80'>
                Instagram
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className='font-bold text-lg'>Legal</h1>
            <span>
              <Link to='/' className='hover:opacity-80'>
                Privacy Policy
              </Link>
            </span>
            <span>
              <Link to='/' className='hover:opacity-80'>
                Terms & Conditions
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="flex flex-wrap justify-around max-w-3xl h-10 mx-auto items-center">
        <div className="">
          <Footer.Copyright href="#" by="Earth Angels™" year={2024} className='text-stone-300'/>
        </div>
        <div className="flex flex-row gap-6">
          <Footer.Icon href="#" icon={BsFacebook} className='text-stone-300 hover:text-orange-400 transition ease-in-out delay-50'/>
          <Footer.Icon href="#" icon={BsInstagram} className='text-stone-300 hover:text-orange-400 transition ease-in-out delay-50'/>
          <Footer.Icon href="#" icon={BsTwitter} className='text-stone-300 hover:text-orange-400 transition ease-in-out delay-50'/>
          <Footer.Icon href="#" icon={BsGithub} className='text-stone-300 hover:text-orange-400 transition ease-in-out delay-50'/>
          <Footer.Icon href="#" icon={BsDribbble} className='text-stone-300 hover:text-orange-400 transition ease-in-out delay-50'/>
        </div>
      </div>
    </footer>
  )
}
