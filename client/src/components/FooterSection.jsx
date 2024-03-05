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
          <div className="flex flex-col gap-4">
            <Link to='/' className='hover:opacity-80'>
              Home
            </Link>
            <Link to='/tourism' className='hover:opacity-80'>
              Tourism
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to='/design' className='hover:opacity-80'>
              Design
            </Link>
            <Link to='/contact' className='hover:opacity-80'>
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to='/visualisation' className='hover:opacity-80'>
              Visualisations
            </Link>
            <Link to='/' className='hover:opacity-80'>
              Brochures
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link to='/privacy-policy' className='hover:opacity-80'>
              Privacy Policy
            </Link>
            <Link to='/terms-conditions' className='hover:opacity-80'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className="flex flex-wrap justify-around max-w-3xl h-10 mx-auto items-center">
        <div className="">
          <Footer.Copyright href="#" by="FemalEvolution Unipessoal Lda & Earth Angels Retreats Ltd, trading as Earth Angels™" year={2024} className='text-stone-300'/>
        </div>
      </div>
    </footer>
  )
}
