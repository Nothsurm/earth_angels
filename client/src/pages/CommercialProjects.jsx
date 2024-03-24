import Header from '../components/Header'
import { Parallax } from 'react-parallax'
import Image from '../images/bathroom-visualisations.jpeg'
import { CardBody, CardContainer, CardItem } from "../components/3dCard";
import ProfileImage from '../images/louisa-image.jpeg'

export default function CommercialProjects() {
  return (
    <div>
        <Header />
        {/* SECTION 1 */}
        <Parallax blur={0} strength={600} bgImage={Image}>
          <div className="w-full h-[600px] sm:min-h-screen flex justify-center items-center">
            <h1 className='text-6xl font-bold text-center mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md'>WE DESIGN AND...</h1>
          </div>
        </Parallax>

        {/* SECTION 2 */}
        <div className="flex flex-col max-w-6xl mx-auto text-4xl text-center">
          <h1 className='mt-20'>A compelling opportunity for wine producers in Portugal to capitalise on the projected <span>&#8364;</span>30 billion wine tourism market in Europe by 2030.</h1><br></br>
          <h1 className='mb-20'>Our approach helps estates accross the country's 14 regions benefit from this growing sector</h1>
        </div>

        {/* SECTION 3 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center max-w-6xl mx-auto gap-4">
            <img src={Image} alt="" className='w-[20rem] sm:w-[30rem] mt-20 rounded-md hover:scale-105 transition duration-300'/>
            <img src={Image} alt="" className='w-[20rem] sm:w-[30rem] mt-20 rounded-md hover:scale-105 transition duration-300'/>
          </div>
          <div className="flex flex-col max-w-2xl mx-auto text-center mt-10 leading-loose text-xl">
            <p>Sustainable tourism is growing at 9.54% annually through 2027. For many travellers sustainability is important - 80% see it as important and 81% are willing to change behaviours to reduce environmental impacts.</p><br></br>
            <p>Portugal is second globally in wine tourism, with a potential of <span>&#8364;</span>2.1 billion of the projected <span>&#8364;</span>30 billion market by 2030.</p>
          </div>
          <div className="flex justify-center max-w-5xl mx-auto">
            <img src={Image} alt="" className='w-[20rem] sm:w-full h-[30rem] mt-10 mb-20 rounded-md hover:scale-105 transition duration-300'/>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="flex flex-col gap-10 sm:flex-row flex-wrap max-w-6xl mx-auto">
          <div className="flex-1 text-xl font-semibold leading-relaxed">
            <p className='mt-10 sm:mt-40'>Luxury lodges have become symbols of luxury experiences. Our reasearch indicates this trend is under-represented in Portugal. We can help you capture a highly motivated traveller willing to spend more and stay longer.</p><br></br>
            <p>Our carefully designed units provide luxury living, relaxing and enjoyment harmonised with nature. Each embraces sustainability and cutting-edge construction for outstanding energy performance and year-round indoor-outdoor comfort in all seasons.</p>
          </div>
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

        {/* SECTION 5 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col gap-10 sm:flex-row flex-wrap max-w-6xl mx-auto">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto sm:h-[30rem] rounded-xl shadow-xl">
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
            <div className="flex-1 text-xl font-semibold leading-relaxed">
              <p className='mt-10 sm:mt-36'>We are not just new lodging suppliers, we also create sustainable luxury accomodation by rehabilitating ruins, existing buildings and outbuildings using sustainable methods.</p><br></br>
              <p>An opportunity to redevelop older buildings into stunning and unique luxury accomodations for tourists.</p><br></br>
              <p>These adaptive rehabilitation projects preserve local cultural heritage and generate new revenue streams through upscale tourism that caters to discerning international clients with sensitivity to the surrounding environment and community needs.</p>
            </div>
          </div>
        </div>

        {/* SECTION 6 */}
          <div className="flex flex-col md:flex-row justify-around mt-10 mb-20 max-w-6xl mx-auto">
            <div className="flex flex-col items-center mt-10">
              <img src={Image} alt="" className='w-[50rem] h-[18rem] rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
            </div>
            <div className="flex flex-col items-center text-center ml-10 mr-10 max-w-96">
              <p className='mt-20 font-semibold'>Our new build 'lodges' offer the pinnacle of modern sustainable design, incorporating wellness architecture principles and state-of-the-art building methods.</p><br></br>
              <p className='font-semibold'>Using this approach we create luxury living spaces that prioritises environmental stewardship, health and comfort through passive design, non-toxic and recycled materials and energy efficiency.</p><br></br>
            </div>
            <div className="flex flex-col items-center mt-10">
              <img src={Image} alt="" className='w-[50rem] h-[18rem] rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
            </div>
          </div>

        {/* SECTION 7 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col max-w-6xl mx-auto text-4xl text-center">
            <p className='mt-20'>We consider Indoor and Outdoor living experiences in all seasons, using ultra low energy heating and cooling systems as well as cosy fireplaces to drive year round appeal...</p><br></br>
            <p className='mb-20'>...and driving an excellent return on investment.</p>
          </div>
        </div>

        {/* SECTION 8 */}
        <div className="flex flex-col justify-center gap-10 max-w-2xl mx-auto text-center font-semibold leading-relaxed">
          <p className='mt-20'>The discerning global traveler, who this property will appeal to, is one who enjoys the finer aspects of life. Luxurious overnight accommodations are paramount, accompanied by culinary and wine experiences that reflect the region's rich heritage and local produce.</p>
          <img src={Image} alt="" className='w-[40rem] self-center rounded-lg shadow-xl hover:scale-105 transition duration-300'/>
          <p className='mb-20'>Romantic getaways, weddings, and luxury wine tours will benefit greatly from the surroundings and ability to stay on-site. immersed in nature yet cocooned in comfort. Year-round tourism is feasible thanks to thermal comfort solutions such as infrared outdoor heating and cozy fireplaces, enabling the marketing of romantic winter vacations.</p>
        </div>

        {/* SECTION 9 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="max-w-6xl mx-auto flex flex-col">
            <p className='mt-20 font-semibold text-center text-xl leading-relaxed'>Earth Angels consultative approach provides a full-service solution from design and Municipality approvals through construction to daily operations and sales to deliver a successful enotourism business that enhances your existing wine brand and heritage.</p>
            <div className="flex flex-col justify-around sm:flex-row gap-10 mb-20">
              <div className="flex flex-col flex-wrap justify-center mt-10 items-center gap-10">
                <img src={ProfileImage} alt="img-here" className='w-32 h-32 rounded-full object-contain'/>
                <h1 className='font-semibold text-xl text-center'>Louisa Bamford-Payne - Founder & CEO</h1>
                <p className='font-semibold'>louisa@earth-angels.org</p>
              </div>
              <div className="flex flex-col flex-wrap justify-center mt-10 items-center gap-10">
                <img src='' alt="img-here" className='w-32 h-32 border rounded-full object-contain'/>
                <h1 className='font-semibold text-xl text-center'>Jeremy Payne - COO</h1>
                <p className='font-semibold'>jeremy@earth-angels.org</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
