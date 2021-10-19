import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import { darkTheme } from '../../styles/themes/theme';
import { Wrapper, Form } from './Settings';
import ImageUpdater from '../ThemeIconUpdater/ImageUpdater';
import Button from '../Button/Button.jsx';

export default function TimerSettings({ currentTheme, render, onToggle, preferences }) {
    const [ theme, setTheme ] = useState(currentTheme);
    const [ switcher, setSwitcher ] = useState(theme === darkTheme ? true : false);
    const [ toggle, setToggle ] = useState(true);
    const [ pomodoro, setPomodoro ] = useState(preferences['pomodoro'])
    const [ shortBreak, setShortBreak ] = useState(preferences['short-break'])
    const [ longBreak, setLongBreak ] = useState(preferences['long-break'])
    const [ longBreakInterval, setLongBreakInterval ] = useState(preferences['long-break-interval'])
    useEffect(() => setTheme(currentTheme), [currentTheme])
    const setData = data => localStorage.setItem('user_preferences', JSON.stringify(data))

    function handleSubmit(e) {   
        e.preventDefault();
        setData({
            ...preferences,
            'pomodoro': pomodoro,
            'short-break': shortBreak,
            'long-break': longBreak,
            'long-break-interval': longBreakInterval,
            'theme': switcher ? 'dark' : 'light'
        })

        return setToggle(false);
    }
    return (
        <Wrapper>
            <div className="header">
                <h2>Configurações do Timer</h2>
                <button type="button" onClick={() => setToggle(false)}>
                    <ImageUpdater  currentTheme={theme} imageName={switcher ? 'darkClose' : 'close'} />
                    { useEffect(() => onToggle(toggle), [onToggle, toggle]) }
                </button>
            </div>

            <hr />

            <Form onSubmit={handleSubmit}>
                <h3>Tempo ( minutos )</h3>
                <div>
                    <div> 
                        <label htmlFor="pomodoro-input">Pomodoro</label>
                        <input
                            min={1}
                            value={pomodoro}
                            type="number" 
                            name="pomodoro" 
                            id="pomodoro-input" 
                            onChange={e => setPomodoro(Number(e.target.value))}
                            />
                    </div>
                    <div> 
                        <label htmlFor="short-break-input">Pausa curta</label>
                        <input 
                            min={1}
                            value={shortBreak}
                            type="number" 
                            name="short-break" 
                            id="short-break-input" 
                            onChange={e => setShortBreak(Number(e.target.value))}
                            />
                    </div>
                    <div>
                        <label htmlFor="long-break-input">Pausa longa</label>
                        <input 
                            min={1}
                            value={longBreak}
                            type="number" 
                            name="long-break" 
                            id="long-break-input" 
                            onChange={e => setLongBreak(Number(e.target.value))}
                            />
                    </div>         
                </div>
                <hr />

                <div className="set-interval">
                    <label htmlFor="set-interval-input">Intervalo entre pausas longas</label>
                    <input 
                        value={longBreakInterval}
                        type="number" 
                        name="interval" 
                        id="set-interval-input" 
                        onChange={e => setLongBreakInterval(Number(e.target.value))}
                    />
                </div>

                <hr />

                <div className="change-theme">
                    <h3>Tema escuro</h3>
                    <Switch onChange={() => {
                        setSwitcher(prevState => !prevState)
                        setData({
                            ...preferences,
                            theme: !switcher ? 'dark' : 'light'
                        })
                    }} checked={switcher} onColor="#000"/>
                    {useEffect(() => {
                        render(switcher)
                    }, [render, switcher]) }
                </div>
                    
                <Button type="submit" background={theme.button}>Salvar</Button>
            </Form>
        </Wrapper>
    )
}