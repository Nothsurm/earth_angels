import Image from '../../images/4-images-in-1.jpeg'

export default function ParallaxImage() {

  return (
    <div className='hidden sm:flex justify-center w-full'>
      <div className="h-fit w-full">
        <img src={Image} alt="" className='w-full'/>
      </div>
    </div>
  )
}
