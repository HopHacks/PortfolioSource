import React from 'react';

import AOS from 'aos';
import githubIcon from '../images/github_icon.png';
import linkedinIcon from '../images/linkedin_icon.png';
import resumeIcon from '../images/resume_icon.png';

import 'aos/dist/aos.css';

class ButtonLayout extends React.Component {
	 componentDidMount() {
	  this.aos = AOS;
    this.aos.init({
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="icons">

        <ul>
          <li
            className="li-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <a href="https://github.com/jimmyshi360" target="_blank">
              <img className="icon hovered git bounce1" src={githubIcon} />
            </a>
          </li>
          <li
            className="li-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <a href="https://www.linkedin.com/in/jimmyshi360/" target="_blank">
              <img className="icon hovered linked bounce3" src={linkedinIcon} />
            </a>
          </li>
          <li
            className="li-b"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <a href="/resume/" target="_blank">
              <img className="icon hovered resume bounce4" src={resumeIcon} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ButtonLayout;
