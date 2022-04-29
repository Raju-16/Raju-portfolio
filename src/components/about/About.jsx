import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="imgDiv">
        <img src="assets/Raju.png" />
      </div>
      <div className="aboutPara">
        <h1 className="mainHeading">About Me</h1>
        <p>
          Hey, I am Raju Kumar Prajapati. I'm an aspiring Web Developer. I have
          a passion for building amazing web applications.
        </p>
        <p>
          I am skilled in developing web apps using MERN stack and I've build
          many amazing projects which you can see below.
        </p>
        <p>Apart from coding, I love:</p>
        <ul className="hobbiesUl">
          <li>🎧 Listening to music</li>
          <li>📝 Solving DS Algo</li>
        </ul>
        <h4 className="resumeLink">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1MMe7gEua0uRQRQE5Kw572jqS3vfHhjAm/view?usp=sharing"
          >
            Resume
          </a>
        </h4>
      </div>
    </div>
  );
}
