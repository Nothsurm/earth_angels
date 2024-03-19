import { Carousel } from 'flowbite-react';
import ImageCarousel1 from '../images/img-carousel-1.jpg'
import ImageCarousel2 from '../images/bathroom-visualisations.jpeg'
import ImageCarousel3 from '../images/img-carousel-2.jpeg'
import ImageCarousel4 from '../images/img-carousel-3.jpg'
import ImageCarousel5 from '../images/design-livingroom.jpg'
import ImageCarousel6 from '../images/img-carousel-4.jpg'
import ImageCarousel7 from '../images/img-carousel-5.jpg'
import ImageCarousel8 from '../images/img-carousel-6.jpg'
import ImageCarousel9 from '../images/img-carousel-7.jpg'
import ImageCarousel10 from '../images/img-carousel-8.jpeg'
import ImageCarousel11 from '../images/img-carousel-9.jpeg'
import ImageCarousel12 from '../images/img-carousel-10.jpeg'
import ImageCarousel13 from '../images/img-carousel-11.jpeg'
import ImageCarousel14 from '../images/img-carousel-12.jpg'
import ImageCarousel15 from '../images/img-carousel-13.jpg'

export default function ImageCarousel() {

  return (
    <div className="h-[30rem] mb-10 mt-10 lg:w-[900px] mx-auto bg-zinc-600 text-neutral-200 rounded-lg items-center">
      <Carousel slideInterval={5000}>
        <img src={ImageCarousel1} alt="" />
        <img src={ImageCarousel2} alt="" />
        <img src={ImageCarousel3} alt="" />
        <img src={ImageCarousel4} alt="" />
        <img src={ImageCarousel5} alt="" />
        <img src={ImageCarousel6} alt="" />
        <img src={ImageCarousel7} alt="" />
        <img src={ImageCarousel8} alt="" />
        <img src={ImageCarousel9} alt="" />
        <img src={ImageCarousel10} alt="" />
        <img src={ImageCarousel11} alt="" />
        <img src={ImageCarousel12} alt="" />
        <img src={ImageCarousel13} alt="" />
        <img src={ImageCarousel14} alt="" />
        <img src={ImageCarousel15} alt="" />
      </Carousel>
    </div>
  )
}
