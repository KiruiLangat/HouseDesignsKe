import './ContactUs.css'
import { Link, useNavigate } from 'react-router-dom'

import React, {useState} from 'react'
import Header from './Header'
import '@fontsource/poppins'
import Footer from './Footer'
import Calendly from './Calendly' 
import callicon from './images/callicon.svg'
import emailicon from './images/emailicon.svg'
import whatsappicon from './images/whatsappicon.svg'

const style = {
  fontFamily: 'Poppins'
}



export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();

    try{
        const response = await fetch('http://192.168.100.7:5000/api/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        

        if (!response.ok) {
          throw new Error('HTTPS error' + response.status);
        }
        // alert('Form submitted successfully');
        
        // const data = await response.json();
        // if (data.message === 'Form submitted successfully') {
          
          
        // } else {
        //   console.log('Form Submission Page failed');
        // }
      console.log('Navigating to submission page')
      navigate('/submission-page'); 
      
        
    } catch (error) {
      console.log('Form submission failed', error);
    }
  
  };

  return (
    <div className='contact-container' style={style}>
      <div className='contact-header'>
        <Header />
      </div>
      <div className='contact-welcome'>
        <h1>Get in touch with us...</h1>
        <p>Reach out to us and let's create something extraordinary together</p>
      </div>
      <div className='contact-us'>
        <div className='appointment'>
          <h2>Book An Appointment</h2>
          <Calendly />
        </div>
        <div className='contact-info'>
          <div className='our-contacts'>
            <h2>How to reach us:</h2>
            <div className='call'>
              <img src = {callicon} alt='mobile-icon'/>
              <h3>Call us</h3>
              <p>+254 710 478 088</p>
            </div>
            <div className='email'>
              <img src = {emailicon} alt='email-icon'/>
              <h3>Email</h3>
              <p>housedesignske@gmail.com</p>
            </div>
            <div className='whatsapp'>
              <img src = {whatsappicon} alt='whatsapp-icon' />
              <h3>WhatsApp</h3>
              <a href="https://wa.me/+254710478088" target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp 
              </a>
            </div>
          </div>
          <div className='form'>
            <h2>Start the conversation</h2>
            <form onSubmit={handleSubmit}>
              <h3>*Name:</h3>
              <input type='text' name='name' placeholder='' value={form.name} onChange={handleChange} required />
              <h3>*Email Address:</h3>
              <input type='email' name='email' placeholder='' value={form.email} onChange={handleChange} required />
              <h3>*Phone Number:</h3>
              <input type='number' name='number' placeholder='' value={form.number} onChange={handleChange} required />
              <h3>*Message:</h3>
              <textarea name='message' placeholder='Leave a message' value={form.message} onChange={handleChange} required />
              <button type='submit'>Submit</button>
              <Link to='/contact-us/submission'></Link>
          </form>
          </div>
           

          
          
        </div>
      </div>
        
      
      <Footer />
      

    </div>
  )
}
