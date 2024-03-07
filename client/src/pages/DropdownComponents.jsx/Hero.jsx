import { Parallax } from 'react-parallax'
import Image from '../../images/luxury-lodge.jpeg'
import { TypewriterEffect } from "../../components/TypeWrites";

export default function Hero() {
  const words = [
    {
      text: "THE",
    },
    {
      text: "FUTURE",
    },
    {
      text: "OF",
    },
    {
      text: "SUSTAINABLE",
    },
    {
      text: "DESIGN",
    },
    {
      text: "&",
    },
    {
      text: "BUILD",
    },
  ];
  return (
    <div className=''>
        <Parallax blur={1} strength={600} bgImage={Image} bgImageStyle={{ width: "100%", height:'auto', marginTop: '180px'}}>
            <div className="h-[400px] lg:h-[600px] xl:min-h-screen flex justify-center items-center">
                <h1 className='uppercase font-bold text-center mt-40 lg:mt-10 relative'><TypewriterEffect words={words} />
                <hr
                    style={{
                    background: 'orange',
                    color: 'orange',
                    borderColor: 'orange',
                    height: '2px',
                    width: '140px',
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}
                    className='mt-10'
                /></h1>
            </div>
        </Parallax>
    </div>
  )
}
