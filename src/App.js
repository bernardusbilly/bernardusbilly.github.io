import './style.scss';
import 'animate.css';

function App() {
  return (
    <div classNameName="app">
      <div id="introduction">
        <div className="header-wrapper">
          <span className="header">Bernardus Billy Tjiptoning</span>
          <span className="sub-header">
            Engineering Manager @
            <a href="https://www.kargo.tech" target="_blank" rel="noreferrer noopener">Kargo Technologies</a>
          </span>
        </div>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Profile Picture" />
        </div>
        <div className="menu-container">
          <ul>
            <li><a href="#service">Skills</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </div>
      <div id="service">
        <div className="left-container">
          <div className="header">
            Skills
          </div>
          Graduated from UC Berkeley gave me a diverse set of experiences,
          ranging from Artificial Intelligence to Computer Networking. I then
          found myself most interested in Front End Web Development. And I've been
          working in that field since then.
        </div>
        <div className="right-container">
          <ul className="services">
            <li>HTML & CSS</li>
            <li className="animation-delay-100">React - JSX is just pure awesomeness</li>
            <li className="animation-delay-200">Javascript - Backbone Lodash</li>
            <li className="animation-delay-300">React - Hooks are awesome!</li>
            <li className="animation-delay-400">Redux Middleware: Saga</li>
            <li className="animation-delay-500">Version Control: Github</li>
          </ul>
        </div>
      </div>
      <div id="history">
        <div className="header">History</div>
        <div className="timeline"></div>
        <img
          className="year-indicator year-1993"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-left year-1993">
          <div className="header">1993</div>
          Born - and here's my sibling's
          <a
            href="https://www.linkedin.com/in/andrew-tjiptoning-2a3724169/"
            target="_blank"
          >
            profile
          </a>
          <div className="location">
            <span className="fa fa-map-marker"></span> Jakarta, Indonesia
          </div>
        </div>
        <img
          className="year-indicator year-2011"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-right year-2011">
          <div className="header">2011</div>
          Graduated from SMA Kolese Kanisius
          <div className="location">
            <span className="fa fa-map-marker"></span> Jakarta
          </div>
          Started college at De Anza College
          <div className="location">
            <span className="fa fa-map-marker"></span> Cupertino
          </div>
        </div>
        <img
          className="year-indicator year-2013"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-left year-2013">
          <div className="header">2013</div>
          Transferred to University of California, Berkeley
          <div className="location">
            <span className="fa fa-map-marker"></span> Berkeley
          </div>
        </div>
        <img
          className="year-indicator year-2014"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-right year-2014">
          <div className="header">2014</div>
          Summer internship at
          <a href="https://www.blibli.com/" target="_blank" rel="noreferrer noopener">Blibli</a>
          <div className="location">
            <span className="fa fa-map-marker"></span> Jakarta
          </div>
        </div>
        <img
          className="year-indicator year-2015"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-left year-2015">
          <div className="header">2015</div>
          Summer internship at
          <a href="https://www.wetravel.com/" target="_blank" rel="noreferrer noopener">WeTravel</a>
          <div className="location">
            <span className="fa fa-map-marker"></span> San Francisco
          </div>
          <div className="mb-10">Graduated from UC Berkeley</div>
          <div className="location">
            <span className="fa fa-map-marker"></span> Berkeley
          </div>
          Internship at Helpio Inc.
          <div className="location">
            <span className="fa fa-map-marker"></span> Berkeley
          </div>
        </div>
        <img
          className="year-indicator year-2016"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-right year-2016">
          <div className="header">2016</div>
          Joined <a href="https://www.vyrill.com" target="_blank" rel="noreferrer noopener">Vyrill</a>
          <div className="location">
            <span className="fa fa-map-marker"></span> Berkeley
          </div>
        </div>
        <img
          className="year-indicator year-2017"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-left year-2017">
          <div className="header">2017</div>
          Joined <a href="https://www.logichub.com" target="_blank" rel="noreferrer noopener">LogicHub</a>
          <div className="location">
            <span className="fa fa-map-marker"></span> Mountain View
          </div>
        </div>
        <img
          className="year-indicator year-2019"
          src="assets/img/bullet.png"
          alt="bullet"
        />
        <div className="wrapper-right year-2019">
          <div className="header">2019</div>
          Working remotely from Indonesia for
          <a href="https://www.logichub.com" target="_blank" rel="noreferrer noopener">LogicHub</a>
          <div className="location">
            <span className="fa fa-map-marker"></span> Jakarta
          </div>
        </div>
      </div>
      <div id="project">
        <div className="header">Projects</div>
        <a
          href="https://www.youtube.com/watch?v=UFKG9K-U2mE"
          target="_blank"
          className="wrapper-project"
        >
          <div className="project-header">Commuter Cronny</div>
          <div className="project-sub-header">#drivingAssistance</div>
          <img
            className="project-preview"
            src="assets/img/preview/commutercronny.jpg"
            alt="image"
          />
        </a>
        <a
          href="https://www.npmjs.com/package/hearthstone-statistic"
          target="_blank"
          className="wrapper-project"
        >
          <div className="project-header">Hearthstone Statistic Tracker</div>
          <div className="project-sub-header">#gameAnalysis</div>
          <img
            className="project-preview"
            src="assets/img/preview/hearthstone-statistic.jpg"
            alt="image"
          />
        </a>
        <a href="http://tjiptoning.com" target="_blank" rel="noreferrer noopener" className="wrapper-project">
          <div className="project-header">PT. Tjiptoning Sejati</div>
          <div className="project-sub-header">#website</div>
          <img
            className="project-preview"
            src="assets/img/preview/tjiptoning.jpg"
            alt="image"
          />
        </a>
        <a href="http://vyrill.com" target="_blank" rel="noreferrer noopener" className="wrapper-project">
          <div className="project-header">Vyrill</div>
          <div className="project-sub-header">#videoAnalytic</div>
          <img
            className="project-preview"
            src="assets/img/preview/vyrill.jpg"
            alt="image"
          />
        </a>
      </div>
      <div id="footer">
        <div className="left-container">
          <div className="header">About Me</div>
          <a
            href="https://www.dropbox.com/s/3i6nha3o9nkjx6e/Resume%20mk.%2022.pdf?dl=0"
            target="_blank">Resume
          </a><br />
          <a href="https://www.linkedin.com/in/bernardusbilly" target="_blank" rel="noreferrer noopener">
            Linkedin
          </a>
        </div>
        <div className="right-container">
          <div className="header">Contact</div>
          Jakarta, Indonesia<br />
          bernardus.billy@hotmail.com<br />
        </div>
        <div className="copyright">
          Copyright &copy; 2022, Bernardus Billy Tjiptoning
        </div>
      </div>
    </div>
  );
}

export default App;
