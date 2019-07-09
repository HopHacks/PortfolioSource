import React from 'react';
import $ from 'jquery/dist/jquery.js';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  componentDidMount() {
    const $anchor = $('#scroller-anchor');
    const $scroller = $('#scroller');

    const move = function () {
      const st = $(window).scrollTop();
      const ot = $anchor.offset().top;
      if (st > ot) {
        $scroller.css({
          position: 'fixed',
          top: '0px',
          left: '0px',
        });
      } else if (st + window.innerHeight <= ot + 36) {
        $scroller.css({
          position: 'fixed',
          bottom: '0px',
        });
      } else {
        $scroller.css({
          position: 'relative',
          top: '',
        });
      }
    };
    $(window).scroll(move);
    move();
  }

  render() {
    return (
      <div id="nav-section" style={{ marginTop: '50px' }}>
        <div id="scroller-anchor" />
        <div id="scroller" className="navbar">

          <div className="navlist-wrapper">
            <ul>
              <li>
                <a onClick={() => { $('html, body').animate({ scrollTop: 0 }, 1500); }}>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a onClick={() => { $('html, body').animate({ scrollTop: $('#skills-section').offset().top - 100 }, 1500); }}>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a onClick={() => { $('html, body').animate({ scrollTop: $('#projects-section').offset().top - 100 }, 1500); }}>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a onClick={() => { $('html, body').animate({ scrollTop: $('#about-section').offset().top - 100 }, 1500); }}>
                  <span>About</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
