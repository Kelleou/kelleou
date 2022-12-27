import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import kel3 from '../../assets/images/kel3.PNG'
import emailjs from '@emailjs/browser'
import {useState} from "react";
import { useRef } from 'react';
const Contact = () => {
    const [letterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_v71wvb7', 'template_ov6xngc', form.current, '1ucEZxxuRl5pw7u7h')
          .then(
            () => {
              alert('Message sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"CONTACT".split('')}
                        idx={1}
                        /> 
                    </h1>
                    <p>
                        If you a potential employer with an oportunity or a friend who wants to chat,
                        feel free to contact me using the form below!
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li >
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li >
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="CONTACT ME!" />
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>
                <img className="kel3-container" src={kel3} alt="logo" />
            </div>
        </>
    )
}

export default Contact