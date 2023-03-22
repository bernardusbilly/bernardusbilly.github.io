import { useEffect, useState } from 'react';
import './style.scss';
import 'animate.css';
import histories from './history.json';
import Animated from './util/animated';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <div className="loading-wrapper">
      <img src={process.env.PUBLIC_URL + "/img/loading.gif"} className="loading-gif" alt="Loading.." />
    </div>
  ) : (<Content />);
}

function Content() {
  return (
    <div className="app">
      <div id="introduction">
        <div className="header-wrapper">
          <span className="header">Bernardus Billy Tjiptoning</span>
          <span className="sub-header">
            {`Deputy Head of Engineering @ `}
            <a href="https://www.kargo.tech" target="_blank" rel="noreferrer noopener">Kargo Technologies</a>
          </span>
        </div>
        <div className="logo animate__animated animate__bounceIn">
          <img src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="profile" />
        </div>
        <div className="menu-container animate__animated animate__fadeInRight">
          <ul>
            <li><a href="#service">Introduction</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </div>
      <div id="service">
        <div className="left-container">
          <div className="header">Introduction</div>
          Almost majoring in Actual Science; changed my path during my time in Berkeley into Computer Science major. Started my passion in
          Front End Development. Worked in multiple Startups in Silicon Valley and started my own company in the Software House space with
          several friends from the Bay Area. Currently working professionally as Deputy Head of Engineering in a Logistic Startup, Kargo Technologies.
        </div>
        <div className="right-container">
          <ul className="services">
            <Animated animation='animate__slideInRight'>
              <li>Frontend Development</li>  
            </Animated>
            <Animated animation='animate__slideInRight'>
              <li>Engineering Management</li>  
            </Animated>
            <Animated animation='animate__slideInRight'>
              <li>Kicking off a Startup</li>
            </Animated>
            <Animated animation='animate__slideInRight'>
              <li>People Operations</li>  
            </Animated>            
          </ul>
        </div>
      </div>
      <div id="history">
        <div className="header">History</div>
        <div className="timeline"></div>
        {histories.map(({ year = '', events = [] }, index) => {
          return (
            <Animated animation={`animate__slideIn${index%2 === 0 ? 'Left' : 'Right'}`} >
              <div key={year} className={`wrapper-${index%2 === 0 ? 'left' : 'right'}`}>
                <span className="pointer fa fa-diamond"></span>
                <div className="header">{year}</div>
                {events.map(({ title = '', location = '' }) => {
                  return (
                    <div key={title}>
                      <div>{title}</div>
                      {location && <div className="location">
                        <span className="fa fa-location-dot"></span> {location}
                      </div>}
                    </div>
                  )
                })}
              </div>
            </Animated>
          );
        })}
      </div>
      <div id="project">
        <div className="header">Projects</div>
        <a
          href="https://www.youtube.com/watch?v=UFKG9K-U2mE"
          target="_blank"
          rel="noreferrer"
          className="wrapper-project"
        >
          <div className="project-header">Commuter Cronny</div>
          <div className="project-sub-header">#drivingAssistance</div>
          <img
            className="project-preview"
            src={process.env.PUBLIC_URL + "/img/commutercronny.jpg"}
            alt="commuter cronny"
          />
        </a>
        <a
          href="https://www.npmjs.com/package/hearthstone-statistic"
          target="_blank"
          rel="noreferrer"
          className="wrapper-project"
        >
          <div className="project-header">Hearthstone Statistic Tracker</div>
          <div className="project-sub-header">#gameAnalysis</div>
          <img
            className="project-preview"
            src={process.env.PUBLIC_URL + "img/hearthstone-statistic.jpg"}
            alt="hearthstone"
          />
        </a>
        <a 
          href="http://tjiptoning.com" 
          target="_blank" 
          rel="noreferrer noopener" 
          className="wrapper-project"
        >
          <div className="project-header">PT. Tjiptoning Sejati</div>
          <div className="project-sub-header">#website</div>
          <img
            className="project-preview"
            src={process.env.PUBLIC_URL + "/img/tjiptoning.jpg"}
            alt="tjiptoning"
          />
        </a>
        <a href="http://vyrill.com" target="_blank" rel="noreferrer noopener" className="wrapper-project">
          <div className="project-header">Vyrill</div>
          <div className="project-sub-header">#videoAnalytic</div>
          <img
            className="project-preview"
            src={process.env.PUBLIC_URL + "/img/vyrill.jpg"}
            alt="vyrill"
          />
        </a>
      </div>
      <div id="footer">
        <div className="left-container">
          <div className="header">About Me</div>
          <div>
            <a
              href="https://www.dropbox.com/s/3i6nha3o9nkjx6e/Resume%20mk.%2022.pdf?dl=0"
              rel="noreferrer"
              target="_blank"
            >
              Resume (2019)
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/bernardusbilly" target="_blank" rel="noreferrer noopener">
              Linkedin
            </a>
          </div>
          <div>
            <a href="https://www.github.com/bernardusbilly" target="_blank" rel="noreferrer noopener">
              Github
            </a>
          </div>
        </div>
        <div className="right-container">
          <div className="header">Contact</div>
          Jakarta, Indonesia<br />
          bernardus.billy@hotmail.com<br />
        </div>
        <div className="copyright">
          Made with ❤️ in 2023
        </div>
      </div>
    </div>
  );
}

export default App;
