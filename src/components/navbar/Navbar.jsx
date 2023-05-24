import './navbar.scss'
import Logo from "../../assets/favicon.ico"
import { Link } from 'react-router-dom'
import { useState } from 'react';
const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return()=>(window.onscroll==null);
    }
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className='wrapper'>
            <div className='left'>
                <Link to="/"><img src={Logo} alt='home' /></Link>
            </div>
            <div className='right'>
                <div className='items'>
                    <div className='item'>
                        <Link to="/" className='link'>Home</Link>
                    </div>
                    <div className='item'>
                        <Link to="projects" className='link'>Projects</Link>
                    </div>
                    <div className='item'>
                        <Link to="contact" className='link'>Contact</Link>
                    </div>
                    <div className='item'>
                        <Link to="about" className='link'>About</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar