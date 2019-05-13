import React from 'react';
import './Root.scss';
import { MzHeader } from "../header/Header";
import logo from "../_assets/img/logo.svg";

const MzRoot: React.FC = () => {

  const foo: string = "bar";

  return (
    <div className="MzRoot">
      <MzHeader mzFoo={foo} />
      <div className="MzRoot-background">
        <img src={logo} className="MzRoot-logo" alt="logo"/>
      </div>
    </div>
  );
};

export default MzRoot;
