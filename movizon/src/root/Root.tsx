import React from 'react';
import './Root.scss';
import { MzHeader } from "../header/Header";
import logo from "../_assets/img/logo.svg";
import { MzFooter } from "../footer/Footer";

const MzRoot: React.FC = () => {

  const foo: string = "bar";

  return (
      <div className="MzRoot">
          <MzHeader mzFoo={foo} />
          <div className="MzRoot-background">
              <img src={logo} className="MzRoot-logo" alt="logo"/>
          </div>
          <MzFooter mzFoo={foo} />
      </div>
  );
};

export default MzRoot;
