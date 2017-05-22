import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

const VinSite = () => {
  ReactDOM.render(
      <MuiThemeProvider>
          <Home />
      </MuiThemeProvider>,
    document.getElementById('root')
  );
};

VinSite();
