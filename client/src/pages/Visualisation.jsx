import Header from '../components/Header'
import Image from '../images/bathroom-visualisations.jpeg'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../components/3dCard";

export default function Visualisation() {
  return (
    <div>
      {/* SECTION 1 */}
        <Header />
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
                <h1 className='text-6xl font-bold text-center mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md'>DESIGNS - RE-IMAGINED</h1>
                <div className="flex flex-row gap-2 text-white">
                  <p className='title-1 uppercase font-semibold text-2xl bg-zinc-700 bg-opacity-40 p-2 rounded-md'>Evolve your space</p>
                  <p className='title-2 uppercase font-semibold text-2xl bg-zinc-700 bg-opacity-40 p-2 rounded-md'> elevate your style</p>
                </div>
              <button className='title-3'>
                <Link to='/design' className='uppercase bg-zinc-400 bg-opacity-50 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                  Discover our services<FaArrowRight />
                </Link>
              </button>
            </div>
        </Parallax>
        <div className="mt-10 flex flex-col sm:flex-row max-w-6xl mx-auto justify-around">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[30rem] rounded-xl border shadow-xl">
              <CardItem translateZ="100" className="w-full">
                <img
                  src={Image}
                  height="1000"
                  width="1000"
                  className="h-[30rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[30rem] rounded-xl border shadow-xl">
              <CardItem translateZ="100" className="w-full">
                <img
                  src={Image}
                  height="1000"
                  width="1000"
                  className="h-[30rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
              width: '400px',
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
            <img src={Image} alt="" className='mt-10 max-w-6xl mx-auto w-[30rem] sm:w-[50rem] h-auto sm:h-[30rem] rounded-xl shadow-xl hover:scale-105 transition duration-300'/>
          </div>
          <div className="flex flex-col sm:flex-row justify-around mt-10 max-w-6xl mx-auto">
            <div className="flex flex-col items-center mt-10">
              <img src={Image} alt="" className='w-[50rem] h-[18rem] rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
              <p className='font-bold uppercase'>Before</p>
            </div>
            <div className="flex flex-col items-center text-center ml-10 mr-10">
              <h1 className='text-3xl font-bold'>Are you struggling to sell your property?</h1>
              <p className='mt-6 font-semibold'>Don't worry, we can assist you in achieving a quicker sale at the desired price. Our expertise lies in visualising a fresh and attractive appearance for tired or poorly presented properties, enabling potential buyers to envision the property's potential.</p><br></br>
              <p className='font-semibold'>We create stunning visualisations using a design look and layout that appeals to a wide range of buyers, helping your attract more interested buyers and increasing your chances of a successful sale.</p><br></br>
              <p className='font-semibold'>So why wait? Let us transform your property into a buyer's dream and help you achieve a sale.</p>
            </div>
            <div className="flex flex-col items-center mt-10">
              <img src={Image} alt="" className='w-[50rem] h-[18rem] rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
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
                width: '400px',
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
            <img src={Image} alt="" className='w-[60rem] h-[35rem] self-center rounded-lg shadow-xl hover:scale-105 transition duration-300 mt-10'/>
            <p className='relative text-xl font-bold max-w-2xl mx-auto mt-10 mb-20'>We believe that by embracing these principles, we can create a better future for ourselves and future generations, while still enjoying the comfort and elegance we deserve.
            <hr
              style={{
              background: 'gray',
              color: 'gray',
              borderColor: 'gray',
              height: '8px',
              width: '400px',
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
              }}
              className='mt-10'
            /></p>
        </div>
    </div>
  )
}
