import React from 'react';
import styles from './Navbar.css';
import Scroll from 'react-scroll';
import NavLogo from './NavLogo'
var ScrollLink = Scroll.Link;

class Navbar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          navlogo: false,
      };
      this.handleScroll = this.handleScroll.bind(this);
  };
  componentDidMount(){
      window.addEventListener('scroll',this.handleScroll);
  };
  componentWillUnmount(){
      window.removeEventListener('scroll',this.handleScroll);
  };
  handleScroll(event){
        let windowPosition = window.pageYOffset,
            header = document.getElementById('header'),
            heighth = header.getBoundingClientRect().height - 2;

        if ( windowPosition >= heighth ){
            this.setState({navlogo: true,});
        }else{
            this.setState({navlogo: false,});
        }
  };

  render() {
    return (
        <div className="navContainer">
            <ul className="navbar">
                {this.state.navlogo ? <NavLogo/>: null}
                <li id="about">
                    <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                        <div className="link">
                            <div className="circle"></div>
                            <div className="text">About</div>
                        </div>
                    </ScrollLink>
                </li>
                <div className="line">
                </div>
                <li>
                    <ScrollLink activeClass="active" to="problem" spy={true} smooth={true} duration={500} >
                        <div className="link">
                            <div className="circle"></div>
                            <div className="text">Problem</div>
                        </div>
                    </ScrollLink>
                </li>
                <div className="line">
                </div>
                <li>
                    <ScrollLink activeClass="active" to="solution" spy={true} smooth={true} duration={500} >
                        <div className="link">
                            <div className="circle"></div>
                            <div className="text">Solution</div>
                        </div>
                    </ScrollLink>
                </li>
                <div className="line">
                </div>
                <li>
                    <ScrollLink activeClass="active" to="contact" spy={true} offset={-7} smooth={true} duration={500} >
                        <div className="link">
                            <div className="circle"></div>
                            <div className="text">Contact</div>
                        </div>
                    </ScrollLink>
                </li>
            </ul>
        </div>
    );
  }
}
export default Navbar;
