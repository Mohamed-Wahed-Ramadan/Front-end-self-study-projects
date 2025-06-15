// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

// import 'bootstrap-icons/font/bootstrap-icons.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // تحقق من تفضيلات المستخدم المحفوظة
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
      document.body.classList.toggle('dark-mode', JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <button 
      className="dark-btn" 
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <i className="bi bi-sun-fill fs-5"></i> 
      ) : (
        <i className="bi bi-moon-fill fs-5"></i> 
      )}
    </button>
  );
}

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <Link to="MWK" spy={true} smooth={true} duration={500} activeClass="aactive"><img src="./logo192.png" alt="mohamed logo" /></Link>

        </div>
        <div className="nav-con">
          <button className="nav-btn" onClick={toggleNav}>
           <span className='span-mohamed'>Mohamed Wahed</span> <i className="bi bi-list fs-1" ></i>
          </button>
          <ul className="items-nav">
             <Link to="about" spy={true} smooth={true} duration={500} activeClass="active"><li>About me</li></Link>
            <Link to="Education" spy={true} smooth={true} duration={500} activeClass="active"><li>Education</li></Link>
            <Link to="Internships" spy={true} smooth={true} duration={500} activeClass="active"><li>Internships</li></Link>
            <Link to="Skills" spy={true} smooth={true} duration={500} activeClass="active"><li>Skills</li></Link>
            <Link to="Projects" spy={true} smooth={true} duration={500} activeClass="active"><li>Projects</li></Link>
            <Link to="Contact" spy={true} smooth={true} duration={500}  offset={-200} activeClass="active"><li>Contact</li></Link>
          </ul>
        </div>
        <DarkModeToggle />
      </div>

      {showNav && (
        <div className="navv">
          <ul className="nav-items">
             <Link to="about" spy={true} smooth={true} duration={500} activeClass="active"><span>About me</span></Link><hr/>
            <Link to="Education" spy={true} smooth={true} duration={500} activeClass="active"><span>Education</span></Link><hr/>
            <Link to="Internships" spy={true} smooth={true} duration={500} activeClass="active"><span>Internships</span></Link><hr/>
            <Link to="Skills" spy={true} smooth={true} duration={500} activeClass="active"><span>Skills</span></Link><hr/>
            <Link to="Projects" spy={true} smooth={true} duration={500} activeClass="active"><span>Projects</span></Link><hr/>
            <Link to="Contact" spy={true} smooth={true} duration={500}  offset={-200} activeClass="active"><span>Contact</span></Link>
          </ul>
        </div>
      )}
    </nav>

    
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
  }



export default App;