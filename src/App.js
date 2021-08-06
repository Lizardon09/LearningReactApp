import logo from './static/logo512.png';
import './App.css';
import React from 'react';
import ComponentFragmenting from './basic-tutorials/component-fragmenting/ComponentFragmenting';
import 'bootstrap/dist/css/bootstrap.min.css';

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
