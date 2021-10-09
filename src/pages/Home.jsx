import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Wrapper, Header, Card, Button, Steps, Settings, Form, Text, Footer } from './styles/styles';
import Progress from '../components/Progress'
import StepByStep from '../components/StepByStep'
import logo from '../images/tomato.svg'
import close from '../images/close.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'
import settings from '../images/settings.svg'
export default function Home() {
  const [ toggle, setToggle ] = useState(false);
  const [ minutes, setMinutes ] = useState(25)
  const [ timerOptionClassName, setTimerOptionClassName ] = useState('pomodoro');
  const [ progress, setProgress ] = useState(0);
  const [ switcher, setSwitcher ] = useState(false);

  const handleChangeTimerOption = event => {  // função temporária, apenas para testes
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
        <div className="description"> { minutes === 25 ? 'Hora de focar!' : 'Hora de dar uma pausa!' } </div>
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

      <Text>
        <div>
          <h2>Qual a finalidade desta aplicação?</h2>
          <hr />
          
          <p>Este aplicativo é um temporizador online e personalizável. O objetivo deste aplicativo é simples, ajudá-lo a manter foco para uma melhor realização de suas tarefas, sejam elas trabalhos ou estudos, se inspirando na técnica pomodoro. Saiba mais sobre esta técnica em <a target="_blank" rel="external" href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro"><strong>Wikipedia.</strong></a> </p>
        </div>
        
        <div>
          <h2>O que é a técnica Pomodoro?</h2>
          <hr />
          <p>
            A técnica pomodoro foi criado por pelo italiano Francesco Cirillo no final dos anos 80, que procurava uma forma de aumentar sua produtividade nos estudos e trabalho. A técnica deriva seu nome da palavra italiana pomodoro (tomate), como referência ao popular cronômetro gastronômico na forma dessa fruta. A técnica utiliza um cronômetro para dividir a realização de uma tarefa em pequenos intervalos, tradicionalmente de 5 minutos a cada 25 minutos, nos 25 minutos deve ser mantido o foco total na tarefa, após o cronômetro disparar deve-se descansar por 5 minutos, sendo um ciclo de 4 etapas, na fim do ciclo é dado um descanso mais longo de 15 minutos 
          </p>
        </div>
        <div>
          <h2>Como usar a técnica Pomodoro?</h2>
          <hr />
          <StepByStep />
        </div>
      </Text>

      <Footer>
        <span>Feito com &lt;3 by <a href="mailto:igorfigueiredors@gmail.com"><strong>Igor Figueiredo</strong></a></span>
        <div>
          <a target="_blank" rel="external" href="https://www.github.com/igorfig">
           <img src={github} alt="github" />
          </a>
          <a target="_blank" rel="external" href="https://www.instagram.com/igufs123/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        </Footer>
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