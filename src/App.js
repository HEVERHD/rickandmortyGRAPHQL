import * as React from 'react';
import './App.css';
import Logo from '../src/assets/logo.png';
import CharactersQuery from './querys';
import GlobalStyles from './GlobalStyles';


function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <figure>
    <img src={Logo} alt="logo" />
    </figure>
    <button > Generator </button>
    <CharactersQuery />
    </div>
  );
}

export default App;
