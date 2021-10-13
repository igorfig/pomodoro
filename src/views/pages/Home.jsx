import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components'

import { Wrapper } from '../styles/styles';
import { lightTheme, darkTheme } from '../../styles/themes/theme';

import TimerSettings from '../../components/Timer/Settings.jsx';

import Header from '../partials/Header.jsx'
import Main from '../partials/Main.jsx'
import Footer from '../partials/Footer.jsx'

export default function Home() {
  /* interface states */
  const [ toggle, setToggle ] = useState(false);
  const [ theme, setTheme ] = useState(darkTheme)

  const handleUpdateTheme = switcher => switcher ? setTheme(darkTheme) : setTheme(lightTheme)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header theme={theme} onToggle={setToggle} isToggle={toggle}/>
        { toggle && (
          <TimerSettings currentTheme={theme} render={handleUpdateTheme} onToggle={setToggle}/>
        ) }
        <hr />
        <Main theme={theme}/>
        <Footer theme={theme}/>
      </Wrapper>
    </ThemeProvider>
  )
}