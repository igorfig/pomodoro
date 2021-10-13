import React, { useState, useEffect } from 'react';
import Switch from "react-switch";

import { darkTheme } from '../../styles/themes/theme';
import { Wrapper, Form } from './Settings';
import ImageUpdater from '../ThemeIconUpdater/ImageUpdater';
import Button from '../Button/Button.jsx';

export default function TimerSettings({ currentTheme, render, onToggle }) {
    const [ theme, setTheme ] = useState(currentTheme);
    const [ switcher, setSwitcher ] = useState(theme === darkTheme ? true : false);
    const [ toggle, setToggle ] = useState(true);

    useEffect(() => setTheme(currentTheme), [currentTheme])
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

            <Form>
                <h3>Tempo ( minutos )</h3>
                <div>
                    <div> 
                        <label htmlFor="pomodoro-input">Pomodoro</label>
                        <input type="number" name="pomodoro" id="pomodoro-input" defaultValue={25} />
                    </div>
                    <div> 
                        <label htmlFor="short-break-input">Pausa curta</label>
                        <input type="number" name="short-break" id="short-break-input" defaultValue={5} />
                    </div>
                    <div>
                        <label htmlFor="long-break-input">Pausa longa</label>
                        <input type="number" name="long-break" id="long-break-input" defaultValue={15} />
                    </div>         
                </div>
                <hr />

                <div className="set-interval">
                    <label htmlFor="set-interval-input">Intervalo entre pausas longas</label>
                    <input type="number" name="interval" id="set-interval-input" defaultValue={4}/>
                </div>

                <hr />

                <div className="change-theme">
                    <h3>Tema escuro</h3>
                    <Switch onChange={() => setSwitcher(prevState => !prevState)} checked={switcher} onColor="#000"/>
                    {useEffect(() => {
                        render(switcher)
                    }, [render, switcher]) }
                </div>
                    
                <Button type="submit" background={theme.button}>Salvar</Button>
            </Form>
        </Wrapper>
    )
}