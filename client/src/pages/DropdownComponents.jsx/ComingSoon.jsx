import { Parallax } from 'react-parallax'
import Image from '../../images/house-image.jpg'

export default function ComingSoon() {
  return (
    <div className='mt-32 text-stone-100'>
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="h-fit flex flex-col justify-center items-center relative mt-32 mb-32 max-w-3xl mx-auto text-center">
                <h2 className='font-bold text-xl'>Coming Soon...</h2>
                <h1 className='text-3xl font-bold text-center mt-10'>EARTH ANGELS TRANSFORMATIONAL WELLNESS
                <hr
                    style={{
                    background: 'orange',
                    color: 'orange',
                    borderColor: 'orange',
                    height: '2px',
                    width: '80px',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                    }}
                /></h1>
                <h2 className='font-bold text-xl mt-20'>A unique Transformational Spa Brand for Portugal. Focussed on International clients , our Destination Wellness Spas will attract guests year round.</h2>
                <h2 className='font-bold text-xl mt-10'>Watch this Space</h2>
            </div>
        </Parallax>
    </div>
  )
}
