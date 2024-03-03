import Image from '../../images/house-image.jpg'
import { FaArrowRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";

export default function WhatWeDo() {

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
    <div className='relative animate'>
      <h1 className='flex justify-center text-4xl font-bold mt-20'>WHAT WE DO...
        <hr
            style={{
            background: 'orange',
            color: 'orange',
            borderColor: 'orange',
            height: '2px',
            width: '80px',
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }}
          /></h1>
        <div className="flex justify-between gap-10 max-w-6xl mt-24 text-center mx-auto">
            <div className="flex-1 flex-col text-stone-700">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={Image}
                      height="1000"
                      width="1000"
                      className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <h2 className='font-bold text-xl'>Professional 'Turn-Key' Design</h2>
              <p className='leading-loose p-6'>We work closely with our clients to design & deliver bespoke solutions that are unique, energy efficient, eco & sustainable and set within nature.
              We are focused on delivering a carefully considered luxurious experience to budget.
              We offer everything from Interior Design Concepts, Ultra Sustainable Build Solutions & full Sourcing of everything required.</p>
              <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>Learn More<FaArrowRight /></button>
            </div>
            <div className="flex-1 text-stone-700">
              <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
                    <CardItem translateZ="100" className="w-full">
                      <img
                        src={Image}
                        height="1000"
                        width="1000"
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <h2 className='font-bold text-xl'>Sustainability in Action - Hospitality support (Tourism Projects)</h2>
                <p className='leading-loose p-6'>Every Customer's business is unique and we tailor our support, which can include Hospitality Operations planning & standards, Marketing & Revenue Management planning, to assist with every aspect of integrating a new business opportunity that complements existing activities.</p>
                <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>Learn More<FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}
