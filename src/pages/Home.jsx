import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Wrapper, Header, Card, Button, Steps, Settings, Form } from './styles/styles';
import Progress from '../components/Progress.jsx'
import logo from '../images/tomato.svg'
import close from '../images/close.svg'
import settings from '../images/settings.svg'
export default function Home() {
  const [ toggle, setToggle ] = useState(false);
  const [ minutes, setMinutes ] = useState(25)
  const [ timerOptionClassName, setTimerOptionClassName ] = useState('pomodoro');
  const [ progress, setProgress ] = useState(0);
  const [ switcher, setSwitcher ] = useState(false);

  const handleChangeTimerOption = event => {  // funcão temporária, apena para testes
    setTimerOptionClassName(event.target.id) 
    
    if(event.target.id === 'pomodoro') {
      setMinutes(25);
    } else if(event.target.id === 'short-break') {
      setMinutes(`0`+ 5)
    } else if(event.target.id === 'long-break') {
      setMinutes(15)
    }
  }

  const handleToggle = () => setToggle(prevState => !prevState)
  return (
    <Wrapper>
      <Header>
        <div>
          <img src={logo} alt="Pomodoro" />
          <h1>Pomofocus</h1>
        </div> 
        <button type="button" onClick={handleToggle}>
          <img src={settings} alt="Configurações" />
        </button>
        
      </Header>
      
      <hr />

      <Card>
      <div className="options">
        <button type="button" id="pomodoro" className={'pomodoro' === timerOptionClassName ? 'selected' : '' } onClick={handleChangeTimerOption}>Pomodoro</button>
        <button type="button" id="short-break" className={'short-break' === timerOptionClassName ? 'selected' : '' } onClick={handleChangeTimerOption}>Pausa pequena</button>
        <button type="button" id="long-break" className={'long-break' === timerOptionClassName ? 'selected' : '' } onClick={handleChangeTimerOption}>Pausa longa</button>
      </div>

       <div className="progress-bar">
         <CircularProgressbarWithChildren 
            value={17}
            maxValue={25}
            minValue={0}
            strokeWidth={4}
            styles={{
              path: {
                stroke: "#D35149"
              },
      
              trail: {
                stroke:"rgba(117, 116, 116, 0.1)"
              }
            }}
        >
        <div className="timer">
          {`${minutes}:00`}
        </div>
        <div className="description"> Hora de focar! </div>
          </CircularProgressbarWithChildren>
        </div>

        <Button 
          bgColor="#D35149"
          type="button">Iniciar</Button>
      </Card>

      <Steps>
        <span>#{progress < 4 ? progress + 1 : progress}</span>
        <Progress 
          progress={progress} 
          />
      </Steps>

      { toggle && (
         <Settings>
          <div className="header">
            <h2>Configurações do Timer</h2>
            <button type="button" onClick={() => setToggle(prevState => !prevState)}>
              <img src={close} alt="Fechar" />
            </button>
          </div>

          <hr />

          <Form>
            <h3>Tempo ( minutos )</h3>
            <div>
              <div> 
                <label htmlFor="pomodoro-input">Pomodoro</label>
                <input type="number" name="pomodoro" id="pomodoro-input" value={25}/>
              </div>
              <div> 
                <label htmlFor="short-break-input">Pausa curta</label>
                <input type="number" name="short-break" id="short-break-input" value={5} />
              </div>
              <div>
                <label htmlFor="long-break-input">Pausa longa</label>
                <input type="number" name="long-break" id="long-break-input" value={15} />
              </div>         
            </div>
            <hr />

            <div className="set-interval">
              <label htmlFor="set-interval-input">Intervalo entre pausas longas</label>
              <input type="number" name="interval" id="set-interval-input" value={4}/>
            </div>

            <hr />

            <div className="change-theme">
              <h3>Tema escuro ( em breve )</h3>
              <Switch onChange={() => setSwitcher(prevState => !prevState)} checked={switcher} onColor="#000"/>
            </div>
           
            <Button type="submit" bgColor="rgba(0, 0, 0, .8)">Salvar</Button>
         </Form>
      </Settings>
     ) }
    </Wrapper>
  )
}