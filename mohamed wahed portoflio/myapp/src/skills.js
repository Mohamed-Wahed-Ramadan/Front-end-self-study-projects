import React from "react";
import "./skills.css";

const skillsData = [
  { img: "./img/html.png", text: "HTML" },
  { img: "./img/css.png", text: "CSS" },
  { img: "./img/js.png", text: "JavaScript" },
  { img: "./img/react.png", text: "React" },
  { img: "./img/nodejs.png", text: "Node.js" },
  { img: "./img/gsap.png", text: "GSAP" },
  { img: "./img/threejs.png", text: "Three.js" },
  { img: "./img/tailwindcss.png", text: "Tailwind" },
  { img: "./img/bootstrap.png", text: "Bootstrap" },
  { img: "./img/c++.png", text: "C++" },
  { img: "./img/firebase.png", text: "Firebase" },
  { img: "./img/adobe-photoshop.png", text: "Adobe Photoshop" },
  { img: "./img/redux.png", text: "Redux" },
  { img: "./img/jquery.png", text: "JQuery" },
  { img: "./img/nextjs.png", text: "Next.js" },
  { img: "./img/sql.png", text: "SQL" },
  { img: "./img/figma.png", text: "Figma" },
];

const softskills = [
  { text: "Active Listening" },
  { text: "Teamwork" },
  { text: "Reading" },
  { text: "Communication" },
  { text: "Problem Solving" },
  { text: "Adaptability" },
  { text: "Time Management" },
  { text: "Work Under Pressure" },
  { text: "Leadership" },
  { text: "Attention to Detail "},
  { text: "Self-Motivation" },
  { text: "Clean code writing" },
  { text: "Fast and efficient typing" },
  // { text: "JQuery" },
  // { text: "Next.js" },
  // { text: "SQL" },
  // { text: "Figma" },
];

const Skills = () => {
  return (
    <div name="Skills">
      <div className="hee">
        <div className="head">
          <h3>Skills</h3>
          <span></span>
        </div>
      </div>
        <br/>
        <h4 className="tec">Technical Skills</h4>
        <br/>
    <div className="skills-container container">
      {skillsData.map((skill, index) => (
        <section className="product" key={index}>
          <img className="pro-img" src={skill.img} alt={skill.text} loading="lazy" />
          <div className="circle-container">
            <svg viewBox="0 0 300 300" className="rotating-text">
              <defs>
                <path
                  id={`circlePath-${index}`}
                d="M150,150 m-110,0 a110,110 0 1,1 220,0 a110,110 0 1,0 -220,0"
                />
              </defs>
              <text>
                <textPath href={`#circlePath-${index}`}>
                  {skill.text}
                </textPath>
              </text>
            </svg>

          </div>
        </section>
      ))}
    </div>
    <br/>
        <h4 className="soft">Soft Skills</h4>
        <br/>
        <div className="s0 container">
      {softskills.map((soft, index) => (
        <div className="s">
          <div className="s2"></div>
          <div className="s1">
             <p>{soft.text}</p>
          </div>
        </div>
    ))}
    </div>
    </div>
  );
};

export default Skills;
