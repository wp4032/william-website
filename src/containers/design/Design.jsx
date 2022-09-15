import React from 'react'
import './design.css';
import { Feature, ShowcasePopup } from '../../components'
import DDDZine from '../../assets/DreamsDontDie.pdf';
import DDDBike from '../../assets/DreamsDontDieBike.mp4';

const Design = () => {
  return (
    <div className="william__design-container">
      <div class="anchor" id="design"/>
      <div className="william__design-title">
        <h1>Design</h1>
        <h2>Magazines, photographs, designs by William Pan</h2>
      </div>

      <div>
        <Feature 
          title='Personal Website' 
          text='The website you are on right now made with React, Framer Motion, various Javascript Libraries. It was made to document the three sides of William (the globetrotter, the explorer, and the painter). '/>
        <div className="william__design-buttons">
          <a href="https://github.com/wp4032/personal-website">  <button className="william__design-linkedbutton"> GitHub </button>  </a>
        </div>
      </div>

      <div>
        <Feature 
          title='Dreams Don&#39;t Die Bicycle' 
          text='A vintage 1970&#39;s Centurion LeMans Mixte bicycle refurbrished, painted, and cleaned as the 2022 Dreams Don&#39;t Die Bicycle used for transport at Stanford University Campus.'/>
        <div className="william__design-buttons">
          <ShowcasePopup 
            buttonText='Video' 
            mp4={DDDBike} 
            alt='DDDBike'/>
        </div>
      </div>

      <div>
        <Feature 
          title='Dreams Don&#39;t Die' 
          text='A zine made in the summer of 2021 documenting the events and thoughts presented by William&#39;s alter-ego racing through a modern psychedelic iridescent metropolis.'/>
        <div className="william__design-buttons">
          <ShowcasePopup 
            buttonText='Excerpt of Zine' 
            pdf={DDDZine} 
            alt='DDDZine'/>
        </div>
      </div>
    </div>
  )
}

export default Design