import Image from '../images/house-image.jpg'
import { Parallax } from 'react-parallax'
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { MdPerson, MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div>
        <Parallax blur={2} strength={600} bgImage={Image}>
            <div className="w-full h-[600px] flex justify-center items-center">
                <h1 className='text-6xl font-bold text-center mt-20 text-white'>CONTACT US</h1>
            </div>
        </Parallax>
        <div className="flex bg-neutral-200 text-stone-700">
            <div className="flex flex-row max-w-6xl gap-20 mx-auto mt-20">
                <div className="flex-1">
                    <h1 className='font-bold text-3xl'>WE'RE READY, LET'S TALK.</h1>
                    <form className='mt-14 flex flex-col gap-4'>
                        <div>
                            <TextInput type="text" placeholder="Your Name" icon={MdPerson} required />
                        </div>
                        <div>
                            <TextInput type="email" placeholder='Email Address' icon={MdEmail} required />
                        </div>
                        <div className="">
                            <Textarea placeholder='Message' rows={4}/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">I Accept Your Terms & Conditions</Label>
                        </div>
                        <div className="">
                        <button className='uppercase bg-orange-400 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out delay-50'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className='font-bold text-3xl'>CONTACT INFO</h1>
                    <h2 className='font-bold text-xl'>Address</h2>
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
                <iframe width="1300" height="600" src="https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;coord=37.106581848850965, -8.140168604272148&amp;q=UALG%Gambelas%8005-139%Faro&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />
            </div>
        </div>
    </div>
  )
}
