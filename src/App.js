import * as React from 'react';
import './App.css';
import Logo from '../src/assets/logo.png';
import GlobalStyles from './GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {Theme} from '../src/Theme';
import loading from '../src/assets/loading.gif';
import Home from '../src/pages/Home';


function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <figure className='logo'>
    <img src={Logo} alt="logo" />
    <Home />
    </figure>
    <ThemeProvider theme={Theme}>
    <figure className='loading'>
    <img src={loading} alt="logo" />
    </figure>
    </ThemeProvider>
    </div>
  );
}

export default App;
