import './about.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  return (
    <div className='about'>
      <p>
        I'm looking for internships to develop myself much better in a company.
        I have always been open to learning, contact people to work together.

        <hr/>
        <div className='links'>
        <a className='link' href='https://www.linkedin.com/in/hasan-arpat-4ba6a3218/' target='_blank'><LinkedInIcon></LinkedInIcon>Linkedin</a>
        <a className='link' href='https://github.com/hasanarpat' target='_blank'><GitHubIcon></GitHubIcon>Github</a>
      </div>
      </p>
    </div>
  )
}

export default About