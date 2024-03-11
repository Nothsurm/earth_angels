import Image1 from '../../images/general-arrangement.jpeg';
import Image2 from '../../images/lodge-bedroom.jpg';
import Image3 from '../../images/wine-experience.png';
import Image4 from '../../images/concept-lodge.jpeg';
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
      <h1 className='flex justify-center text-4xl font-bold mt-20'>WHAT WE DO...</h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-10 max-w-6xl mt-10 text-center mx-auto">
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
              <p className='leading-loose p-6 animate mt-4'>We work closely with our clients to design & deliver bespoke solutions that are unique, energy efficient, eco & sustainable and set within nature. We are focused on delivering a carefully considered luxurious experience to budget.<br></br><br></br>
              
              We offer everything from Interior Design Concepts, Ultra Sustainable Build Solutions & full Sourcing of everything required.</p>
              <button className='animate mt-8'>
                <Link to='/design' className='uppercase bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                  Learn More<FaArrowRight />
                </Link>
              </button>
            </div>
            <div className="flex-1 flex-col text-stone-700 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
              <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl border shadow-xl">
                    <CardItem translateZ="100" className="w-full">
                      <img
                        src={Image2}
                        height="1000"
                        width="1000"
                        className="h-[20rem] w-full object-fit rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <h2 className='font-bold text-xl animate'>Design Visualisations</h2>
                <p className='leading-loose p-6 animate'>Design visualisations can transform a space by helping you see options before you decide on a final design, to make informed decisions that maximise functionality, comfort and style.<br></br><br></br>
                If you are looking to sell your property we can assist you in achieving a quicker sale at the desired price. Our expertise lies in visualising a fresh and attractive appearance enabling potential buyers to envision your property's potential.</p>
                <button className='animate mt-4'>
                  <Link to='/visualisation' className='uppercase bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                    Learn More<FaArrowRight />
                  </Link>
              </button>
            </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-between gap-10 max-w-6xl mt-10 text-center mx-auto">
            <div className="flex-1 flex-col text-stone-700 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl border shadow-xl">
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src={Image3}
                      height="1000"
                      width="1000"
                      className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <h2 className='font-bold text-xl animate'>Commercial Projects</h2>
              <p className='leading-loose p-6 animate'>Every business has unique characteristics. We tailor our support, which can include; Photo-realistic visualisations and videos, the provision of a Show Suite to drive pre-build sales, advisory services related to Tourism hospitality operational planning and standards, development of marketing and revenue management strategies, as well as assistance with every aspect of launching a new initiative that will complement existing operations and boost profits.</p>
              <button className='animate mt-4'>
                <Link to='/commercial-projects' className='uppercase bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                  Learn More<FaArrowRight />
                </Link>
              </button>
            </div>
            <div className="flex-1 flex-col text-stone-700 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
              <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl border shadow-xl">
                    <CardItem translateZ="100" className="w-full">
                      <img
                        src={Image4}
                        height="1000"
                        width="1000"
                        className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
                <h2 className='font-bold text-xl animate'>Sustainable Solutions</h2>
                <p className='leading-loose p-6 animate'>We champion modern methods of manufacture and build. This technique is the Future, a significant and measurable sustainable approach.<br></br><br></br>

                We can rehabilitate buildings, build new or even combine the two. The core structure is precision manufactured and is quick to be assembled onsite, reducing their environmental & operational impact.</p>
                <button className='animate mt-4'>
                  <Link to='/sustainability' className='uppercase bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                    Learn More<FaArrowRight />
                  </Link>
              </button>
            </div>
        </div>
    </div>
  )
}
