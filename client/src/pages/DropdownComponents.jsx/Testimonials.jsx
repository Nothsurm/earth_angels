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
      <div className='flex justify-center flex-col mt-20 relative'>
        <h1 className='text-4xl font-bold mx-auto mb-10 uppercase'>What our clients say...
        <hr
            style={{
            background: 'orange',
            color: 'orange',
            borderColor: 'orange',
            height: '2px',
            width: '80px',
            position: 'absolute',
            top: '13%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
            }}
          />
        </h1>
        <div className="h-[32rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
