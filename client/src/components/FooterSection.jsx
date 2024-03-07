import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Image from '../images/earth-angels-logo.png'

export default function FooterSection() {
  return (
    <footer className='w-full bg-zinc-700 text-stone-300'>
      <div className="flex flex-wrap mx-auto justify-around mr-2 ml-2 sm:ml-0 sm:mr-0">
        <div className="mt-4">
          <Link to='/'>
            <img src={Image} alt="" className='w-[200px]'/>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap gap-20 items-center">
          <div className="flex flex-col gap-8">
            <Link to='/' className='hover:opacity-80'>
              Home
            </Link>
            <Link to='/commercial-projects' className='hover:opacity-80'>
              Commercial Projects
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <Link to='/design' className='hover:opacity-80'>
              Design
            </Link>
            <Link to='/contact' className='hover:opacity-80'>
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-8">
            <Link to='/visualisation' className='hover:opacity-80'>
              Visualisations
            </Link>
            <Link to='/' className='hover:opacity-80'>
              Brochures
            </Link>
          </div>
          <div className="flex flex-col gap-8">
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
