import './Education.css';

function Education() {
  return (
     <section className="container" name="Education">
        <div className="head">
          <h3>Education</h3>
          <span></span>
        </div>
        <br/>
        <div className="v">
          <div className="v2">
            <div className="v1"></div>
            <span>Education</span>
            <p>The Higher Institute of Engineering & Technology – Luxor <p>( 2018 - 2023 )</p></p>
            <p>Bachelor’s in Communications & Electronics <p>Grade : Very Good</p> </p>
            <hr/>
            <p>Graduation Project : ROV (Remotely Operated Underwater Vehicle) <p>Grade :  Excellent</p></p>
            <p> Designed and developed a functional prototype of a Remotely Operated Underwater Vehicle (ROV) 
              capable of performing tasks in submerged environments. </p>
            <p> The project demonstrated knowledge of embedded systems, sensor interfacing, and remote control 
              technologies, bridging engineering principles with real-world problem-solving applications. </p>
            <p> The project was awarded funding through the ITAC program, offered by ITIDA.
              It also received valuable support from Al-Gezira Club in Luxor and Talae El Nasr Club in Luxor</p>
          </div>
          <div className="rov-img">
            <img src="./img/rov.jpg" alt="mohamed wahed graduation project" loading="lazy"/>
          </div>
        </div>

    </section>
  );
}

export default Education;
