import React from 'react';
import Navbar from './components/Navbar/Navbar';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
        <div>
            <Navbar />
            <h1 className="header"></h1>
            <div>
                {this.props.children}
            </div>
        </div>
    );
  }
}
export default App;
