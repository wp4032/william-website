import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import './footer.css';
import logo from '../../assets/logo white.png';
import { instagram, linkedin, facebook, spotify, twitter } from './imports.js'

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqrjgkr");
  if (state.succeeded) {
    return <p className="william__footer-content__inputtext">Thanks for submitting!</p>;
  }

  return (
    <form className="william__footer-content__input" onSubmit={handleSubmit}>
      <input id="text" type="text" name="text" placeholder="How do you want to change the world?"></input>
      <ValidationError
        prefix="Text"
        field="text"
        errors={state.errors}
      />
      <motion.button 
        type="submit" 
        disabled={state.submitting}
        whileHover={{ scale: 1.05 }}
        whileTap = {{ scale: 0.95 }}> Contact </motion.button>
    </form>
  )
}

const Footer = () => {

  return (
    <div className="william__footer section__padding">
      <div className="william__footer-heading">
        <h1>Let's change the world together.</h1>
        <ContactForm />
      </div>
      <div className="william__footer-links">
        <div className="william__footer-links_logo">
          <img src={logo} alt="logo"></img>
          <p>Email: williampan@stanford.edu <br />
            Phone: (714) 633 2888</p>
        </div>
        <div className="william__footer-links_container">
          <div className="william__footer-links_div">
            <h4>Organizations</h4>
            <a href="https://health-hacks.tech/"> <p>health&#123;hacks&#125;</p> </a>
            <a href="https://desimonegroup.stanford.edu/"> <p>DeSimone Lab @ Stanford University</p> </a>
          </div>
          <div className="william__footer-links_div">
            <h4>Social</h4>
            <div className='william__footer-links_social'>
              <a href='https://www.linkedin.com/in/-william-pan/'> <img src={linkedin} alt='linkedin' /> </a>
              <a href='https://open.spotify.com/user/wp4032?si=3b1d8a1830734ef6'> <img src={spotify} alt='spotify' /> </a>
              <a href='https://www.instagram.com/thewilliampan/?hl=en'> <img src={instagram} alt='instagram' /> </a>
              <a href='https://www.facebook.com/wp4032/'> <img src={facebook} alt='facebook' /> </a>
              <a href='https://twitter.com/williampan4032?lang=en'> <img src={twitter} alt='twitter' /> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="william__footer-copyright">
        <p>Copyright © 2022 William Pan. All rights reserved.</p>
      </div>


    </div>
  )
}

export default Footer