import { Parallax } from 'react-parallax'
import Image from '../../images/house-image.jpg'

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
        <Parallax blur={2} strength={600} bgImage={Image} className='w-full'>
            <div className="h-96 max-w-xl ml-auto mr-96 mt-40 relative text-stone-100 animate">
                <h1 className='text-4xl font-bold mx-auto'>HELP WITH YOUR FINANCE<br></br> 
                STRATEGY
                <hr
                    style={{
                    background: 'orange',
                    color: 'orange',
                    borderColor: 'orange',
                    height: '2px',
                    width: '60px',
                    position: 'absolute',
                    top: '25%',
                    left: '5%',
                    transform: 'translate(-50%, -50%)'
                    }}
                /></h1>
                <p className='mt-8 leading-relaxed'>Together with our partners, and depending on your location, our scope can also include assistance with your finance strategy by providing support with submitting Funding applications (including EU backed CCDR funding with less than 40% Grant). ‘Free money’ that makes our solutions incredible value for money and ensuring a quick return on investment.</p>
            </div>
        </Parallax>
    </div>
  )
}
