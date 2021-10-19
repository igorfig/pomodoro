import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components'

import { Wrapper } from '../styles/styles';
import { lightTheme, darkTheme } from '../../styles/themes/theme';

import TimerSettings from '../../components/Timer/Settings.jsx';

import Header from '../partials/Header.jsx'
import Main from '../partials/Main.jsx'
import Footer from '../partials/Footer.jsx'

export default function Home() {
  // localStorage preset data
  const preferences = JSON.parse(localStorage.getItem("user_preferences")) || {
            'pomodoro': 25,
            'short-break': 5,
            'long-break': 15,
            'long-break-interval': 4,
            'theme':'light'
  };
  /* interface states */
  const [ toggle, setToggle ] = useState(false);
  const [ theme, setTheme ] = useState(preferences.theme === 'dark' ? darkTheme : lightTheme);
  const handleUpdateTheme = switcher => switcher ? setTheme(darkTheme) : setTheme(lightTheme)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header theme={theme} onToggle={setToggle} isToggle={toggle}/>
        { 
          toggle && <TimerSettings currentTheme={theme} render={handleUpdateTheme} onToggle={setToggle} preferences={preferences}/>
        }
        <hr />
        <Main theme={theme} preferences={preferences}/>
        <Footer theme={theme}/>
      </Wrapper>
    </ThemeProvider>
  )
}