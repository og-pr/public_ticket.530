import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 

import '../../web/css/styles.css'; // new path used (via monorep folder structure)

import Hero from '../../components/Hero'; 
import NavBar from '../../components/NavBar'; 
import Social from '../../components/Social';
import Footer  from '../../components/Footer';
import Features from '../../components/Features';
import AppDownload from '../../components/AppDownload';
import CallToAction from '../../components/CallToAction';

import * as serviceWorker from '../../web/serviceWorker';

class AppView extends Component {
  constructor(props){
    super(props);
    this.state={navBarShrink:""};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
    this.setState({navBarShrink:nbs});
  }

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        <NavBar navBarShrink = {nbs} />
        <Hero />
        <AppDownload />
        <Features />
        <CallToAction />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default AppView

/// new
ReactDOM.render(<AppView />, document.getElementById('root'));

/// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
