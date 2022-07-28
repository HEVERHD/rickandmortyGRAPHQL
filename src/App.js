import * as React from 'react';
import Logo from '../src/assets/logo.png';
import GlobalStyles from './GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {Theme} from '../src/Theme';
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
    </ThemeProvider>
    </div>
  );
}

export default App;
