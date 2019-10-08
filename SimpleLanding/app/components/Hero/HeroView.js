import React from 'react';

import './style.css';
import '../../web/device-mockups/device-mockups.css' // new path used (via monorep folder structure)

import demoScreen1 from '../../web/images/demo-screen-1.jpg';

// iphone6_plus is via HTML5 Mockups
// Use only 1 ; delete all other images/css files
// https://github.com/pixelsign/html5-device-mockups 
const Hero = (props) => (
  <header className="masthead">
    <div style={{display:"inherit"}} className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-fluid" alt="" />
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

///...

export default Hero