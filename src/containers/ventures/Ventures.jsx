import React from 'react'
import './ventures.css';
import { Feature, ShowcasePopup } from '../../components'
import hh20recap from '../../assets/healthhacks2020-recap.pdf';
import hh21recap from '../../assets/healthhacks2021-recap.pdf';
import hh22recap from '../../assets/healthhacks2022-recap.jpg';
import hh23recap from '../../assets/healthhacks2023-recap.pdf';


const Ventures = () => {
  
  return (
    <div className="william__ventures-container">
      <div class="anchor" id="ventures" />
      <div className="william__ventures-title">
        <h1>Ventures</h1>
        <h2>Projects, organizations, and ideas of William Pan</h2>
      </div>
      <div>
        <Feature 
          title='TUNL Company' 
          position='The Wright Brothers of Ground Breaking Technology'
          text='Coming soon ...'  />
      </div>
      <div>
        <Feature 
          title='health{hacks} Hackathon' 
          position='Co-Founder & Chief Executive Officer' 
          text='health{hacks} is a 48 hour healthcare innovation event dedicated to connecting people from around the world to change the world. Our goal is to bring people from a wide variety of backgrounds and fields to provide new perspectives and collaborate on projects.' link='https://health-hacks.tech/'/>
        <div className="william__ventures-buttons">
          <ShowcasePopup 
            buttonText='health{hacks} 2023' 
            pdf={hh23recap} 
            alt='health{hacks} 2023'/>
          <ShowcasePopup 
            buttonText='health{hacks} 2022' 
            img={hh22recap} 
            alt='health{hacks} 2022'/>
          <ShowcasePopup 
            buttonText='health{hacks} 2021' 
            pdf={hh21recap} 
            alt='health{hacks} 2021'/>  
          <ShowcasePopup 
            buttonText='health{hacks} 2020' 
            pdf={hh20recap} 
            alt='health{hacks} 2021'/> 
          <a href="https://joinhealthhacks.com/">  <button className="william__ventures-linkedbutton"> Website </button>  </a>
          <a href="https://www.instagram.com/healthhacks.tech/?hl=en">  <button className="william__ventures-linkedbutton"> Instagram </button>  </a>
          <a href="https://twitter.com/joinhealthhacks">  <button className="william__ventures-linkedbutton"> Twitter </button>  </a>
        </div>
      </div>
    </div>
  )
}

export default Ventures