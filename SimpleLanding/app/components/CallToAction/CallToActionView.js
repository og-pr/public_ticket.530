import React from 'react';
import './style.css';

const CallToAction = (props) => (
  <section className="cta">
    <div className="cta-content">
      <div style={{alignItems:"center"}} className="container">
        <h2>Stop waiting.<br />Start building. <br /> <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a> </h2>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
)

export default CallToAction