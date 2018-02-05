import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolBarTop from './Components/ToolBarTop';
import About from './Components/About';
import P3 from './Components/P3';
import PrivacyPolicy2 from './Components/PrivacyPolicy2';
import ProfileC from './Components/ProfileC'

const gridContainer = {
  display: 'grid',
  gridTemplateColumns: '29% 45% 33%',
}

const HomePage = () => (
  <MuiThemeProvider>
    <ToolBarTop />
    <div style={gridContainer}>
      <div class="class-items">
        <ProfileC />
        <About />
      </div>
      <div class="class-items">
        <P3 />
      </div>
      <div class="class-items">
        <PrivacyPolicy2 />
      </div>
    </div>
  </MuiThemeProvider>
);

export default HomePage;