import React from 'react';
import ReactDOM from 'react-dom';
import MzRoot from './Root';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MzRoot />, div);
  ReactDOM.unmountComponentAtNode(div);
});
