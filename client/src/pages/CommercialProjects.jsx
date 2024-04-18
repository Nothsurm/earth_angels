import Header from '../components/Header'
import { Parallax } from 'react-parallax'
import Image from '../images/hero-pool-villa.png'
import Image1 from '../images/bathroom-visualisations.jpeg'
import Image2 from '../images/design-restaurant.png'
import Image6 from '../images/livingroom-bg.jpeg'
import Image7 from '../images/interior.png'
import Image8 from '../images/fancy-table.png'
import Image9 from '../images/drawers.png'
import BeforePlans from '../images/plans1.jpg'
import AfterPlans from '../images/plans2.png'
import KitchenBefore from '../images/before-kitchen.jpg'
import KitchenAfter from '../images/after-kitchen.jpg'
import TableBefore from '../images/before-table.jpg'
import TableAfter from '../images/after-table.jpg'
import LivingroomBefore from '../images/before-livingroom.jpg'
import LivingroomAfter from '../images/after-livingroom.jpg'
import { CardBody, CardContainer, CardItem } from "../components/3dCard";
import ProfileImage from '../images/louisa-image.jpeg'

import Image3 from '../images/Pagoda.png'
import Image4 from '../images/pool.jpeg'
import Image5 from '../images/jaccuzi.jpeg'

import Video from '../videos/BedroomRoaming.mp4'

export default function CommercialProjects() {
  const myStyle = {
    backgroundImage: `linear-gradient(to right, rgb(0 0 0), transparent), url(${Image1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed'
  }

  const myStyle1 = {
    backgroundImage: `linear-gradient(to right, rgb(0 0 0), transparent), url(${Image2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed'
  }
  const myStyle2 = {
    backgroundImage: `linear-gradient(to right, rgb(0 0 0), transparent), url(${Image6})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed'
  }
  return (
    <div>
        <Header />
        {/* SECTION 1 */}
        <Parallax blur={0} strength={600} bgImage={Image} bgImageStyle={{ width: "100%", height:'100%' }}>
          <div className="w-full h-[600px] sm:min-h-screen flex justify-center items-center">
            <h1 className='text-6xl uppercase font-bold text-center mt-40 text-white bg-zinc-700 bg-opacity-40 p-2 rounded-md'>Building a future with sustainable design</h1>
          </div>
        </Parallax>

        {/* SECTION 2 */}
        <div className="text-stone-100" style={myStyle}>
          <div className="flex flex-col gap-20 max-w-2xl ml-2 mr-2 lg:ml-40 leading-loose font-semibold text-xl">
            <p className='lg:mt-40 mt-20'>With a foundation rooted in sustainable and regenerative design practises, we have the expertise to bring your plans to life, whether for a new development, a renovation, remodelling or a re-habilitation project.</p>
            <p>Our commercial experience of the Design process enables detailed planning, quality control of the build process and advanced sales & marketing.</p>
            <p className='lg:mb-40 mb-20'>A recent example; these are the before images of a renovation and remodelling project for a town-house.</p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="bg-zinc-800 text-stone-300">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center max-w-6xl mx-auto gap-4">
            <img src={BeforePlans} alt="" className='w-[20rem] sm:w-[30rem] mt-20 rounded-md hover:scale-105 transition duration-300'/>
            <img src={AfterPlans} alt="" className='w-[20rem] sm:w-[30rem] mt-20 rounded-md hover:scale-105 transition duration-300'/>
          </div>
          <div className="flex justify-center max-w-7xl mx-auto gap-4 mt-10">
            <div className="flex-1 flex flex-col gap-4">
              <img src={KitchenBefore} alt="" className='w-[30rem] h-[20rem] rounded-md hover:scale-105 transition duration-300'/>
              <img src={KitchenAfter} alt="" className='w-[30rem] h-[20rem] rounded-md hover:scale-105 transition duration-300'/>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <img src={TableBefore} alt="" className='w-[30rem] h-[20rem] rounded-md hover:scale-105 transition duration-300'/>
              <img src={TableAfter} alt="" className='w-[30rem] h-[20rem] rounded-md hover:scale-105 transition duration-300'/>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <img src={LivingroomBefore} alt="" className='w-[30rem] h-[20rem] rounded-md hover:scale-105 transition duration-300'/>
              <img src={LivingroomAfter} alt="" className='w-[30rem] h-[20rem] rounded-md hover:scale-105 transition duration-300'/>
            </div>
          </div>
          <div className="h-screen mt-10 mb-20">
            <video autoPlay muted loop className='w-full'>
              <source src={Video} type='video/mp4'/>
            </video>
          </div>
        </div>

        {/* SECTION 4 */}
        <div className="text-stone-100 w-full" style={myStyle1}>
          <div className="flex flex-col gap-10 max-w-2xl ml-2 mr-2 lg:ml-40 leading-loose font-semibold text-xl">
            <h1 className='mt-40 text-6xl'>Our Approach & Success Factors</h1>
            <h2 className='text-3xl'>Our Approach</h2>
            <p>Earth Angels has commercial experience that includes support of the marketing and sales process of development projects. </p>
            <p>Our philosophy of design includes special emphasis on 'inside out' living and thermal comfort; being able to enjoy external spaces in Winter and Summer. A Home for all Seasons.</p>
            <img src={Image3} alt="" className='w-[300px] mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <p>We have knowledge of new technologies in modern methods of construction, mechanical ventilation and heat recovery, ultra low energy heating and passive design principles which influences our work and, whilst not fully in our scope, we are happy to share.</p>
            <p>We consider that the integration of Smart home technology and responsive lighting is both good for the environment and adds to the comfort and safety of occupants.</p>
            <p>We enjoy being innovative. For example, combining 'invisible' solar panels on a pergola roof to provide pool heating and FAR Infra-red heating of outside spaces, enabling year round enjoyment with zero environmental impact or cost.</p>
            <img src={Image4} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <p>We have the expertise to deliver, and exceed, the deliverables of a full brief and for any project there are significant additional benefits in consolidating the brief under Earth Angels.  It will enable more 'key Success Factors'.</p>
            <img src={Image5} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <h2 className='text-3xl'>Success Factors</h2>
            <p>Success Factor 1 - The team is led by a passionate career Design professional with a design style that focuses on quality and elegance down to the smallest detail.</p>
            <p>Success Factor 2 - She was a Design Director in her 20s which gave her early and extensive International experience in procurement and the management of a diverse  supply chain from China, Turkey and Europe (Portugal and Italy in particular). A foundation that is as relevant today as it was then.</p>
            <p>Success Factor 3 - We have the ability to meet ambitious schedules through direct management and control of all key elements from inception to completion.</p>
            <p>Success Factor 4 - Having all elements in-house avoids time delays due to misinterpretation, communication delays or misalignment of critical path outputs.</p>
            <p>Success Factor 5 - We fully modelling all typologies which then enables as many CGI visualisations as needed to market to the highest level of detail. This includes Videos, walkthroughs and VR (Virtual Reality 'virtual property viewing').</p>
            <p>Success Factor 6 - We can provide a lifestyle Video of a development (recommended to be no more than c. 2 mins) that can combine Drone footage, real lifestyle footage and photo-real dynamic Visualisation footage.</p>
            <p>Success Factor 7 - We design with real life experiences & practicality in mind, carefully considering Wellness Design principles and human emotions. Our goal is to create comfortable, elegant environments that will foster happy memories for years to come.</p>
            <p>Success Factor 8 - We source sustainable FF&E to budget and always without sacrificing comfort, style or elegance.</p>
            <p>Success Factor 9 - Our detailed knowledge  of  how to combine advanced technologies with beautiful design to embrace inside out living in all seasons will be of significant value for potential buyers.</p>
            <p>Success Factor 10 - We can help a developer or appointed Agent to curate an innovative showroom at their offices or a purpose built temporary structure onsite, & integrate our 3d modelling & Visualisations of each Typology to provide an online digital showroom.</p>
            <p className='mb-20'>Success Factor 11 - We offer a bespoke Interior Design service for clients & potential clients who may want a unique design look or who want a design that integrates their own furniture & loved items.</p>
          </div>
        </div>

        {/* SECTION 5 */}
        <div className="text-stone-100" style={myStyle2}>
          <div className="flex flex-col gap-10 max-w-2xl ml-2 mr-2 lg:ml-40 leading-loose font-semibold text-xl">
            <h2 className='mt-20 text-3xl'>Interior Design Style</h2>
            <p>Whether for a Brand or for an Individual, Design Style IS personal. We specialise in helping to develop and express this personality. Our visualisations and designs help to translate this personality into reality and within budget.</p>
            <img src={Image7} alt="" className='w-[500px] mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <p>We are a team experienced in supporting Developers and Architects during the early stage design process, design development and later delivery.</p>
            <p>We also have experience in helping Estate Agents to best present and achieve a sale, either for a specific property or in support of their sales activity for a full development project.</p>
            <p>Detailed planning is essential for success and we specialise in the early phase support of the planning process. Floor plans and elevations are carefully reviewed and, where appropriate, combined with masterplanning to ensure all design and access considerations are fully documented.</p>
            <img src={Image8} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <p className='mb-20'>Underlining it all, we believe in Sustainability in Action and we will help you make the right choices for all our futures.</p>
          </div>
        </div>

        {/* SECTION 6 */}
        <div className="text-stone-100" style={myStyle}>
          <div className="flex flex-col gap-10 max-w-2xl ml-2 mr-2 lg:ml-40 leading-loose font-semibold text-xl">
            <h2 className='mt-20 text-3xl'>Show Suite</h2>
            <p>Earth Angels can support the marketing and sales activities of any development by providing any and all marketing materials required.</p>
            <p>As part of this commitment we can even supply and curate a dedicated Show Suite in the location of your choice.</p>
            <p>The Suite can Include;</p>
            <p>Finishes Samples displayed in an interactive format so that Clients can see and feel materials and see the look of their choices on realistic Visualisations with the click of a button.</p>
            <img src={Image9} alt="" className='w-[500px] mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <p>A state of the art VR Showroom can be installed to showcase our Interior Designs by making use of our 3d Visualisations of each typology for a fully immersive experience.</p>
            <p>The VR Showroom will offer the opportunity to change colours, finishes and design choices.</p>
            <p>This will enable clients to visualise their own customised design experience.</p>
            <p>We will also offer eBrochures of every  Typology, Lifestyle & local area information, including but not limited to;</p>
            <p className='text-center'>Schools, Healthcare, Shopping, Markets</p>
            <p className='text-center'>Sports: Golf, Tennis, Paddle, Sailing...</p>
            <p className='mb-20 text-center'>Best Restaurants, Beaches, Bars...</p>
          </div>
        </div>

        {/* SECTION 7 */}
        <div className="bg-zinc-800 text-stone-300">
          
        </div>

        {/* SECTION 8 */}
        <div className="flex flex-col justify-center gap-10 max-w-2xl mx-auto text-center font-semibold leading-relaxed">
          
        </div>

        {/* SECTION 9 */}
        <div className="bg-zinc-800 text-stone-300">
          
        </div>
    </div>
  )
}
