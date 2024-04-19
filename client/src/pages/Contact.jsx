import Image from '../images/mockup-office-sign.jpg'
import { Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { MdPerson, MdEmail } from "react-icons/md";
import Header from '../components/Header';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Contact() {
    const form = useRef();
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
      e.preventDefault();

      if (isChecked) {
        setLoading(true)
        await emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            setLoading(false)
            toast.success('Email Successfully Sent', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                theme: "dark"
            })
          },
          (error) => {
            setLoading(false)
            toast.error('Email not sent, please try again', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                theme: "dark"
            })
          },
        );
      } else {
        toast.error('Please accept our Terms & Conditions', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            theme: "dark"
        })
      }
    };

    const handleChange = event => {
        if (event.target.checked) {
          setIsChecked(true)
        } else {
          setIsChecked(false)
        }
      };

      const myStyle = {
        backgroundImage: `linear-gradient(to left, rgb(0 0 0), transparent), url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed'
      }

  return (
    <div>
        <Header />
          <div 
            className="w-full h-[600px] sm:min-h-screen flex justify-center items-center text-stone-100" 
            style={myStyle}
          >
            <div className="flex flex-col md:flex-row max-w-7xl gap-96 mx-auto mt-20">
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
                            <Checkbox id="checkbox" value={isChecked} onChange={handleChange}/>
                            <Label htmlFor="checkbox" className='flex items-center gap-1'>
                              <p className='text-stone-100'>I Accept Your </p>
                              <Link to='/terms-conditions' className='text-blue-700 hover:underline'>Terms & Conditions</Link>
                            </Label>
                        </div>
                        <div className="">
                        <button type='submit' className='uppercase bg-zinc-400 hover:bg-zinc-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition ease-in-out delay-50'>{loading ? 'Sending...' : 'Send Message'}</button>
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
    </div>
  )
}
