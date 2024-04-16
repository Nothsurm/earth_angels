import React from 'react'
import Header from '../components/Header'
import { Parallax } from 'react-parallax'
import Image from '../images/mockup-office-sign.jpg'

export default function AboutUs() {
  const myStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed'
  }
  return (
    <div>
        <Header />
        {/* SECTION 1 */}
        <Parallax blur={0} strength={600} bgImage={Image} bgImageStyle={{ marginTop: '-200px'}}>
          <div className="w-full h-[600px] sm:min-h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className='text-6xl uppercase font-bold text-center mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md title-1'>
              Working to create a future for our children
            </h1>
          </div>
        </Parallax>

        {/* SECTION 2 */}
        <div className="text-stone-100" style={myStyle}>
            <div className="h-fit flex flex-col gap-20 max-w-2xl ml-2 mr-2 lg:ml-40">
              <h1 className='text-6xl font-semibold mt-20'>About Us</h1>
              <div className="leading-loose font-semibold flex flex-col gap-10 mb-20">
                <p className='mt-20'>As our name suggests, our goal is to be environmentally friendly and socially responsible, while still offering affordable design options that are stylish, luxurious, and indulgent.</p>
                <p>We also champion a home design that not only saves energy but also provides year-round thermal comfort with low-cost heating and cooling systems that can be easily controlled. This energy efficiency can be enhanced by the use of renewable energy sources and battery storage.</p>
                <h1>In addition, we seek to encourage the prioritisation of healthy living with fresh air circulation and the use of non-toxic materials, sourced from companies that share our commitment to sustainability.</h1>
                <p>"We believe that, by embracing these principles, we can create a better future for ourselves and future generations, while still enjoying the comfort and elegance we deserve."</p>
                <img src={Image} alt="" className='w-full rounded-md hover:scale-105 transition duration-300'/>
                <h1 className='text-3xl font-bold'>Design is in our DNA</h1>
                <p>The founder of Earth Angels, Louisa, is a commercially astute Design professional.</p>
                <p>Louisa owned and operated a boutique Interior Design company in Dubai for 12+ years specialising in upmarket private residence projects from refurbishments to Interiors and new builds. During this time she also worked closely with Architects and Consultants in Dubai, the UK and Portugal on leading Concept Design work for Hospitality projects, specifically new Hospitality and Resort developments.</p>
                <p>We are now based in Portugal but continue to work on projects Internationally as well as across Portugal.</p>
                <p>The founder of Earth Angels, Louisa, is a commercially astute Design professional.</p>
                <img src={Image} alt="" className='w-full rounded-md hover:scale-105 transition duration-300'/>
                <p>Our COO, Jeremy, has a background of Senior Management in 5 star Hospitality before becoming interested in the  Management of the development lifecycle of new projects with a focus on project planning, space programming and design team management.</p>
                <p>Jeremy has also worked with renown International Architects, RSO, as a Project Principal, Hospitality Programming and Planning Lead.</p>
                <p>Jeremy was COO of a Future Build Environment materials R&D company in the UK before joining Earth Angels.</p>
              </div>
            </div>
        </div>
    </div>
  )
}
