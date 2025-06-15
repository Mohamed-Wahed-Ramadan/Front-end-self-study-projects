import './intro.css';
import VerticalCarousel from './Vertical Carousel React';


function Intro() {
  return (
    <div className="About" name="MWK">
         <section className="about container ">
            <div className="about-me">
              <h4>Hello,</h4>
              <h2 id="ltr-trans">I'm Mohamed Wahed Ramadan</h2>
              <h3>Frontend Developer</h3>
              <div class="icons">
                <a href="https://www.facebook.com/mhmd.whyd.168757/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook fs-1 mx-2"></i></a>
                <a href="https://www.linkedin.com/in/mohamed-wahed-ramadan/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin fs-1 mx-2"></i></a>
                <a href="https://github.com/Mohamed-Wahed-Ramadan" target="_blank" rel="noopener noreferrer"><i class="bi bi-github fs-1 mx-2"></i></a>
                <a href="https://codeforces.com/profile/Zein_MWK" target="_blank" rel="noopener noreferrer"><i class="bi bi-code-square fs-1 mx-2"></i></a>
                <button className="download-btn"><a href="./img/Mohamed_Wahed_CV_Frontend_developer.pdf" download >Download CV</a></button>
              </div>
            </div>
            <div className="my-img">
              <VerticalCarousel/>
            </div>
        
          </section>
   

    </div>
  );
}

export default Intro;
