import { Parallax } from 'react-parallax'
import Image from '../../images/hero-image.jpeg'
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
    <div>
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="min-h-screen flex justify-center items-center">
                <h1 className='uppercase text-white text-5xl font-bold text-center mt-10 relative'><TypewriterEffect words={words} />
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
