import React from 'react';

import './style.css';

// replaces bloatware from fontawesome (saves ~1.5 MB)
import FaHeart from './img/heart.svg'; // requires you to know the height/width size of icon via inspect > elements > styles > computed
import FaTwitter from './img/twitter.svg'; 
import FaFacebookF from './img/facebook-f.svg'; 
import FaGooglePlus from './img/google-plus.svg'; 
import SVG from 'react-inlinesvg';

const Social = (props) => (
  <section className="contact bg-primary" id="contact">
    <div style={{alignItems:"center", justifyContent:"center"}} className="container">
      <ul style={{alignItems:"center", justifyContent:"center"}} className="list-inline list-social">
        <li className="list-inline-item social-twitter" style={{fontSize:50}}>Contact us... <br />We <SVG src={FaHeart} width='51px' height='50px' fill='red' style={{marginBottom:10}}  /> new friends!</li>
        <div className="break"></div>
        &nbsp; &nbsp; &nbsp; &nbsp; <li className="list-inline-item social-twitter"> <a href="#"> <SVG src={FaTwitter} width='40px' height='40px' fill='white' style={{marginBottom:10}}  /> </a></li>
        <li className="list-inline-item social-facebook"><a href="#"> <SVG src={FaFacebookF} width='25px' height='40px' fill='white' style={{marginBottom:10}} /> </a></li>
      </ul>
    </div>
  </section>
)

///...

export default Social