import { Link } from 'react-router-dom';
import Image from '../../images/house-image.jpg'
import { MdEmail } from "react-icons/md";

export default function WhatWeDo3() {

    const animateSections = document.querySelectorAll('.animate')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          entry.target.classList.toggle('show', entry.isIntersecting)
      })
    }, {
        rootMargin: '-50px',
    })
  
    animateSections.forEach(section => {
        observer.observe(section)
    })

  return (
    <div className='flex flex-col md:flex-row justify-between max-w-6xl mx-auto mt-32 animate'>
        <div className="flex-1 flex-col text-stone-700">
            <h1 className='font-bold text-3xl relative'>WE SUPPLY ULTRA-SUSTAINABLE ACCOMMODATION SOLUTIONS
            <hr
                style={{
                background: 'orange',
                color: 'orange',
                borderColor: 'orange',
                height: '2px',
                width: '60px',
                position: 'absolute',
                top: '100%',
                left: '8%',
                transform: 'translate(-50%, -50%)'
                }}
                className='mt-6'
            /></h1>
            <p className='mt-14 leading-relaxed'>We champion modern methods of manufacture and build as it offers a significant and measurable sustainable approach.<br></br><br></br>

            Our buildings are precision manufactured and are quick to be assembled onsite, reducing our environmental impact and any potential operational impact on our clients’ business.</p>
            <Link to='/contact'>
                <button className='bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mt-20'>Contact Us<MdEmail /></button>
            </Link>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
            <img src={Image} alt="image" className='h-64 w-80 mx-auto rounded-md shadow-lg hover:scale-105 transition duration-300'/>
            <img src={Image} alt="image" className='h-64 w-80 mx-auto mt-6 rounded-md shadow-lg hover:scale-105 transition duration-300'/>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
            <img src={Image} alt="image" className='h-80 w-80 mx-auto rounded-md shadow-lg hover:scale-105 transition duration-300'/>
            <img src={Image} alt="image" className='h-36 w-80 mx-auto mt-6 rounded-md shadow-lg hover:scale-105 transition duration-300'/>
        </div>
    </div>
  )
}
