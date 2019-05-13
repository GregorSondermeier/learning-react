import React from 'react';
import logo from '../_assets/img/logo.svg';
import './Root.scss';

const MzRoot: React.FC = () => {
  return (
    <div className="MzRoot">
      <header className="MzRoot-header">
        <img src={logo} className="MzRoot-logo" alt="logo" />
        <p>
          Edit <code>src/Root.tsx</code> and save to reload.
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
};

export default MzRoot;
