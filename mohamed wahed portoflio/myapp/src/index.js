import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Intro from './intro';
import About from './About-me';
import Education from './Education';
import Intern from './intern';
import Skills from './skills';
import Animations from './animations';
import Projects from './projects';
import Contact from './contact';
import AIChatBot from "./AIChatBot";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Intro/>
    <About/>
    <Education/>
    <Intern/>
    <Skills/>
    <Animations/>
    <Projects/>
    <Contact/>
    <AIChatBot/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
