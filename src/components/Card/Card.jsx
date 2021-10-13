import React, { useState, useEffect }from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { Section } from './Card'
import Button from '../Button/Button.jsx';
import Progress from '../../components/Progress/Progress.jsx'
import { Steps } from '../../views/styles/styles';

export default function Card({ theme }) {
    const [ timerOption, setTimerOption ] = useState('pomodoro');
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

    return (
        <Section color={currentButtonColor}>
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

                <Steps>
                    <span>#{progress < 4 ? progress + 1 : progress}</span>
                    <Progress 
                        progress={progress}
                        color={currentButtonColor} 
                        />
                </Steps>
            </Section>
    )
}