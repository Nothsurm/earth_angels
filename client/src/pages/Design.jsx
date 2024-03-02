import Image from '../images/house-image.jpg'
import { Parallax } from 'react-parallax'

export default function Design() {
  return (
    <div>
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="w-full h-[600px] flex justify-center items-center">
                <h1 className='text-6xl font-bold text-center mt-20 text-white'>DESIGN SERVICES</h1>
            </div>
        </Parallax>
        <div className="bg-zinc-600 w-full flex flex-col justify-center text-center text-white">
            <div className="max-w-3xl mx-auto mt-20 mb-20">
                <h1 className='text-4xl font-bold '>DESIGN IS PERSONAL
                <hr
                    style={{
                    background: 'orange',
                    color: 'orange',
                    borderColor: 'orange',
                    height: '2px',
                    width: '80px',
                    position: 'absolute',
                    top: '79%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}
                /></h1>
                <p className='mt-14'>Whether for a Brand or for an Individual, Design Style IS personal. We specialise in helping you develop and express this personality, visualising how to translates this in reality and making it happen within your budget.<br></br><br></br>

                We believe in Sustainability in Action and we will help you make the right choices for all our futures.</p>
            </div>
        </div>
        <div className="min-h-screen bg-neutral-100 text-stone-700">
            <div className="flex flex-row justify-center gap-10 max-w-6xl mx-auto">
                <div className="max-w-lg text-center">
                    <img src={Image} alt="" className='rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Mood Boards</h1>
                    <p className='mt-4'>We use Mood Boards extensively to visualise our customers vision or to walk through our recommendations</p>
                </div>
                <div className="max-w-lg text-center">
                    <img src={Image} alt="" className='rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>CGI's</h1>
                    <p className='mt-4'>CGI's (Computer Generated Images) enables us to visualise the actual look and feel of a project, enabling sign off and early commercial promotion & marketing activities</p>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-10 max-w-6xl mx-auto">
                <div className="max-w-lg text-center">
                    <img src={Image} alt="" className='rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Detailed Plans</h1>
                    <p className='mt-4'>Floor plans and elevations are combined with masterplanning to ensure all design and access considerations are fully documented</p>
                </div>
                <div className="max-w-lg text-center">
                    <img src={Image} alt="" className='rounded-lg shadow-lg scale-75 hover:scale-90 transition duration-300'/>
                    <h1 className='font-bold text-lg'>Professional Marketing</h1>
                    <p className='mt-4'>For commercial use, the materials we create during the Design process enables effective promotional activity to start early, even before work starts on-site</p>
                </div>
            </div>
        </div>
        <div className="bg-zinc-600 w-full h-[700px] text-stone-200">
            <div className="max-w-6xl mx-auto flex flex-row gap-10">
                <div className="flex-1 mt-20 relative leading-relaxed">
                    <h1 className='font-bold text-2xl'>Design is in our DNA
                        <hr
                        style={{
                        background: 'orange',
                        color: 'orange',
                        borderColor: 'orange',
                        height: '2px',
                        width: '60px',
                        position: 'absolute',
                        top: '12%',
                        left: '6%',
                        transform: 'translate(-50%, -50%)'
                        }}
                    /></h1>
                    <p className='mt-14'>The principal of Earth Angels, Louisa is a commercially astute Design professional.<br></br><br></br>

                    Louisa owned and operated a boutique Interior Design company in Dubai for 12+ years specialising in upmarket private residence projects from refurbishments to Interiors and new builds. During this time she  also worked closely with Architects and Consultants in Dubai, the UK and Portugal on leading Concept Design work for Hospitality projects, specifically new Hospitality and Resort developments.</p><br></br><br></br>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            <span className='text-orange-400'>-</span>
                            <p>Experience</p>
                        </div>
                        <div className="flex gap-3">
                            <span className='text-orange-400'>-</span>
                            <p>Reputation</p>
                        </div>
                        <div className="flex gap-3">
                            <span className='text-orange-400'>-</span>
                            <p>Guidance & Expert Advice</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mt-20 relative leading-relaxed">
                    <h1 className='font-bold text-2xl'>Dedicated to Sustainable Solutions
                        <hr
                            style={{
                            background: 'orange',
                            color: 'orange',
                            borderColor: 'orange',
                            height: '2px',
                            width: '60px',
                            position: 'absolute',
                            top: '12%',
                            left: '6%',
                            transform: 'translate(-50%, -50%)'
                            }}
                        />
                    </h1>
                    <p className='mt-14'>We are passionate about environmentally & sustainable modern methods of construction and the emergence of ground breaking new materials and products in this space.<br></br><br></br>

                    Earth Angels is dedicated to an ultra Sustainable approach that, whilst being Kind to the Earth and Socially responsible, is also very cost competitive, stylish, luxurious and 'indulgent'.<br></br><br></br> 

                    The 3 pillars of our Sustainability approach in action;</p><br></br><br></br>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            <span className='text-orange-400'>-</span>
                            <p>Support our Local Community with stable permanent jobs</p>
                        </div>
                        <div className="flex gap-3">
                            <span className='text-orange-400'>-</span>
                            <p>Support Local Producers & Service providers</p>
                        </div>
                        <div className="flex gap-3">
                            <span className='text-orange-400'>-</span>
                            <p>Have a low impact on the Environment in Build and Operation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white w-full h-[600px] flex justify-center">
            <iframe 
                width="900" 
                height="600"
                src="https://www.youtube.com/embed/7BGNAGahig8"
            >
            </iframe>
        </div>
    </div>
  )
}
