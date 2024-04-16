import Header from '../components/Header'
import ImageMoodBoards from '../images/design-moodboard.png'
import { Parallax } from 'react-parallax'
import HeroImage from '../images/design-livingroom.jpg'
import LivingRoomImage from '../images/bathroom-visualisations.jpeg'
import SriLankaImage from '../images/design-srilanka.png'
import RestaurantImage from '../images/design-restaurant.png'
import ImageCarousel from '../components/ImageCarousel'
import Video from '../videos/SustainableLodge.mp4'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";

export default function Design() {

  return (
    <div>
        <Header />
        <Parallax blur={0} strength={600} bgImage={HeroImage} bgImageStyle={{ width: "100%", height:'100%' }}>
            <div className="w-full h-[600px] sm:min-h-screen flex justify-center items-center">
                <h1 className='uppercase text-4xl sm:text-6xl font-bold text-center mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md'>Design is Personal</h1>
            </div>
        </Parallax>
        <div className="bg-zinc-800 text-stone-300 w-full flex flex-col justify-center text-center">
            <div className="max-w-3xl mx-auto mt-20 mb-20">
                <p className='text-center leading-loose mr-2 ml-2 sm:ml-0 sm:mr-0'>Whether for a Brand or for an Individual, Design Style IS personal. We specialise in helping you develop and express this personality. Our visualisations and designs help to translate this into a reality and within your budget.<br></br><br></br>

                We believe in Sustainability in Action and we will help you make the right choices for all our futures.</p>
            </div>
        </div>
        <div className="min-h-screen text-center leading-loose">
            <div className="flex flex-col sm:flex-row justify-center gap-10 max-w-6xl mx-auto">
                <div className="max-w-lg text-center">
                    <img src={ImageMoodBoards} alt="" className='w-[550px] h-[400px] rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Mood Boards</h1>
                    <p className='mt-4'>We use Mood Boards extensively to visualise our customers vision or to walk through our recommendations</p>
                </div>
                <div className="max-w-lg text-center">
                    <img src={LivingRoomImage} alt="" className='w-[550px] h-[400px] rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Visualisations</h1>
                    <p className='mt-4'>CGI's (Computer Generated Images) enables us to visualise the actual look and feel of a project, enabling sign off and early commercial promotion & marketing activities</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-10 max-w-6xl mx-auto">
                <div className="max-w-lg text-center">
                    <img src={SriLankaImage} alt="" className='w-[550px] h-[400px] rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Detailed Plans</h1>
                    <p className='mt-4'>Floor plans and elevations are combined with masterplanning to ensure all design and access considerations are fully documented</p>
                </div>
                <div className="max-w-lg text-center mb-10">
                    <img src={RestaurantImage} alt="" className='w-[550px] h-[400px] rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Commercial Design</h1>
                    <p className='mt-4'>We are a team experienced in supporting Developers and Architects during the early stage design process, design development and later delivery</p>
                </div>
            </div>
        </div>
        <div className="mt-10">
            <h1 className='text-center text-2xl font-bold'>A sustainable 2 bed Bungalow</h1>
            <ImageCarousel />
        </div>
        <div className="bg-zinc-800 text-stone-300 w-full h-fit">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-10">
                <div className="flex-1 mt-20 mb-0 sm:mb-20 leading-relaxed mr-2 ml-2 sm:ml-0 sm:mr-0">
                    <h1 className='font-bold text-2xl'>Design is in our DNA</h1>
                    <p className='mt-14 leading-loose'>The founder of Earth Angels, Louisa is a commercially astute Design professional.<br></br><br></br>

                    Louisa owned and operated a boutique Interior Design company in Dubai for 12+ years specialising in upmarket private residence projects from refurbishments to Interiors and new builds. During this time she  also worked closely with Architects and Consultants in Dubai, the UK and Portugal on leading Concept Design work for Hospitality projects, specifically new Hospitality and Resort developments.</p><br></br><br></br>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 items-center">
                            <span className='text-zinc-300 text-2xl'>-</span>
                            <p>Experience</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className='text-zinc-300 text-2xl'>-</span>
                            <p>Reputation</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className='text-zinc-300 text-2xl'>-</span>
                            <p>Friendly guidance & expert advice</p>
                        </div>
                    </div>
                    <button className='mt-10'>
                        <Link to='/about-us' className='uppercase text-zinc-800 bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                            Learn More<FaArrowRight />
                        </Link>
                    </button>
                </div>
                <div className="flex-1 mt-20 mb-20 leading-relaxed mr-2 ml-2 sm:ml-0 sm:mr-0">
                    <h1 className='font-bold text-2xl'>Dedicated to Sustainable Solutions</h1>
                    <p className='mt-14 leading-loose'>We are passionate about environmentally & sustainable modern methods of construction and the emergence of ground breaking new materials and products in this space.<br></br><br></br>

                    Earth Angels is dedicated to an ultra Sustainable approach that, whilst being Kind to the Earth and Socially responsible, is also very cost competitive, stylish, luxurious and 'indulgent'.<br></br><br></br> 

                    The 3 pillars of our Sustainability approach in action;</p><br></br><br></br>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3 items-center">
                            <span className='text-zinc-300 text-2xl'>-</span>
                            <p>Support our Local Community with stable permanent jobs</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className='text-zinc-300 text-2xl'>-</span>
                            <p>Support Local Producers & Service providers</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className='text-zinc-300 text-2xl'>-</span>
                            <p>Have a low impact on the Environment in Build and Operation</p>
                        </div>
                    </div>
                    <button className='mt-10'>
                        <Link to='/sustainability' className='uppercase text-zinc-800 bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                            Learn More<FaArrowRight />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full h-[600px] flex justify-center mt-10 mb-10">
            <video controls className=''>
                <source src={Video} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}
