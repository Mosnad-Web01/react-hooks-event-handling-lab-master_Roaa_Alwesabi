import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

// عرض المكونات Keypad و EyesOnMe في عنصر DOM مع id=root
ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);
