import React from 'react';
import styles from './Navbar.css';
import Scroll from 'react-scroll';
var ScrollLink = Scroll.Link;

class Navbar extends React.Component {
  render() {
    return (
        <div className="navContainer">
            <ul className="navbar">
                <li><ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={500} >About</ScrollLink></li>
                <li><ScrollLink activeClass="active" to="problem" spy={true} smooth={true} duration={500} >Problem</ScrollLink></li>
                <li><ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</ScrollLink></li>
            </ul>
        </div>
    );
  }
}
export default Navbar;
