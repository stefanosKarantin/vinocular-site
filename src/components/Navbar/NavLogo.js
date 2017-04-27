import React from 'react';
import styles from './Navbar.css';

class NavLogo extends React.Component {
    render(){
        return(
            <div>
                <a href="http://www.vinocular.org">
                    <div  className="navlogo"></div>
                </a>
            </div>
        );
    }
}

export default NavLogo;
