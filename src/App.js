import * as React from 'react';
import './App.css';
import Logo from '../src/assets/logo.png';
import CharactersQuery from './querys';

function App() {
  return (
    <div className="App">
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
    <CharactersQuery />
    </div>
  );
}

export default App;
