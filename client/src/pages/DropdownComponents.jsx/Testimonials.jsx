import { MovingCards } from "../../components/MovingCards";

export default function Testimonials() {

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet. Sed Quis mollitia et consequatur accusamus qui porro praesentium? Ad perspiciatis voluptas aut earum debitis eum rerum corrupti ut eius error non atque nobis. Ut nobis iusto ut galisum consequatur et autem odit aut minima dolores vel fugiat quidem. Ut minima alias et voluptas fugiat vel quaerat voluptatem eos deleniti quaerat et impedit mollitia et numquam autem.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className='mt-32'>
      <div className='flex justify-center flex-col mt-20'>
        <h1 className='text-4xl font-bold mx-auto mb-10 uppercase'>What our clients say...</h1>
        <div className="h-[32rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <MovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}
