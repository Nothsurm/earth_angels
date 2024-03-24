import Image from '../images/house-image.jpg'
import { Parallax } from 'react-parallax'
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { MdPerson, MdEmail } from "react-icons/md";
import Header from '../components/Header';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
          publicKey: VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div>
        <Header />
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="w-full h-[600px] flex justify-center items-center">
                <h1 className='text-6xl font-bold text-center mt-20 text-white'>CONTACT US</h1>
            </div>
        </Parallax>
        <div className="flex text-stone-700">
            <div className="flex flex-col md:flex-row max-w-6xl gap-20 mx-auto mt-20">
                <div className="flex-1  mr-2 ml-2 sm:ml-0 sm:mr-0">
                    <h1 className='font-bold text-3xl'>WE'RE READY, LET'S TALK.</h1>
                    <form className='mt-14 flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
                        <div>
                            <TextInput type="text" placeholder="Your Name" icon={MdPerson} name="user_name" required />
                        </div>
                        <div>
                            <TextInput type="email" placeholder='Email Address' name="user_email" icon={MdEmail} required />
                        </div>
                        <div className="">
                            <Textarea placeholder='Message' rows={4} name="message" required />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">I Accept Your Terms & Conditions</Label>
                        </div>
                        <div className="">
                        <button type='submit' className='uppercase bg-zinc-400 hover:bg-zinc-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition ease-in-out delay-50'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 flex flex-col gap-4 mr-2 ml-2 sm:ml-0 sm:mr-0">
                    <h1 className='font-bold text-3xl'>CONTACT INFO</h1>
                    <h2 className='font-bold text-xl mt-10'>Address</h2>
                    <p>FemalEvolution Unipessoal Lda, UALG Gambelas PAV B1, 8005-139, FARO</p>
                    <h2 className='font-bold text-xl'>Email Us</h2>
                    <p>contact@earth-angels.org</p>
                    <h2 className='font-bold text-xl'>Call Us</h2>
                    <p>+351 920 512 694</p>
                    <h2 className='font-bold text-xl'>Follow Us - Coming Soon</h2>
                </div>
            </div>
        </div>
        <div className="flex justify-center bg-neutral-200">
            <div className="mt-20">
                <iframe width="1300" height="600" src="https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;coord=37.106581848850965, -8.140168604272148&amp;q=UALG%Gambelas%8005-139%Faro&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='w-[17rem] h-[17rem] sm:w-[30rem] sm:h-[28rem] md:w-[50rem] md:h-[40rem] lg:w-[60rem] xl:w-[80rem]'></iframe><br />
            </div>
        </div>
    </div>
  )
}
