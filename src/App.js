import * as React from 'react';
import Logo from '../src/assets/logo.png';
import GlobalStyles from './GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {Theme} from '../src/Theme';
import Home from '../src/pages/Home';
import "./index.css";



function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <div  className="container-logo">
    <div className='logo'>
    <img src={Logo} alt="logo" />
    </div>
    </div>
     <Home />
    <ThemeProvider theme={Theme}>
    </ThemeProvider>
    </div>
  );
}

export default App;
