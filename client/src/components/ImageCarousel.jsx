import { Carousel } from 'flowbite-react';
import RestaurantImage from '../images/design-restaurant.png'

export default function ImageCarousel() {
  return (
    <div className="h-[20rem] mb-10 mt-10 w-[300px] sm:w-[500px] md:w-[700px] mx-auto bg-zinc-600 text-neutral-200 rounded-lg items-center">
      <Carousel slideInterval={5000}>
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
        <img src={RestaurantImage} alt="" />
      </Carousel>
    </div>
  )
}
