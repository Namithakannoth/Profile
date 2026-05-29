import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';




const Contact = () => {

   
  const [result, setResult] = useState("");
    
        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
            // formData.append("access_key", "5799c8b1-a7ef-4b1a-a0f5-f0d1ff61703b");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            setResult(data.success ? "Success!" : "Error");
            

        };


        return (
            <div id="contact" className='contact'>
                <div className="contact-title">
                    <h1>Get in touch</h1>
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <FontAwesomeIcon icon={faEnvelope} size="1x" color="white" className='contact-icon' />
                                <p>namithakv605@gmail.com </p>
                            </div>
                            <div className="contact-detail">
                                <FontAwesomeIcon icon={faPhone} size="1x" color="white" className='contact-icon' />
                                <p>+44 7768148686</p>

                            </div>
                            <div className="contact-detail">
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="white" className='contact-icon' />
                                <p> Coventry, UK </p>

                            </div>
                        </div>

                    </div>
                    <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor='name'>Your Name</label>
                            <input 
                                type='text' 
                                id='name'
                                name='name' 
                                placeholder='Enter your name'
                                required
                            />

                        <label htmlFor='email'>Your Email</label>
                            <input 
                                type='email' 
                                id='email'
                                name='email' 
                                placeholder='Enter your email'
                                required
                            />

                        <label htmlFor='message'>Write your message here</label>
                            <textarea 
                                id='message'
                                name='message' 
                                rows='8' 
                                placeholder='Enter your message'
                                required
                            />

                        <button type='submit' className="contact-submit">Submit now</button>
                        <p>{result}</p>

                        </form>
                </div>
            </div>
        )
    }


    export default Contact