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
    <div className='text-stone-100'>
        <Parallax blur={1} strength={600} bgImage={Image}>
            <div className="h-fit flex flex-col bg-zinc-700 bg-opacity-75 p-2 rounded-md mx-auto lg:ml-auto lg:mr-96 mt-20 mb-20 max-w-xl mr-2 ml-2 sm:ml-0 sm:mr-0 hover:scale-110 animate">
                <h1 className='text-4xl font-bold uppercase'>HELP WITH YOUR FINANCE STRATEGY</h1>
                <p className='leading-relaxed mt-10'>Together with our partners, and depending on your location, our scope can also include assistance with your finance strategy by providing support with submitting Funding applications, including EU backed CCDR funding with significant Grants as high as 60% of your costs. ‘Free money’ that makes our solutions incredible value for money and ensuring a quick return on investment.</p>
                  <Link to='/contact' className='mt-8 uppercase bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 transition ease-in-out delay-50 flex max-w-40 items-center gap-2 hover:text-white'>
                    Contact Us<MdEmail />
                  </Link>
            </div>
        </Parallax>
    </div>
  )
}
