import React from 'react'
import './science.css';
import { Feature, ShowcasePopup } from '../../components'
import KLAPposter from '../../assets/KLAPposter.pdf';
import HOAposter from '../../assets/HOAposter.pdf';
import HOApaper from '../../assets/HOApaper.pdf';
import MIXERposter from '../../assets/MIXERposter.pdf';


const Science = () => {
  return (
    <div className="william__science-container">
      <div class="anchor" id="science" />
      <div className="william__science-title">
        <h1>Science</h1>
        <h2>Inventions, builds, and research by William Pan</h2>
      </div>

      <div>
        <Feature 
          title='TBD' 
          position='Undergraduate Research Assistant @ Stanford University DeSimone Lab' 
          text='Coming soon...' />
      </div>

      <div>
        <Feature 
          title='Moonwalker Brain Computer Interface' 
          position='CS 107E Final Project @ Stanford University' 
          text='Inspired by CTRL Labs, Moonwalker reads EMG signals from the wrist to allow for seamless interaction between the real and digital world. Truly fullstack (designed wrist band, circuitry, backend control, frontend software).' />
          <a href="https://github.com/wp4032/cs107e-final-project/tree/master">  <button className="william__ventures-linkedbutton"> Github </button>  </a>
      </div>

      <div>
        <Feature 
          title='Kinesthetic Lattice Programmable (KLaP) Tape' 
          position='Undergraduate Research Fellow @ Stanford University Wu Tsai Human Performance Alliance & DeSimone Lab' 
          text='Kinesthetic latticed programmable (KLaP) tape aims to solve patellofemoral pain through its customized and programmable mechanical properties and robust adhesion with triggerable on-demand detachment for after use.' />
        <div className="william__science-buttons">
          <ShowcasePopup 
            buttonText='Poster' 
            pdf={KLAPposter} />
        </div>
      </div>

      <div>
        <Feature 
          title='Injection Continuous Liquid Interface Production' 
          position='Undergraduate Research Assistant @ Stanford University DeSimone Lab' 
          text='Injection continuous liquid interface production accelerates 3D printing speeds 5 to 10-fold over current methods, can utilize more viscous resins, and can readily pattern an object with different resins.'/>
        <div className="william__science-buttons">
          <ShowcasePopup 
            buttonText='Paper' 
            pdf={KLAPposter}/>
        </div>
      </div>

      <div>
        <Feature 
          title='Biocompatible Hydrogel Ostomy Adhesive' 
          position='Independent Researcher @ Northwood High School' 
          text='The hydrogel ostomy adhesive (HOA) is a novel hydrogel patch that strongly adheres and creates a fluid-tight seal to prevent ostomy bag leaks that plauge almost all ostomy patients.'/>
        <div className="william__science-buttons">
          <ShowcasePopup 
            buttonText='Poster' 
            pdf={HOAposter} />
          <ShowcasePopup 
            buttonText='Paper' 
            pdf={HOApaper} />
        </div>
      </div>

      {/* <div>
        <Feature 
          title='Herringbone Microfluidic Mixer' 
          position='Research Intern @ USC SHINE & USC Laboratory of Living Systems Engineering' 
          text='Diving into the vast field of tissue engineering and microfluidic devices, William made a herringbone microfluidic mixer that helps create homogenous mixtures at small volumes.'/>
        <div className="william__science-buttons">
          <ShowcasePopup 
            buttonText='Poster' 
            pdf={MIXERposter} />
        </div>
      </div> */}
    </div>
  )
}

export default Science