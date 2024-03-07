import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import Image from '../../images/mockup-office-sign.jpg'
import { CardBody, CardContainer, CardItem } from "../../components/3dCard";

export default function KnowMore() {
  return (
    <div className='h-fit flex flex-wrap justify-center bg-zinc-800 text-stone-300'>
        <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-20 max-w-6xl mb-10 mr-2 ml-2 sm:ml-0 sm:mr-0 animate">
            <div className="flex-1 mt-20 lg:mb-20">
                <h1 className='text-4xl text-center font-bold mx-auto mb-10 uppercase relative'>WANT TO KNOW MORE ABOUT US?
                <hr
                    style={{
                    background: 'orange',
                    color: 'orange',
                    borderColor: 'orange',
                    height: '2px',
                    width: '60px',
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}
                    className='mt-6'
                /></h1>
                <p className='font-semibold text-center animate'>Our Founder & CEO, Louisa, with over 25 years of experience in the industry, is a highly skilled designer dedicated to helping clients realise their vision. By leveraging cutting-edge CGI visualisation technology, she is able to bring designs to life so clients can make informed decisions, be it a hotel or a home, that truly reflects their unique needs and aesthetic preferences.<br></br><br></br>

                Jeremy, our COO, has extensive experience in the management of luxury tourism hospitality operations, Sales & Revenue management and development projects over a career spanning more than 30 years. His expertise is the management of the development lifecycle of new tourism projects with a focus on project planning, space programming and design team management. Contact Louisa or Jeremy today to schedule a call and begin your journey.</p>
                <div className="flex flex-wrap justify-center mt-10 items-center gap-10">
                <Link to='/about-us' className="animate">
                    <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50 flex items-center gap-2 text-zinc-700'>Learn More<FaArrowRight /></button>
                </Link>
                </div>
            </div>
            <div className="flex-1 flex-col gap-10 lg:mt-28">
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative w-auto sm:w-[30rem] h-auto sm:h-[20rem] rounded-xl shadow-xl">
                    <CardItem translateZ="100" className="w-full">
                        <img
                        src={Image}
                        height="1000"
                        width="1000"
                        className="h-[20rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                        />
                    </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    </div>
  )
}