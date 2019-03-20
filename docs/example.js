import React from 'react';
import { render } from 'react-dom';
import useInputValue from '../src';

function App() {
  let name = useInputValue('Jamie');
  return <input {...name}/>;
}

render(<App />, window.root);
