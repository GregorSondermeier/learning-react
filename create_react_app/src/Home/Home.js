import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="MzRoot-header">
                    <img src={logo} className="MzRoot-logo" alt="logo" />
                    <p>
                        This is the Home component rendered by <i>Home.js</i>.
                    </p>
                    <a className="MzRoot-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default Home;
