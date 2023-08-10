import React, { useEffect, useState } from 'react';
import './skills.css';
import {
  photoshop,
  lightroom,
  illustrator,
  indesign,
  premiere,
  python,
  cplusplus,
  css,
  html,
  javascript,
  latex,
  numpy,
  opencv,
  electron,
  react,
  solidworks,
  matlab,
  ntopology
} from './imports.js';
import axios from 'axios';

const countAPI = process.env.REACT_APP_COUNT_API;
console.log(countAPI);
const COUNT_ENDPOINT = "https://api.countapi.xyz/hit/william-pan.com/" + countAPI;
console.log(COUNT_ENDPOINT);

const Skills = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(COUNT_ENDPOINT)
      .then(response => {
        setCount(response.data.value);
      })

  }, []);

  return (
    <div className="william__misc section__padding">
      <div className='william__skills'>

        <div className="william__skills-columns">
          <div className="william__skills-container">
            <h2>PROGRAMMING SKILLS</h2>
            <div className="william__skills-logos-container">
              <div className="william__skills-logos">
                <img src={python} alt="python" />
                <img src={cplusplus} alt="cplusplus" />
                <img src={electron} alt="electron" />
                <img src={react} alt="react" />
                <img src={css} alt="css" />
                <img src={html} alt="html" />
                <img src={javascript} alt="javascript" />
                <img src={latex} alt="latex" />
                <img src={numpy} alt="numpy" />
                <img src={opencv} alt="opencv" />
              </div>
            </div>
          </div>

          <div className="william__skills-container">
            <h2>ENGINEERING SKILLS</h2>
            <div className="william__skills-logos">
              <img src={solidworks} alt="solidworks" />
              <img src={matlab} alt="matlab" />
              <img src={ntopology} alt="ntopology" />
            </div>
          </div>

          <div className="william__skills-container">
            <h2>DESIGN SKILLS</h2>
            <div className="william__skills-logos">
              <img src={photoshop} alt="photoshop" />
              <img src={illustrator} alt="illustrator" />
              <img src={lightroom} alt="lightroom" />
              <img src={indesign} alt="indesign" />
              <img src={premiere} alt="premiere" />
            </div>
          </div>
        </div>

      </div>

      <div className="william__inspirations">
        <div className="william__inspirations-people">
          <h1> People who inspire William</h1>
          <div className="william__inspirations-people_container">
            <p>Alexandr Wang</p>
            <p>Bon Iver</p>
            <p>Claude Shannon</p>
            <p>David Packard</p>
            <p>Elon Musk</p>
            <p>Esteban Ocon</p>
            <p>Frank Ocean</p>
            <p>Kendrick Lamar</p>
            <p>Keith Rabois</p>
            <p>Hyunwoo Yuk</p>
            <p>Jamie XX</p>
            <p>Jen Hsun Huang</p>
            <p>Joseph DeSimone</p>
            <p>Josh Wolfe</p>
            <p>Leslie Groves</p>
            <p>Krishna Shenoy</p>
            <p>Max Verstappen</p>
            <p>Michael Jordan</p>
            <p>Morris Chang</p>
            <p>Ravi Gupta</p>
            <p>Sam Walton</p>
            <p>Tony Fadell</p>
            <p>Tyler, the Creator</p>
            <p>Vinod Khosla</p>
            <p>Zhenan Bao</p>
          </div>
        </div>

        <div className="william__inspirations-count">
          <h1> All-time Views: <b>{count}</b></h1> 
        </div>
      </div>
    </div>
  )
}

export default Skills