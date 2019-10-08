import React from 'react';

import './style.css';

const Footer = (props) => (
  <footer>
    <div style={{alignItems:"center", justifyContent:"center"}} className="container">
      <ul className="list-inline">
        <li className="list-inline-item">&copy; 2019 Start Bootstrap. All Rights Reserved.</li><br />
      </ul>
      <ul className="list-inline" style={{marginLeft:50}}>
        <li className="list-inline-item"><a href="#">Privacy</a></li>
        <li className="list-inline-item"><a href="#">Terms</a></li>
        <li className="list-inline-item"><a href="#">FAQ</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer