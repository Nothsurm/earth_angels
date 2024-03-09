import { Carousel } from 'flowbite-react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {

  return (
    <div className='mt-32'>
      <div className='flex justify-center flex-col mt-20 animate'>
        <h1 className='text-4xl font-bold mx-auto mb-10 uppercase'>What our clients say...</h1>
        <div className="h-[16rem] mb-10 mt-10 w-[700px] mx-auto bg-zinc-600 text-neutral-200 rounded-lg items-center">
            <Carousel slideInterval={5000}>
              <p className='p-16 text-xs sm:text-base'><FaQuoteLeft className='inline text-zinc-300'/> Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam <FaQuoteRight className='inline text-zinc-300'/><br></br><br></br><span className='font-bold text-xl'>- Name. G</span></p>
              <p className='p-16 text-xs sm:text-base'><FaQuoteLeft className='inline text-zinc-300'/> Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem. <FaQuoteRight className='inline text-zinc-300'/><br></br><br></br><span className='font-bold text-xl'>- Name. G</span></p>
              <p className='p-16 text-xs sm:text-base'><FaQuoteLeft className='inline text-zinc-300'/> Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem. <FaQuoteRight className='inline text-zinc-300'/><br></br><br></br><span className='font-bold text-xl'>- Name. G</span></p>
            </Carousel>
        </div>
      </div>
    </div>
  )
}
