import React from 'react'
import './experience.css';
import { BsPatchCheckFill , BsBootstrapFill } from 'react-icons/bs';
import { ImHtmlFive } from 'react-icons/im';
import { GrReactjs } from 'react-icons/gr';
import{ SiCss3 , SiTailwindcss , SiMongodb , SiPhp , SiMysql , SiPython , SiJava , SiJavascript } from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
         <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <ImHtmlFive className='experience__details-icon'/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <SiCss3  className='experience__details-icon'/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <GrReactjs className='experience__details-icon'/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <SiTailwindcss className='experience__details-icon'/>
                  <div>
                  <h4>Taliwand</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>


              <article className='experience__details'>
                  <SiJavascript className='experience__details-icon'/>
                  <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>


              <article className='experience__details'>
                  <BsBootstrapFill className='experience__details-icon'/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>
            </div>
         </div>


          {/* END OF BACKEND */}
         <div className="experience__backend">
         <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <SiMongodb className='experience__details-icon'/>
                  <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <SiPhp className='experience__details-icon' />
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <SiMysql className='experience__details-icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <SiPython className='experience__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>

              <article className='experience__details'>
                  <SiJava className='experience__details-icon'/>
                  <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                  </div>

              </article>
            </div>


         </div>

      </div>
    </section>
  )
}

export default Experience