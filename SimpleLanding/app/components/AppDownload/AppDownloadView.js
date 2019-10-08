import React from 'react';

import './style.css';

import GooglePlayBadge from './img/google-play-badge.svg';
import AppStoreBadge from './img/app-store-badge.svg';
import SVG from 'react-inlinesvg';

const AppDownload = (props) => (
  <section className="download bg-primary text-center" id="download">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          <div className="badges">
            <a className="badge-link" href="#"> <SVG src={GooglePlayBadge} width='202px' height='60px' /> </a>
            &nbsp; <a className="badge-link" href="#"> <SVG src={AppStoreBadge} width="202px" height="60px" /> </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AppDownload