import React, { useState, useEffect }from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import { Section } from './Card'
import Button from '../Button/Button.jsx';
import Progress from '../../components/Progress/Progress.jsx'
import { Steps } from '../../views/styles/styles';

export default function Card({ theme, preferences }) {
    const [ timerOption, setTimerOption ] = useState('pomodoro');
    const [timer, setTimer] = useState({
        'pomodoro': preferences['pomodoro'],
        'short-break': preferences['short-break'],
        'long-break': preferences['long-break'],
    })
    const [ currentButtonColor, setCurrentButtonColor ] = useState(theme.button)
    const [ progress, setProgress ] = useState(1);
    const [ progressBeforeBreak, setProgressBeforeBreak ] = useState(0)
    const [ minutes, setMinutes ] = useState(timer[timerOption]); // visual side
    const [ seconds, setSeconds ] = useState(0);
    const [ totalOfSeconds, setTotalOfSeconds ] = useState(timer[timerOption] * 60 + seconds) //logical side
    const [ start, setStart ] = useState(false);

    useEffect(() => setTimer({
        'pomodoro': preferences['pomodoro'],
        'short-break': preferences['short-break'],
        'long-break': preferences['long-break']
    }),[preferences])

    const handleStart = event => { 
        setStart(prevState => !prevState)
    }

    useEffect(() => {
       setMinutes(timer[timerOption]);
       setTotalOfSeconds(timer[timerOption] * 60 + seconds);
       setSeconds(0);
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer, timerOption])

    function updateMinutes() {
        setMinutes(prevState => prevState - 1);
        setSeconds(59);
    }


    useEffect(() => {
        if(start) {
            const switchConfirm = window.confirm('O crônometro ainda está em execução, Tem certeza que deseja mudar?')
            if(switchConfirm) {
                setStart(false);
                setMinutes(timer[timerOption]);
                setTotalOfSeconds(timer[timerOption] * 60 + seconds);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timerOption])

    useEffect(() => {
        if(start) {
            const interval = setInterval(() => {
                seconds < 60 && seconds > 0 && setSeconds(prevState => prevState - 1)
                minutes > 0 && seconds === 0 && updateMinutes();
                
                setTotalOfSeconds(prevState => prevState - 1)
            }, 1000)

             if(totalOfSeconds === 0) {
                    setStart(false);
                    setMinutes(timer[timerOption])
                    setTimeout(() => { 
                        if(timerOption === 'pomodoro') {
                            setProgress(prevState => prevState + 1)
                            progressBeforeBreak < preferences['long-break-interval'] && setProgressBeforeBreak(prevState => prevState + 1)
                            progressBeforeBreak + 1 < preferences['long-break-interval'] ? setTimerOption('short-break') : setTimerOption('long-break')
                        } else {
                            setTimerOption('pomodoro')
                        }
                        if(timerOption === 'long-break'){
                            setProgressBeforeBreak(0)
                        }
                    }, 300)
                    setTotalOfSeconds(timer[timerOption] * 60)
                    
                }
            return () => clearInterval(interval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, minutes, seconds, totalOfSeconds])


    // document title changes
    useEffect(() => {
        const formatedTimer = {
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: seconds < 10 ? `0${seconds}` : seconds        
        }

        document.title = `
            ${formatedTimer.minutes}:${formatedTimer.seconds}
            | Pomodoro Timer
        `
    }, [minutes, seconds])

    // current button color update
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
                    value={totalOfSeconds}
                    maxValue={timer[timerOption] * 60}
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
                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}`: seconds}
                        </div>
                        <div className="description"> { timerOption === 'pomodoro' ? 'Hora de focar!' : 'Hora de dar uma pausa!' } </div>
                    </CircularProgressbarWithChildren>
                </div>

                <Button 
                    background={currentButtonColor}
                    type="button"
                    onClick={handleStart}>{ !start ? 'Iniciar' : 'Parar' }</Button>

                <Steps>
                    <span>#{progress}</span>
                    <Progress 
                        interval= {preferences['long-break-interval']}
                        progress={progressBeforeBreak}
                        color={currentButtonColor} 
                        />
                </Steps>
            </Section>
    )
}