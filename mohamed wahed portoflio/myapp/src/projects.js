import './projects.css';



const projects = [
  { videourl:"./img/Menu Restaurant.mp4",
    livedemo:"https://menu-restaurant-wahed.netlify.app/signup.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/Menu%20Restaurant",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap - Emailjs "
  },
  { videourl:"./img/v0.mp4",
    livedemo:"https://fanciful-bublanina-325d5c.netlify.app/home.html",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/The%20Market",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap "
  },
  { videourl:"./img/v1.mp4",
    livedemo:"https://thriving-gumption-303d40.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/Bootstap%26JavaScript",
    tools:" HTML - CSS - JavaScript - Media query - Bootstrap "
  },
  { videourl:"./img/XO.mp4",
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/XO",
    tools:" HTML - CSS - JavaScript - Media query "
  },
  { videourl:"./img/v4.mp4",
    livedemo:"https://subtle-fox-d4143a.netlify.app/",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/HTML5%26CSS3-media_query",
    tools:" HTML - CSS - Media query "
  },
  { videourl:"./img/v5.mp4",
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/HTML5%26CSS3-Project",
    tools:" HTML - CSS "
  },
  { videourl:"./img/v2.mp4",
    livedemo:"",
    github:"https://github.com/Mohamed-Wahed-Ramadan/Front-end-self-study-projects/tree/main/first%20project-HTML-CSS",
    tools:" HTML - CSS "
  },
  
];


function Projects() {
  return (
    <div name="Projects">
        <div className="head">
          <h3>Projects</h3>
          <span></span>
        </div>
        <br/>
        <div className="pro-con container">
            {projects.map((project, index) => (
            <section className="pro">
                <video src={project.videourl} controls></video>
                <div className="pro-btn">
                    <button onClick={() => window.open(project.livedemo, "_blank")}>Live Demo</button>
                    <button onClick={() => window.open(project.github, "_blank")}>Github</button>
                </div>
                <p>{project.tools}</p>
            </section>
            ))}
        </div>
    </div>

  );
}

export default Projects;
