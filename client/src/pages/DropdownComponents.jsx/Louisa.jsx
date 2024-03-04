import Image from '../../images/house-image.jpg'

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
          <h1 className='font-semibold text-xl text-center relative'>"We offer a modern sustainable design approach, incorporating 'wellness architecture' principles and state-of-the-art methods of building.<br></br><br></br>

          Using this approach we create living spaces that prioritise environmental stewardship, health and comfort through passive design, non-toxic and recycled materials and energy efficiency."
          <hr
            style={{
            background: 'orange',
            color: 'orange',
            borderColor: 'orange',
            height: '2px',
            width: '60px',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }}
            className='mt-6'
          /></h1>
          <div className="flex flex-wrap justify-center mt-10 items-center gap-10">
            <img src="" alt="img-here" className='w-28 h-28 rounded-full border'/>
            <h1 className='font-semibold text-xl text-center'>Louisa Payne - Founder & CEO</h1>
          </div>
        </div>
        <div className="flex-1 flex-col gap-10 mt-10">
          <img src={Image} alt="image" className='h-48 w-80 mx-auto rounded-md shadow-md'/>
          <img src={Image} alt="image" className='h-48 w-80 mt-2 mx-auto rounded-md shadow-md'/>
        </div>
      </div>
    </div>
  )
}
