import Image1 from '../../images/mirrored-building-visoid.jpeg'
import Image2 from '../../images/view-4-night.png'
import ProfileImage from '../../images/louisa-image.jpeg'

export default function Louisa() {

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
    <div className='h-fit flex flex-wrap justify-center bg-zinc-800 text-stone-300'>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-20 max-w-6xl mb-10 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
        <div className="flex-1 mt-12">
          <p className='text-center leading-loose'>”We are an experienced Design Agency specialising in affordable, sustainable, design based on 'Wellness Real Estate' principles.<br></br><br></br>

          Using this approach we create beautiful spaces that prioritise environmental stewardship and health and comfort, using passive design techniques and technologies, non-toxic and sustainable materials and energy efficiency.<br></br><br></br>

          Earth Angels designs are future proof, luxurious and cost effective.”</p>
          <div className="flex flex-wrap justify-center mt-10 items-center gap-10">
            <img src={ProfileImage} alt="img-here" className='w-32 h-32 rounded-full object-contain'/>
            <h1 className='font-semibold text-xl text-center'>Louisa Bamford-Payne - Founder & CEO</h1>
          </div>
        </div>
        <div className="flex-1 flex-col mt-10">
          <img src={Image1} alt="image" className='h-48 w-80 mx-auto rounded-md shadow-md hover:scale-105 transition duration-300'/>
          <img src={Image2} alt="image" className='h-48 w-80 mt-10 mx-auto rounded-md shadow-md hover:scale-105 transition duration-300'/>
        </div>
      </div>
    </div>
  )
}
