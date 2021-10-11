import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ThemeProvider } from 'styled-components'

import { Wrapper, Header, Card, Button, Steps, Settings, Form, Text, Footer } from './styles/styles';
import { lightTheme, darkTheme } from '../styles/themes/theme';

import Progress from '../components/Progress/Progress.jsx'
import StepByStep from '../components/Steps/StepByStep.jsx'

import tomato from '../images/light/tomato.svg'
import darkTomato from '../images/dark/darkTomato.svg'

import close from '../images/light/close.svg'
import darkClose from '../images/dark/darkClose.svg'

import github from '../images/light/github.svg'
import darkGithub from '../images/dark/darkGithub.svg'

import instagram from '../images/instagram.svg'

import darkSettings from '../images/dark/darkSettings.svg'
import lightSettings from '../images/light/settings.svg'

export default function Home() {
  /* interface states */
  const [ toggle, setToggle ] = useState(false);
  const [ switcher, setSwitcher ] = useState(true);
  const [ timerOption, setTimerOption ] = useState('pomodoro');
  const [ theme, setTheme ] = useState(darkTheme)
  const [ currentButtonColor, setCurrentButtonColor ] = useState(theme.button)

  const [ progress, setProgress ] = useState(0);

  useEffect(() => { 
    const Colors = {
      pomodoro: theme.button,
      'short-break': "#468E91",
      'long-break': "#437EA8"
    }
    setCurrentButtonColor(Colors[timerOption])
  }, [theme.button, timerOption])

  useEffect(() => switcher ? setTheme(darkTheme) : setTheme(lightTheme), [switcher]);
  function handleSubmit() {
    setToggle(false);
  }

  const handleToggle = () => setToggle(prevState => !prevState)
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header>
          <div>
            <img src={theme === darkTheme ? darkTomato : tomato} alt="Pomodoro" />
            <h1>Pomofocus</h1>
          </div> 
          <button type="button" onClick={handleToggle}>
            <img src={theme === lightTheme ? lightSettings : darkSettings} alt="Configurações" />
          </button>
          
        </Header>
        
        <hr />

        <Card color={currentButtonColor}>
        <div className="options">
          <button 
            type="button" 
            id="pomodoro" 
            className={'pomodoro' === timerOption ? 'selected' : '' } 
            onClick={event => setTimerOption(event.target.id)}>Pomodoro</button>

          <button 
            type="button" 
            id="short-break" className={'short-break' === timerOption ? 'selected' : '' } 
            onClick={event => setTimerOption(event.target.id) }>Pausa pequena</button>

          <button 
            type="button" 
            id="long-break" className={'long-break' === timerOption ? 'selected' : '' } 
            onClick={event => setTimerOption(event.target.id) }>Pausa longa</button>
        </div>

        <div className="progress-bar">
          <CircularProgressbarWithChildren 
              value={17}
              maxValue={25} // default value
              minValue={0}
              strokeWidth={4}
              styles={{
                path: {
                  stroke: currentButtonColor
                },
        
                trail: {
                  stroke:"rgba(117, 116, 116, 0.1)"
                }
              }}
          >
          <div className="timer">
              17:50
          </div>
          <div className="description"> { timerOption === 'pomodoro' ? 'Hora de focar!' : 'Hora de dar uma pausa!' } </div>
            </CircularProgressbarWithChildren>
          </div>

          <Button 
            background={currentButtonColor}
            type="button">Iniciar</Button>
        </Card>

        <Steps>
          <span>#{progress < 4 ? progress + 1 : progress}</span>
          <Progress 
            progress={progress}
            color={theme.stroke} 
            />
        </Steps>

        <Text>
          <div>
            <h2>Qual a finalidade desta aplicação?</h2>
            <hr />
            
            <p>Este aplicativo é um temporizador online e personalizável. O objetivo deste aplicativo é simples, ajudá-lo a manter foco para uma melhor realização de suas tarefas, sejam elas trabalhos ou estudos, se inspirando na técnica pomodoro. Saiba mais sobre esta técnica em <a target="_blank" rel="noreferrer" href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro"><strong>Wikipedia.</strong></a> </p>
          </div>
            
          <div>
            <h2>O que é a técnica Pomodoro?</h2>
            <hr />
            <p>
              A técnica pomodoro foi criado por pelo italiano Francesco Cirillo no final dos anos 80, que procurava uma forma de aumentar sua produtividade nos estudos e trabalho. A técnica deriva seu nome da palavra italiana pomodoro (tomate), como referência ao popular cronômetro gastronômico na forma dessa fruta. A técnica utiliza um cronômetro para dividir a realização de uma tarefa em pequenos intervalos, tradicionalmente de 5 minutos a cada 25 minutos, nos 25 minutos deve ser mantido o foco total na tarefa, após o cronômetro disparar deve-se descansar por 5 minutos, sendo um ciclo de 4 etapas, na fim do ciclo é dado um descanso mais longo de 15 minutos.
            </p>
          </div>
          <div>
            <h2>Como usar a técnica Pomodoro?</h2>
            <hr />
            <StepByStep />
          </div>
        </Text>

        <Footer>
          <span>Feito com &lt;3 by <a rel="noreferrer" href="mailto:igorfigueiredors@gmail.com"><strong>Igor Figueiredo</strong></a></span>
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/igorfig">
            <img src={theme === darkTheme ? darkGithub : github} alt="github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/igufs123/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          </Footer>
        { toggle && (
          <Settings>
            <div className="header">
              <h2>Configurações do Timer</h2>
              <button type="button" onClick={() => setToggle(prevState => !prevState)}>
                <img src={theme === darkTheme ? close : darkClose} alt="Fechar" />
              </button>
            </div>

            <hr />

            <Form onSubmit={handleSubmit}>
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
                <h3>Tema escuro ( em breve )</h3>
                <Switch onChange={() => setSwitcher(prevState => !prevState)} checked={switcher} onColor="#000"/>
              </div>
            
              <Button type="submit" background={currentButtonColor}>Salvar</Button>
          </Form>
        </Settings>
      ) }
      </Wrapper>
    </ThemeProvider>
  )
}