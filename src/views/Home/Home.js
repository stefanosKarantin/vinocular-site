import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Scroll from 'react-scroll';
var Element    = Scroll.Element;
import About from './sections/About/About';
import Problem from './sections/Problem/Problem';
import Contact from './sections/Contact/Contact';
import Precision from './sections/Precision/Precision';

import styles from './Home.css';

class Home extends React.Component {
  render() {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <h1 className="header" id="header"></h1>
                <div>
                    <Element name="about"><About /></Element>
                    <Element name="problem"><Problem /></Element>
                    <Element name="precision"><Precision /></Element>
                    <Element name="contact"><Contact /></Element>
                    <Footer/>
                </div>
            </div>
        </div>
    );
  }
}
export default Home;
