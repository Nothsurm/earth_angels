import Image from '../../images/lodge-render.jpeg'

export default function ParallaxImage() {

  return (
    <div className='hidden sm:flex justify-center w-full'>
      <div className="h-[500px] w-full">
        <img src={Image} alt="" className='w-full'/>
      </div>
    </div>
  )
}
