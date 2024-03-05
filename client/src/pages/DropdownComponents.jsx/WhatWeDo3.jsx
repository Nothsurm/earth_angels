import { Link } from 'react-router-dom';
import Image from '../../images/luxury-lodge.jpeg'
import { FaArrowRight } from "react-icons/fa";


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
            <h1 className='font-bold text-3xl relative'>WE DESIGN & BUILD ULTRA-SUSTAINABLE ACCOMMODATION SOLUTIONS
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
            <p className='mt-14 leading-relaxed'>We champion modern methods of manufacture and build. This technique is the Future, a significant and measurable sustainable approach.<br></br><br></br>

            We can rehabilitate buildings, build new or even combine the two. The core structure is precision manufactured and is quick to be assembled onsite, reducing their environmental & operational impact.</p>
            <Link to='/tourism'>
                <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mt-20'>Learn More<FaArrowRight /></button>
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
