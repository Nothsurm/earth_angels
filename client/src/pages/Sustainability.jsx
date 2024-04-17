import React from 'react'
import Header from '../components/Header'
import { Parallax } from 'react-parallax'
import Image from '../images/dolphins.png'
import Image1 from '../images/Pagoda.png'
import Image2 from '../images/pool.jpeg'
import backgroundImage from '../images/2-bed-lodge.jpeg'
import Video from '../videos/SustainableLodge.mp4'
import GlobalLogo from '../images/global-wellness-institute-logo.jpeg'

export default function Sustainability() {
  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed'
  }
  return (
    <div>
        <Header />
        {/* SECTION 1 */}
        <Parallax blur={0} strength={600} bgImage={Image} bgImageStyle={{ marginTop: '-200px' }}>
          <div className="w-full h-[600px] sm:min-h-screen flex flex-col gap-4 justify-center items-center">
            <h1 className='text-6xl uppercase font-bold text-center mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md title-1'>
              Sustainability
            </h1>
            <p className='text-4xl font-bold text-center text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md title-2'>is about creating a better future</p>
            <p className='text-4xl font-bold text-center text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md title-3'>for Individuals, for Communities & for the Environment</p>
          </div>
        </Parallax>

        {/* SECTION 2 */}
        <div className="text-stone-100" style={myStyle}>
            <div className="h-fit flex flex-col gap-20 lg:ml-auto text-right max-w-2xl ml-2 mr-2 lg:mr-40">
              <h1 className='text-4xl font-semibold mt-20'>Dedicated to Sustainable Solutions,</h1>
              <p className='text-xl leading-loose font-semibold'>Earth Angels supports developers, real estate agencies, home builders, and homeowners in the shared goal of promoting sustainable communities. Above all, we are dedicated to creating a sustainable future by supporting people, strengthening communities, and protecting the environment on which we all depend.</p>
              <p className='text-xl leading-loose font-semibold'>We have detailed knowledge and experience of sustainability in the Built Environment and we champion the design movement known as 'Wellness Architecture' (aka 'Wellness Design' or 'Wellness Real Estate').</p>
              <div className="bg-zinc-700 bg-opacity-75 p-2 rounded-md text-2xl text-center flex flex-col gap-10 mb-20">
                <h1 className='font-bold'>Wellness Architecture & Design</h1>
                <p className='text-xl font-semibold'>The practice of architecture and design that relies on the art and science of creating built environments with socially concious systems and materials to promote the harmonious balance between physical, emotional, cognitive and spiritual wellbeing while regenerating the natural environment.</p>
                <p className='text-xl font-semibold'>Human health, wellbeing and comfort are key design considerations that augment a foundation rooted in sustainable and regenerative design practices.</p>
                <img src={GlobalLogo} alt="" className='w-[200px] mx-auto'/>
              </div>
            </div>
        </div>

        {/* SECTION 3 */}
        <div className="w-full min-h-screen flex justify-center">
            <video autoPlay muted loop className='w-full'>
                <source src={Video} type='video/mp4'/>
            </video>
        </div>

        {/* SECTION 4 */}
        <div className="text-stone-100" style={myStyle}>
          <div className="h-fit flex flex-col gap-20 max-w-2xl ml-2 mr-2 lg:ml-40">
            <h1 className='text-4xl font-semibold mt-20'>Our Approach to Sustainability</h1>
            <div className="leading-loose text-xl  font-semibold flex flex-col gap-20 mb-20">
              <p>Earth Angels is a full design & visualisation studio with sustainability experience that includes support of the process of development projects.</p>
              <p>Our philosophy of design includes special emphasis on 'inside out' living and thermal comfort; being able to enjoy internal & external spaces in Winter and Summer. A Home for all Seasons, no matter the location.</p>
              <img src={Image1} alt="" className='w-[300px] mx-auto rounded-md hover:scale-105 transition duration-300' />
              <p>We have knowledge of new technologies in mechanical ventilation and heat recovery, ultra low energy heating and passive design principles which influences our work and, whilst sometimes not fully in our scope, will be shared.</p>
              <p>We consider that the integration of Smart home technology and responsive lighting is both good for the environment and adds to the comfort and safety of occupants.</p>
              <p>Another example; combining 'invisible' solar panels on a pergola roof to provide pool heating and FAR Infra-red heating of outside spaces, enabling year round enjoyment with zero environmental impact or cost.  </p>
              <img src={Image2} alt="" className='w-full rounded-md hover:scale-105 transition duration-300' />
              <p>Our team is led by a passionate career Design professional with a design style that focuses on quality and elegance down to the smallest detail.</p>
              <p>She was a Design Director in her 20s which gave her early and extensive International experience in procurement and the management of a diverse  supply chain from China, Turkey and Europe (Portugal and Italy in particular). A foundation that is as relevant today as it was then.</p>
              <p>We design with real life experiences & practicality in mind, carefully considering Wellness Design principles and human emotions. Our goal is to create comfortable, elegant environments that will foster happy memories for years to come.</p>
              <img src={Image} alt="" className='w-full rounded-md hover:scale-105 transition duration-300' />
              <p>We source sustainable Furniture Fixtures & Equipment to budget and always without sacrificing comfort, style or elegance.</p>
              <p>We offer a bespoke Interior Design service for clients who may want a unique design look that integrates their own furniture & loved items. After all, reducing waste & recycling  is at the heart of sustainability in practice.</p>
              <p className='text-2xl'>Underlining it all, we believe in Sustainability in Action and we we are here to help you make the right choices for all our futures.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
