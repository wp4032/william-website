import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './news.css';
import { motion } from 'framer-motion';



const News = () => {

  // const [width, setWidth] = useState(0);
  const carousel = useRef();
  const outercarousel = useRef();

  // useEffect(() => {
  //   function handleWidth() {
  //     setWidth(carousel.current.scrollWidth - outercarousel.current.offsetWidth);
  //   }

  //   handleWidth();
    
  //   window.addEventListener('resize', function() {
  //     handleWidth()})
    
  //   return () => {
  //     window.removeEventListener('resize', function() {
  //       handleWidth()});
  //   };
  // }, []);


  return (
    <div className='william__news section__padding'>
      <div class="anchorNews" id="news" />
      <div className="william__news-title">
        <h1>News</h1>
      </div>
        
      <div ref={outercarousel} className="william__news-container" >
        <motion.div className='william__news-carousel'>
          <motion.div 
            ref={carousel}
            // dragDirectionLock 
            scroll="x" 
            // drag="x"
            // whileTap={{cursor: "grabbing"}}
            // dragConstraints={{ right: 0, left: -width }} 
            className='william__news-inner-carousel'>
            
            {/* Wu Tsai Poster Session */}
            <motion.div className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews10" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>August 24, 2022</p>
                    <h3>KLaP Tape Wu Tsai Human Performance Alliance Presentation</h3>
                  </div>
                  <div className="spacer"/>
                  <div>
                    <p>After 10 weeks of tireless research, prototyping, and coding, William presented his work over the summer of building a novel Kinesthesiology Latticed Programmable (KLaP) tape in the DeSimone Lab with Gloria Chyr. </p>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Healthhacks 2023 */}
            <motion.div className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews9" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>August 5, 2022</p>
                    <h3>health&#123;hacks&#125; 2023 First In-Person Event at Stanford University</h3>
                  </div>
                  <div className="spacer"/>
                  <div>
                    <p>William helped organize health&#123;hacks&#125; at Stanford University with $3000+ given in cash prizes and 200 participant sign-ups. Our event had speakers, workshops, and panels from industry, medicine, and venture capital to connect our participants to revolutionize the healthcare industry.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Wu Tsai Human Performance */}
            <motion.div className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews8" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>March 15, 2022</p>
                    <h3>Wu Tsai Human Performance Undergraduate Research Scholar</h3>
                  </div>
                  <div className="spacer"/>
                  <div>
                    <p>William was chosen as a Wu Tsai Human Performance Undergraduate Research Scholar and will participate in research over the summer with the DeSimone Lab working on novel solutions to solve patellofemoral pain.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* DeSimone Lab */}
            <motion.div className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews7" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>October 1, 2021</p>
                    <h3>DeSimone Lab at Stanford University</h3>
                  </div>
                  <div className="spacer"/>
                  <div>
                    <p>William joined the DeSimone Lab as an undergraduate researcher to work on microneedle designs for vaccine and drug delivery as well as multi-material 3d printing for stretchable, conductive, and magnetic composite materials.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews6" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>June 20, 2021</p>
                    <h3>hackfrom&#123;home&#125; Healthcare Innovation Event 2021</h3> </div>
                  <div className="spacer"/>
                  <div>
                    <p>William returned to plan the virtual healthcare hackathon that created solutions tackling the healthcare industry. The event had over 350 attendees.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews5" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>October 9, 2020</p>
                    <h3>First Authored Paper, Bicompatible Hydrogel Ostomy Adhesive, Published.</h3> </div>
                  <div className="spacer"/>
                  <div>
                    <p>William’s work is published in the peer-reviewed journal Medical Devices and Sensors with the help of the co-authors, Dr. Beverly Matsuda Ph.D (Northwood High School) and Dr. Hyunwoo Yuk Ph.D (Massachusetts Institute of Technology)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div   className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews4" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>October 5, 2020</p>
                    <h3>1st Place with, Smart Sock, at MIT GrandHack Boston 2020</h3> 
                  </div> 
                  <div className="spacer"/>
                  <div>
                    <p>Recently, William attended MIT Hacking Medicine GrandHack virtually in the digital measures of activity track where his team created Smart Sock, a project that tracks blood flow and steps for peripheral artery disease patients. The team won 1st place in the track.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div   className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews3" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>May 11, 2020</p>
                    <h3>Regeneron ISEF Finalist, 1st Place at Orange County and IUSD Science Fair</h3> 
                  </div>
                  <div className="spacer"/>
                  <div>
                    <p>William recently won 1st place at the Orange County Science & Engineering Fair (OCSEF) in the Applied Mechanics Category. He was also awarded a special award by the American Chemical Society. Lastly, he was named one of the four students as a Regeneron ISEF finalist.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div   className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews2" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>October 5, 2019</p>
                    <h3>Nature’s Calling at MIT GrandHack San Francisco</h3> 
                  </div>
                  <div className="spacer"/>
                  <div>
                    <p>William attended MIT Hacking Medicine GrandHack at UCSF. Together with Leslie Fuchs M.D., Claire Thomas ph.D., Prabudhya Bhattacharyya, and Marcus Chao, William helped create Nature’s Calling, a company focused on creating reusable and leak detecting ostomy bags.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div   className='william__news-item'>
              <div className="william__blog-container_article">
                <div className="william__blog-container_header colornews1" />
                <div className="william__blog-container_article-content">
                  <div>
                    <p>August 4, 2019</p>
                    <h3>Team Ross at MIT GrandHack Washington DC</h3> </div>
                  <div className="spacer"/>
                  <div>
                    <p>William attended MIT Hacking Medicine GrandHack at the Samsung Solutions Center at Washington D.C. In the rare diseases track, his team formed Team Ross, a project that detects multiple different arrhythmias using a Samsung Galaxy Watch.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default News




// <motion.div   className='william__news-item'>
//               <div className="william__blog-container_article">
//                 <div className="william__blog-container_header" />
//                 <div className="william__blog-container_article-image">
//                   <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/J_Dilla_James_Yancy.jpg" alt="alt" />
//                 </div>
//                 <div className="william__blog-container_article-content">
//                   <div>
//                     <p>test</p>
//                     <h3>test5</h3>
//                     <p>test</p>
//                   </div>
//                 </div>
//               </div>

//             </motion.div>