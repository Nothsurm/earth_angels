import { Parallax } from 'react-parallax'
import Image from '../../images/view-4-night.png'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function WhatWeDo2() {

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
    <div className='flex justify-center'>
        <Parallax blur={4} strength={600} bgImage={Image} className='w-full'>
            <div className="h-96 max-w-xl mx-auto lg:ml-auto lg:mr-96 mt-20 mb-10 text-stone-100 animate">
                <h1 className='text-4xl font-bold mx-auto relative uppercase'>Visualisations of Designs, Re-imagined
                <hr
                    style={{
                    background: 'orange',
                    color: 'orange',
                    borderColor: 'orange',
                    height: '2px',
                    width: '60px',
                    position: 'absolute',
                    top: '100%',
                    left: '6%',
                    transform: 'translate(-50%, -50%)'
                    }}
                    className='mt-4'
                /></h1>
                <p className='mt-8 leading-relaxed text-sm sm:text-base'>Interior design visualisations can transform a space by helping you see options before you decide on a final design, to make informed decisions that maximise functionality, comfort and style.<br></br><br></br>
                
                If you are looking to sell your property we can assist you in achieving a quicker sale at the desired price. Our expertise lies in visualising a fresh and attractive appearance enabling potential buyers to envision your property's potential.</p>
                <Link to='/visualisation'>
                    <button className='mt-8 uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 text-zinc-700'>Learn More<FaArrowRight /></button>
                </Link>
            </div>
        </Parallax>
    </div>
  )
}
