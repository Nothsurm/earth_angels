import Header from '../components/Header'
import LivingRoomImage1 from '../images/livingroom-model2.jpeg'
import LivingRoomImage2 from '../images/livingroom-model.jpeg'
import HeroImage from '../images/hero-livingroom-model.jpeg'
import BeforeImage from '../images/before-image.jpeg'
import BeforeImage1 from '../images/before-images-1.jpeg'
import BeforeImage2 from '../images/before-images-2.jpeg'
import BeforeImage3 from '../images/before-images-3.jpeg'
import AfterImage from '../images/after-image.jpeg'
import AfterImage1 from '../images/livingroom-model-after-image.jpeg'
import AfterImage2 from '../images/livingroom-model-after-image2.jpeg'
import AfterImage3 from '../images/livingroom-model-after-image3.jpeg'
import BathroomBefore from '../images/bathroom-before-image.jpeg'
import BathroomAfter from '../images/bathroom-after-image.jpeg'
import Image from '../images/house-image.jpg'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "../components/3dCard";

import Video from '../videos/VisualisationsVideo.mp4'

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

        {/* SECTION 2 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col flex-wrap sm:flex-row max-w-6xl mx-auto justify-around">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[22rem] rounded-xl shadow-xl">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src={LivingRoomImage1}
                    height="1000"
                    width="1000"
                    className="h-[22rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[22rem] rounded-xl shadow-xl">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src={LivingRoomImage2}
                    height="1000"
                    width="1000"
                    className="h-[22rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className="flex flex-col items-center text-center justify-center gap-6 max-w-3xl mx-auto font-semibold mb-20 leading-loose">
            <h1 className='text-4xl'>Maximise the potential of your property with professional interior design visualisations</h1>
            <p className='mt-6'>We will assist you in developing a design that truly reflects your vision and lifestyle through an immersive and informative process.</p>
            <p>Interior design visualisations can transform a space by helping you see options before you decide on a final design, to make informed decisions that maximise functionality, comfort and style.</p>
            <p>We belive in Sustainability in Action and will help you make the right choices for all our futures.</p>
            <button className='relative'>
              <Link to='/contact' className='uppercase text-zinc-800 bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto mb-20'>
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
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
                }}
                className=''
              />
            </button>
          </div>
        </div>



        {/* SECTION 3 */}
        <div className="">
          <div className="flex gap-4 max-w-6xl mx-auto text-center">
            <div className="flex flex-col flex-1">
              <p className='font-bold uppercase'>Before</p>
              <img src={BathroomBefore} alt="" className='mt-2 h-[26rem] rounded-xl shadow-xl hover:scale-105 transition duration-300'/>
            </div>
            <div className="flex flex-col flex-1">
              <p className='font-bold uppercase'>After</p>
              <img src={BathroomAfter} alt="" className='mt-2 h-[26rem] rounded-xl shadow-xl hover:scale-105 transition duration-300'/>
            </div>
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
          <div className="flex justify-center mt-10 mb-10">
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
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col max-w-6xl mx-auto">
            <h1 className='uppercase text-2xl font-semibold self-center mt-20'>Villa Before & After Images</h1>
            <div className="flex flex-col sm:flex-row gap-4 mx-auto mt-10">
              <img src={BeforeImage1} alt="" className='flex-1 w-[25rem] h-[15rem] rounded-lg shadow-xl hover:scale-105 transition duration-300' />
              <img src={BeforeImage2} alt="" className='flex-1 w-[25rem] h-[15rem] rounded-lg shadow-xl hover:scale-105 transition duration-300' />
              <img src={BeforeImage3} alt="" className='flex-1 w-[25rem] h-[15rem] rounded-lg shadow-xl hover:scale-105 transition duration-300' />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mx-auto mt-10">
              <img src={AfterImage3} alt="" className='flex-1 w-[23rem] h-[15rem] rounded-lg shadow-xl hover:scale-105 transition duration-300' />
              <img src={AfterImage1} alt="" className='flex-1 w-[24rem] h-[15rem] rounded-lg shadow-xl hover:scale-105 transition duration-300' />
              <img src={AfterImage2} alt="" className='flex-1 w-[23rem] h-[15rem] rounded-lg shadow-xl hover:scale-105 transition duration-300' />
            </div>
            <h1 className='uppercase text-2xl font-semibold self-center mt-20'>Earth Angels new designs and visualisation video</h1>
            <video width='1000' height='600' controls className='mt-10 mb-10 self-center rounded-lg shadow-xl'>
                <source src={Video} type='video/mp4'/>
            </video>
          </div>
        </div>
    </div>
  )
}
