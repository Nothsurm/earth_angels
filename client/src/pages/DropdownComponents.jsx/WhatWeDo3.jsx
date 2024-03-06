import { Link } from 'react-router-dom';
import Image from '../../images/lodge-render.jpeg'
import { FaArrowRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";


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
    <div className='flex flex-col md:flex-row justify-between max-w-6xl mx-auto animate gap-10'>
        <div className="flex-1 flex-col text-stone-700 mt-20">
            <h1 className='font-bold text-3xl relative'>WE DESIGN & BUILD USING ULTRA-SUSTAINABLE SOLUTIONS
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
                className='mt-6'
            /></h1>
            <p className='mt-14 leading-relaxed'>We champion modern methods of manufacture and build. This technique is the Future, a significant and measurable sustainable approach.<br></br><br></br>

            We can rehabilitate buildings, build new or even combine the two. The core structure is precision manufactured and is quick to be assembled onsite, reducing their environmental & operational impact.</p>
            <Link to='/commercial-projects'>
                <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 mt-20'>Learn More<FaArrowRight /></button>
            </Link>
        </div>
        <div className="flex-1 mt-0 md:mt-10">
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl border shadow-xl">
                    <CardItem translateZ="100" className="w-full">
                        <img
                        src={Image}
                        height="1000"
                        width="1000"
                        className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    </div>
  )
}
