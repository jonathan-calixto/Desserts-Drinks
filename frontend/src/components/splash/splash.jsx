import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import WebMap from '../map/map2';

class Splash extends React.Component {

  render() {
    return (
      <div>
        <h1>hello from the splash page</h1>
        <header>
          <Navbar />
        </header>
        <div id="map">
          <WebMap />
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);