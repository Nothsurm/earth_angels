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

import CardImage1 from '../images/card-image1.jpg'
import CardImage2 from '../images/card-image2.png'
import CardImage3 from '../images/card-image3.png'
import CardImage4 from '../images/card-image4.jpg'
import CardImage5 from '../images/card-image5.png'
import CardImage6 from '../images/card-image6.jpg'
import CardImage7 from '../images/dolphins.png'
import CardImage8 from '../images/card-image8.png'
import CardImage9 from '../images/card-image9.png'

import Image10 from '../images/collection-of-images.jpg'
import Image11 from '../images/master-bedroom-suite.jpg'
import Image12 from '../images/plans-1.jpg'
import Image13 from '../images/plans-2.png'
import Image14 from '../images/bathroom-suite.jpg'
import Image15 from '../images/after-kitchen.jpg'
import Image16 from '../images/livingroom-white-bg.jpeg'
import Image17 from '../images/mockup-office-sign.jpg'

import { FaArrowRight } from "react-icons/fa";

import Video from '../videos/BedroomRoaming.mp4'
import { Link } from 'react-router-dom'

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
  const myStyle3 = {
    backgroundImage: `linear-gradient(to left, rgb(0 0 0), transparent), url(${Image16})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed'
  }
  const myStyle4 = {
    backgroundImage: `linear-gradient(to right, rgb(0 0 0), transparent), url(${Image17})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
        <div>
          <h1 className='mt-20 text-center text-6xl'>Marketing Materials Development</h1>
          <div className="flex flex-row gap-10 flex-wrap max-w-7xl mx-auto mt-20 mb-20 text-stone-100">
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage1} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Identity of the project</p>
                  <span className="text-sm">Described within an 'elevator pitch', bringing to life an immersive, aspirational & virtuous lifestyle.</span>
              </div>
            </div>
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage2} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Logos & Brand Materials Plan</p>
                  <span className="text-sm">Brand Logos & materials including;<br></br>
                  • Brochures<br></br>
                  • Promotional items (Flyer/Postcard)<br></br>
                  • Billboards / Adverts<br></br>
                  • Templates for Digital Communication<br></br>
                  • Newsletter and other digital communications.</span>
              </div>
            </div>
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage3} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Brand Guidelines</p>
                  <span className="text-sm">Brand Manual governing the look and feel for all brand materials</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 flex-wrap max-w-7xl mx-auto mt-20 mb-20 text-stone-100">
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage4} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Marketing Materials Design</p>
                  <span className="text-sm">- Sales Brochure<br></br>
                  - Promotional Flyers/Postcards<br></br>
                  - Billboard<br></br>
                  - Signage<br></br>
                  - Canvas wrap at location<br></br>
                  - Invitations (launch and other templates as may be requested)<br></br>
                  - Adverts</span>
              </div>
            </div>
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage5} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Visualisations</p>
                  <span className="text-sm">Unlimited (Minimum 4K High Definition)<br></br><br></br>
                  Includes virtual walkthroughs & META-AR (Augmented Reality)</span>
              </div>
            </div>
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage6} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Videos</p>
                  <span className="text-sm">
                    <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-4">
                      <p>Whole Development</p>
                      <p>Each typology or Area</p>
                      <p>Lifestyle</p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p>1min 30secs</p>
                      <p>1min 30secs</p>
                      <p>max 2min</p>
                    </div>
                    </div>
                    <p className='mt-10'>Marketing promotion videos  as required</p>
                  </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 flex-wrap max-w-7xl mx-auto mt-20 mb-20 text-stone-100">
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage7} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Commercial Plans</p>
                  <span className="text-sm">Plans 2D, with all the commercial information.Plans with colours and furniture set-up</span>
              </div>
            </div>
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage8} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Virtual Presentations</p>
                  <span className="text-sm">For all typologies or areas.<br></br><br></br>
                  Virtual views</span>
              </div>
            </div>
            <div className="flex-1 group relative w-full transition-all h-[500px] overflow-hidden rounded-lg sm:w-[350px]">
              <img 
                  src={CardImage9} 
                  alt="post cover" 
                  className="h-[200px] w-full object-cover hover group-hover:h-[240px] transition-all duration-300 z-20" 
              />
              <div className="p-5 flex flex-col gap-8 font-semibold bg-zinc-700 h-[300px]">
                  <p className="text-lg line-clamp-2">Digital Content & Sales Suite</p>
                  <span className="text-sm">Website or website page if to be integrated with an existing site (working with your IT provider).<br></br>
                  • Digital interactive brochures (also on the marketing materials).<br></br>
                  • Videos (scripts to be developed together):<br></br>
                  • Global project video: 1m:30s<br></br>
                  • Short videos for digital campaigns: 6 seg – 15 seg<br></br>
                  • CGI Photos<br></br>
                  • Support in defining the digital presentation of the project.</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 8 */}
        <div className="text-stone-100" style={myStyle}>
          <div className="flex flex-col gap-10 max-w-2xl ml-2 mr-2 lg:ml-40 leading-loose font-semibold text-xl">
            <h1 className='mt-20 text-6xl'>Sustainable Interior Design Process & Visualisations</h1>
            <h2 className='text-3xl'>ID Concepts</h2>
            <p>Initial design concepts are developed with consideration to brand aspirations, location, setting and target customer. At this stage we develop digital mood boards for initial approval by stakeholders.</p>
            <span className='text-center text-sm'>Example Mood Board for Suite.</span>
            <img src={Image10} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <h2 className='text-3xl'>Design Development</h2>
            <p>Progressing to Design Development we model each typology whilst developing the details of arrangement, colours, textures, materials, furniture and dressing (from cushions to artwork and every detail in between).</p>
            <span className='text-center text-sm'>Example Visualisation (CGI) of Master Bedroom suite</span>
            <img src={Image11} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <h2 className='text-3xl'>Design Visualisations (CGI's, Videos & Walkthrough)</h2>
            <p>We model all the (now digitally detailed) design elements and apply these to the general layout of each typology. These details are all modelled from sourced items, making this an ideal way to personalise customers Interior Design preferences, quickly and efficiently.</p>
            <p>Our Visualisations are rendered at HQ or UHQ (ultra realistic) and the videos we produce will include 'dynamic' effects (such as a curtain moving with the sea breeze). Real life imagery can be used within the footage, especially when representing the 'personality' of a project, its location and the lifestyle it promises.</p>
            <span className='text-center text-sm'>Example Video of Master Bedroom suite</span>
            <img src="" alt="" />
            <h2 className='text-3xl'>Commercial Plans</h2>
            <p>Plans will be prepared for all different typologies/areas. These plans include;</p>
            <p>Plans in 2D, with all commercial information to include Lighting & Finishes for floor, walls & ceiling. </p>
            <p>Plans with colours and furniture set-up</p>
            <img src={Image12} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <img src={Image13} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <h2 className='text-3xl'>Virtual Presentations</h2>
            <p>As we will have modelled all typologies in 3d, virtual presentations and walkthrough functionalities will both be enabled and available.</p>
            <h2 className='text-3xl'>Digital Content & Sales Suite</h2>
            <p>In addition to our own designs, the digital content we can produce in support of a project includes content such as digital brochures of individual typology or facility as well as digital brochures for Lifestyle & local Information guides. These themes can include, but are not limited to, guides on;</p>
            <p>Schools, Restaurants, Best Beaches, Golf Clubs, Sports, Shopping, Culture, Healthcare etc....</p>
            <p>The following Video is one of our earlier (2016) promotional videos. This was of a new Resort development in Sri Lanka, using CGI's of Room Types, Restaurants and other facilities designed and visualised by us alongside lifestyle footage to showcase the destination and the experience awaiting guests. This full Design & Visualisation project was finished within 8 weeks, including the video which was used as the centre-piece of JA's trade show at ATM (Arabian Travel Market).</p>
            <p className='mb-20'>We now have the technology to deliver Ultra high resolution dynamic 3d Videos of a project, blending CGI's of the property with real videography of aspirational lifestyle or the setting from drone and other footage.</p>
          </div>
        </div>

        {/* SECTION 9 */}
        <div>
          <iframe width='100%' height='900'
            src="https://www.youtube.com/embed/y6uRcjn1cMc">
          </iframe>
        </div>

        {/* SECTION 10 */}
        <div className="text-stone-100" style={myStyle3}>
          <div className="h-fit flex flex-col gap-10 lg:ml-auto text-right max-w-2xl ml-2 mr-2 lg:mr-40 font-semibold text-xl">
            <h1 className='text-3xl mt-20'>A seamless package can include the following;</h1>
            <p className='mt-10'>The Identity of the project</p>
            <p>Logos & Brand Materials Plans</p>
            <p>Brand Guidelines</p>
            <p>Marketing Materials Design</p>
            <p>Interior Design</p>
            <p>Visualisations (CGIs)</p>
            <p>Videos</p>
            <p>Commercial Plans</p>
            <p>Digital Content & Sales Suite (Set up support)</p>
            <p>Sustainable Sourcing - FF&E Packages & a fully personalised bespoke option</p>
            <img src={Image14} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300'/>
            <img src={Image15} alt="" className='w-full mx-auto rounded-md hover:scale-105 transition duration-300 mb-20'/>
          </div>
        </div>

        {/* SECTION 11 */}
        <div className="text-stone-100 min-h-screen" style={myStyle4}>
          <div className="flex flex-col gap-10 max-w-2xl ml-2 mr-2 lg:ml-40 leading-loose font-semibold text-xl">
            <h1 className='mt-20 text-6xl'>About Us</h1>
            <p className='mt-20'>As our name suggests, our goal is to be environmentally friendly and socially responsible, while still offering affordable design options that are stylish, luxurious, and indulgent.</p>
            <p className='flex flex-row gap-4 items-center'>For more information:
              <button className='text-sm'>
                <Link to='/about-us' className='uppercase bg-zinc-400 px-4 py-2 rounded-lg font-semibold hover:bg-zinc-600 hover:text-white transition ease-in-out delay-50 flex items-center gap-2 mx-auto'>
                  Click Here<FaArrowRight />
                </Link>
              </button>
            </p>
          </div>
        </div>
    </div>
  )
}
