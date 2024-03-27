import Header from '../components/Header'
import LivingRoomImage from '../images/design-livingroom.jpg'
import BedroomImage from '../images/img-carousel-5.jpg'
import HeroImage from '../images/bathroom-visualisations.jpeg'
import BeforeImage from '../images/before-image.jpeg'
import AfterImage from '../images/after-image.jpeg'
import Image from '../images/house-image.jpg'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../components/3dCard";

export default function Visualisation() {
  return (
    <div>
      {/* SECTION 1 */}
        <Header />
        <Parallax blur={0} strength={600} bgImage={HeroImage} bgImageStyle={{ width: "100%", height:'100%'}}>
            <div className="w-full h-[600px] md:min-h-screen flex flex-col gap-10 justify-center items-center">
                <h1 className='text-4xl md:text-6xl font-bold text-center mt-60 sm:mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md'>DESIGNS - RE-IMAGINED</h1>
                <div className="flex flex-row gap-2 text-white">
                  <p className='title-1 uppercase font-semibold text-xl md:text-2xl bg-zinc-700 bg-opacity-40 p-2 rounded-md'>Evolve your space</p>
                  <p className='title-2 uppercase font-semibold text-xl md:text-2xl bg-zinc-700 bg-opacity-40 p-2 rounded-md'> elevate your style</p>
                </div>
            </div>
        </Parallax>
        <div className="flex flex-col flex-wrap sm:flex-row max-w-6xl mx-auto justify-around">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[22rem] rounded-xl border shadow-xl">
              <CardItem translateZ="100" className="w-full">
                <img
                  src={LivingRoomImage}
                  height="1000"
                  width="1000"
                  className="h-[22rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[22rem] rounded-xl border shadow-xl">
              <CardItem translateZ="100" className="w-full">
                <img
                  src={BedroomImage}
                  height="1000"
                  width="1000"
                  className="h-[22rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>

        {/* SECTION 2 */}
        <div className="flex flex-col items-center text-center justify-center gap-6 max-w-3xl mx-auto font-semibold mb-20">
          <h1 className='text-4xl'>Maximise the potential of your property with professional interior design visualisations</h1>
          <p className='mt-6'>We will assist you in developing a design that truly reflects your vision and lifestyle through an immersive and informative process.</p>
          <p>Interior design visualisations can transform a space by helping you see options before you decide on a final design, to make informed decisions that maximise functionality, comfort and style.</p>
          <p>We belive in Sustainability in Action and will help you make the right choices for all our futures.</p>
          <button className='relative'>
            <Link to='/contact' className='uppercase bg-zinc-400 bg-opacity-50 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
              Contact Us<FaArrowRight />
            </Link>
            <hr
              style={{
              background: 'gray',
              color: 'gray',
              borderColor: 'gray',
              height: '8px',
              width: '240px',
              position: 'absolute',
              top: '80%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
              }}
              className='mt-10'
            />
          </button>
        </div>

        {/* SECTION 3 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex">
            <img src={Image} alt="" className='mt-10 max-w-6xl mx-auto w-[16rem] sm:w-[50rem] h-auto sm:h-[30rem] rounded-xl shadow-xl hover:scale-105 transition duration-300'/>
          </div>
          <div className="flex flex-col md:flex-row mt-10 max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col gap-2 items-center mt-10">
              <img src={BeforeImage} alt="" className='w-full h-[18rem] mt-20 rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
              <p className='font-bold uppercase'>Before</p>
            </div>
            <div className="flex-1 flex-col items-center text-center ml-10 mr-10">
              <h1 className='text-3xl font-bold mt-10 sm:mt-0'>Are you struggling to sell your property?</h1>
              <p className='mt-6 font-semibold'>Don't worry, we can assist you in achieving a quicker sale at the desired price. Our expertise lies in visualising a fresh and attractive appearance for tired or poorly presented properties, enabling potential buyers to envision the property's potential.</p><br></br>
              <p className='font-semibold'>We create stunning visualisations using a design look and layout that appeals to a wide range of buyers, helping your attract more interested buyers and increasing your chances of a successful sale.</p><br></br>
              <p className='font-semibold'>So why wait? Let us transform your property into a buyer's dream and help you achieve a sale.</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 items-center mt-10">
              <img src={AfterImage} alt="" className='w-full h-[18rem] mt-20 rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
              <p className='font-bold uppercase'>After</p>
            </div>
          </div>
          <div className="flex justify-center mt-10 mb-20">
            <button className='relative mb-20'>
              <Link to='/design' className='uppercase text-zinc-800 bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                Take a closer look<FaArrowRight />
              </Link>
              <hr
                style={{
                background: 'gray',
                color: 'gray',
                borderColor: 'gray',
                height: '8px',
                width: '240px',
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
                }}
                className='mt-10'
              />
            </button>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="flex flex-col justify-center text-center max-w-6xl mx-auto">
            <h1 className='text-5xl font-bold'>Dedicated to Sustainable Solutions</h1>
            <p className='font-semibold mt-6 max-w-4xl mx-auto'>At Earth Angels, we embrace the philosophy of 'Wellness Architecture & Design' and prioritise a sustainable approach to building and renovating. Our goal is to be environmentally friendly and socially responsible, while still offering affordable options that are stylish, luxurious, and indulgent.</p><br></br>
            <p className='font-semibold max-w-4xl mx-auto'>Picture a home that not only saves energy but also provides year-round thermal comfort with low-cost heating and cooling systems that can be easily controlled. This energy efficiency is enhanced by the use of renewable energy sources and battery storage.</p><br></br>
            <p className='font-semibold max-w-4xl mx-auto'>In addition, our solutions prioritise healthy living with fresh air cirulation and the use of non-toxic materials, sourced from companies that share our commitment to sustainability.</p>
            <img src={Image} alt="" className='w-[60rem] h-[20rem] sm:h-[35rem] self-center rounded-lg shadow-xl hover:scale-105 transition duration-300 mt-10'/>
            <p className='relative text-xl font-bold max-w-2xl mx-auto mt-10 mb-20'>We believe that by embracing these principles, we can create a better future for ourselves and future generations, while still enjoying the comfort and elegance we deserve.
            <hr
              style={{
              background: 'gray',
              color: 'gray',
              borderColor: 'gray',
              height: '8px',
              width: '240px',
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
              }}
              className='mt-10'
            /></p>
        </div>
        {/* SECTION 5 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col max-w-3xl mx-auto text-center">
            <h1 className='text-3xl font-bold mt-14'>Want to know more about us?</h1>
            <p className='mt-8 font-semibold'>Our Founder & CEO, Louisa, with over 25 years of experience in the industry, is a highly skilled designer dedicated to helping clients realise their vision. By leveraging cutting-edge CGI visualisation technology, she is able to bring designs to life so clients can make informed decisions, be it a hotel or a home, that truly reflects their unique needs and aesthetic preferences.</p><br></br>
            <p className='font-semibold'>Jeremy, our COO, has extensive experience in the management of luxury tourism hospitality operations, Sales & Revenue management and development projects over a career spanning more than 30 years. His expertise is the management of the development lifecycle of new tourism projects with a focus on project planning, space programming and design team management.</p><br></br>
            <p className='font-semibold'>Contact Louisa or Jeremy today to schedule a consultation and begin your journey.</p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center mt-10">
              <button className='mb-10 sm:mb-20 max-w-40 mx-auto sm:mx-0'>
                <Link to='/about-us' className='uppercase text-zinc-800 bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                  Read More<FaArrowRight />
                </Link>
              </button>
              <button className='mb-20 max-w-40 mx-auto sm:mx-0'>
                <Link to='/contact' className='uppercase text-zinc-800 bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                  Contact Us<FaArrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
