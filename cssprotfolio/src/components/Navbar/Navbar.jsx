import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import Options from '../../assets/options.png';

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h2 className='myname'> <span>Yash</span>wanth</h2>
        <div className="listitems">
          <Link to="about" smooth={true} duration={500}><h4>AboutMe</h4></Link>
          <Link to="project" smooth={true} duration={500}><h4>Projects</h4></Link>
          <Link to="contact" smooth={true} duration={500}><h4>ContactMe</h4></Link>
          <img className='image' src={Options} alt="Options" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
