import React from 'react'
import { Element } from 'react-scroll'
import image from '../assets/giphy.gif'
import { LinearProgress } from '@material-ui/core'
import '../SkillContainer/SkillContainer.css'
const SkillContainer = () => {
  return (
    <div>
        <Element className='skillContainer' id='skills'>
            <div className='skillContainer_Text'>
                <h2>SKILLSET</h2>
                <div className='skillContainer_skillset'>
                  <h5>HTML-5</h5>
                  <div className='skillContainer_slider skillContainer_slider1'>
                    <LinearProgress variant='determinate' value={95}/>
                  </div>
                </div>
                <div className='skillContainer_skillset'>
                  <h5>CSS-3</h5>
                  <div className='skillContainer_slider skillContainer_slider2'>
                    <LinearProgress variant='determinate' value={90}/>
                  </div>
                </div>
                 <div className='skillContainer_skillset'>
                  <h5>BOOTSTRAP-4.5</h5>
                  <div className='skillContainer_slider skillContainer_slider3'>
                    <LinearProgress variant='determinate' value={93}/>
                  </div>
                </div>
                <div className='skillContainer_skillset'>
                  <h5>JAVASCRIPT</h5>
                  <div className='skillContainer_slider skillContainer_slider4'>
                    <LinearProgress variant='determinate' value={80}/>
                  </div>
                </div>
                 <div className='skillContainer_skillset'>
                  <h5>REACT JS</h5>
                  <div className='skillContainer_slider skillContainer_slider5'>
                    <LinearProgress variant='determinate' value={70}/>
                  </div>
                </div>
                 <div className='skillContainer_skillset'>
                  <h5>EXPRESS JS</h5>
                  <div className='skillContainer_slider skillContainer_slider6'>
                    <LinearProgress variant='determinate' value={70}/>
                  </div>
                </div>
                   <div className='skillContainer_skillset'>
                  <h5>MONGO DB</h5>
                  <div className='skillContainer_slider skillContainer_slider7'>
                    <LinearProgress variant='determinate' value={80}/>
                  </div>
                </div>
               
            </div>
             <div className='skillContainer_Img'>
               <img src={image} alt=''/>
            </div>

        </Element>
    </div>
  )
}

export default SkillContainer