import { Parallax } from 'react-parallax'
import Image from '../../images/hero-bg-image.jpeg'

export default function Hero() {

  return (
    <div className=''>
        <Parallax blur={1} strength={600} bgImage={Image} bgImageStyle={{ width: "100%", height:'100%'}}>
            <div className="h-[600px] xl:min-h-screen flex justify-center items-center text-stone-200">
                <h1 className='uppercase font-bold text-center mt-40 lg:mt-10 relative text-4xl sm:text-5xl'>
                  <span className='title-1'>STEP INTO THE FUTURE</span>
                  <span className='title-2'> OF SUSTAINABLE</span>
                  <span className='title-3'> AFFORDABLE</span>
                  <span className='title-4'> LUXURY</span>
                </h1>
            </div>
        </Parallax>
    </div>
  )
}
