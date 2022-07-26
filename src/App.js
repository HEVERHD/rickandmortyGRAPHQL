import * as React from 'react';
import './App.css';
import Logo from '../src/assets/logo.png';
import GlobalStyles from './GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {Theme} from '../src/Theme';
import Generate from './components/Generate';


function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <figure>
    <img src={Logo} alt="logo" />
    </figure>
    <ThemeProvider theme={Theme}>
    <Generate/>
    </ThemeProvider>
    </div>
  );
}

export default App;
