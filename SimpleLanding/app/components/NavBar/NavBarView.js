import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll' 

import './style.css';

// replaces bloatware from fontawesome (saves ~1.5 MB)
import FaBars from './img/bars.svg'; // requires you to know the height/width size of icon via inspect > elements > styles > computed
import SVG from 'react-inlinesvg';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {mnuShow:false};
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
      this.closeMnu();
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleShow(){
    this.setState({mnuShow:!this.state.mnuShow});
  }

  closeMnu(){
    if(this.state.mnuShow){
      this.setState({mnuShow:false});
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render(){
    const show = this.state.mnuShow ? "show" : "";
    return (
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.navBarShrink}`} id="mainNav">
        <div className="container">
          <a onClick={this.scrollToTop.bind(this)} className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
          <button onClick={this.toggleShow.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu &nbsp; <SVG src={FaBars} width="10px" height="12px" /> 
          </button>
          <div className={`collapse navbar-collapse ${show}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link activeClass="active" className="nav-link js-scroll-trigger" to="download" spy={true} smooth="easeInOutQuart" duration={1000} >Download</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link js-scroll-trigger" to="features" spy={true} smooth="easeInOutQuart" duration={1000} >Features</Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" className="nav-link js-scroll-trigger" to="contact" spy={true} smooth="easeInOutQuart" duration={1000} >Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar
