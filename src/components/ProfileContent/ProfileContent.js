import React from 'react'
import { Link } from 'react-scroll'
import '../ProfileContent/ProfileContent.css'
const ProfileContent = () => {
  return (
    <div className='profileContent'>
    <div className="objective">
          <p>
            I am the fresher in the corporative culture, but ready to faces the
            challenges, utilizing and gaining my technical skills, would like to
            work with highly respectable company which gives me an opportunity
            to use my skills for mutual growth and benefit of company and
            myself.<br/><br/>Strong foundation in Front End web development, including
            HTML, CSS, JavaScript and Bootstrap. Familiar with responsive
            design, web development best practices, and popular front-end
            framework React.
          </p>
        </div>
       <div className='profileContent_container'>
          <h1>Mr.Kodiyarasu</h1>
          <p>A professional Web Developer.</p>
          <a href='https://drive.google.com/file/d/1E8to5MU_q2PwgsStVKwd6bZer4D-HDNB/view?usp=sharing'>
            <button className='cvBtn'>Download CV</button>
          </a>
          <Link to='projects' smooth={true} duration={500}>
            <button className='workBtn'>My Work</button>
          </Link>
       </div>
       
    </div>
  )
}

export default ProfileContent