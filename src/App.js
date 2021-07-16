import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentFragmenting from './basic-tutorials/component-fragmenting/ComponentFragmenting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ComponentFragmenting/>

      </header>
    </div>
  );
}

export default App;
