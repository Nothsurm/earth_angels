import { Parallax } from 'react-parallax'
import Image from '../../images/house-image.jpg'

export default function Hero() {
  return (
    <div>
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="min-h-screen flex justify-center items-center">
                <h1 className='text-white text-5xl font-bold text-center mt-10 relative'>Specialists in Interior & Exterior Design<br></br> 
                and Sustainable Rural Tourism<br></br> 
                Solutions
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
                    className='mt-10'
                /></h1>
            </div>
        </Parallax>
    </div>
  )
}
