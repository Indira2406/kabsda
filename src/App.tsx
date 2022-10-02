import React from 'react';
import './App.css';
import {Accordion} from './Accordion';
import {Rating} from './Rating';
import { OnOff } from './OnOff/OnOff';

function App() {
  return (
    <div className="App">
      <Accordion titleValue={'Menu'} />
      <Rating />

      <OnOff />
    </div>
  );
}

export default App;
