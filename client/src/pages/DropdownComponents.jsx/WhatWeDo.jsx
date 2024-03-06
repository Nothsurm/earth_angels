import Image1 from '../../images/general-arrangement.jpeg'
import Image2 from '../../images/wine-tourism.png'
import { FaArrowRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";
import { Link } from 'react-router-dom';

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
    <div className='animate'>
      <h1 className='flex justify-center text-4xl font-bold mt-20 relative'>WHAT WE DO...
        <hr
            style={{
            background: 'orange',
            color: 'orange',
            borderColor: 'orange',
            height: '2px',
            width: '80px',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }}
            className='mt-10'
          /></h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-10 max-w-6xl mt-24 text-center mx-auto">
            <div className="flex-1 flex-col text-stone-700 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl border shadow-xl">
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={Image1}
                      height="1000"
                      width="1000"
                      className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <h2 className='font-bold text-xl animate'>Professional Design</h2>
              <p className='leading-loose p-6 animate mt-4'>We work closely with our clients to design & deliver bespoke solutions that are unique, energy efficient, eco & sustainable and set within nature. We are focused on delivering a carefully considered luxurious experience to budget. We offer everything from Interior Design Concepts, Ultra Sustainable Build Solutions & full Sourcing of everything required.</p>
              <Link to='/design' className='animate'>
                <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mx-auto mt-4'>Learn More<FaArrowRight /></button>
              </Link>
            </div>
            <div className="flex-1 flex-col text-stone-700 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
              <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl border shadow-xl">
                    <CardItem translateZ="100" className="w-full">
                      <img
                        src={Image2}
                        height="1000"
                        width="1000"
                        className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <h2 className='font-bold text-xl animate'>Sustainability in Action - Support for Commercial Projects</h2>
                <p className='leading-loose p-6 animate'>Every enterprise has unique characteristics. We tailor our support, which can include; Photo-realistic visualisations and videos, the provision of a Show Suite to drive pre-build sales, advisory services related to Tourism hospitality operational planning and standards, development of marketing and revenue management strategies, as well as assistance with every aspect of launching a new initiative that will complement existing operations and boost profits.</p>
                <Link to='/commercial-projects' className='animate'>
                  <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>Learn More<FaArrowRight /></button>
                </Link>
            </div>
        </div>
    </div>
  )
}
