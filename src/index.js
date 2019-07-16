import React from 'react';
import ReactDOM from 'react-dom';
import ReactTableComponent from './ReactTableComponent.js';

import './styles.css';

function App() {
  return (
    <div className="App">
      <ReactTableComponent />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
