import { Parallax } from 'react-parallax'
import Image from '../../images/Jaccuzi-nature.png'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";

export default function ComingSoon() {

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
    <div className='mt-32 text-stone-100'>
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="h-fit flex flex-col mx-auto lg:ml-auto lg:mr-96 mt-32 mb-32 max-w-xl animate">
                <h1 className='text-4xl font-bold relative uppercase'>HELP WITH YOUR FINANCE STRATEGY
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
                <p className='leading-relaxed mt-10'>Together with our partners, and depending on your location, our scope can also include assistance with your finance strategy by providing support with submitting Funding applications, including EU backed CCDR funding with significant Grants as high as 60% of your costs. ‘Free money’ that makes our solutions incredible value for money and ensuring a quick return on investment.</p>
                <Link to='/contact'>
                    <button className='mt-8 uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 text-zinc-700'>Contact Us<MdEmail /></button>
                </Link>
            </div>
        </Parallax>
    </div>
  )
}