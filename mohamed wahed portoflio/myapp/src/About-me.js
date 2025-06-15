import './About-me.css';

function About() {
  return (
    <div name="about">
        <div className="head">
          <h3>About me</h3>
          <span></span>
        </div>
        <br/>
    <section className="about1">
      <div className="w22">
        <div className="my-img2">
          <img src="./img/moh.jpg" alt="mohamed wahed photo" loading="lazy"/>
        </div>
      </div>
      <div className="my-dis">
        {/* <div className="my-dis-con"> */}
          <h3>Professional Summary </h3>
          <p className='p2'>Detail-oriented and creative Front-End Developer with a solid foundation in communication engineering and a 
            strong passion for building modern, user-centric web applications. Proficient in HTML5, CSS3, JavaScript, and 
            React.js with hands-on experience developing responsive interfaces and dynamic components. Committed to 
            continuous learning and delivering high-quality solutions in collaborative team environments.
          </p>
          <p>
            Email: mohamed.wahed.work@gmail.com  <br/>
            phone: (+20) 01123002663 <br/>
            Address: Cairo ,Egypt<br/>
          </p>
        {/* </div> */}
      </div>

    </section>
    </div>

  );
}

export default About;
