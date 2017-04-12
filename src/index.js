import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
var Element    = Scroll.Element;

import App from './App';
import About from './components/About/About';
import Problem from './components/Problem/Problem';
import Contact from './components/Contact/Contact';


const render = (Component) => {
  ReactDOM.render(
      <Component>
          <Element name="about"><About /></Element>
          <Element name="problem"><Problem /></Element>
          <Element name="contact"><Contact /></Element>
      </Component>,
    document.getElementById('root')
  );
};

render(App);
