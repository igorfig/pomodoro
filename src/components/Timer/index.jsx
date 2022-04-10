import { useState, useEffect, useCallback } from "react";
import { toast } from 'react-toastify';


import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { Container } from "./styles";
import { Button } from "../Button/index.jsx";

import clockImg from '../../assets/images/clock.svg'

import alarm from "../../assets/audio/alarm.mp3";
import notificationSong from '../../assets/audio/notification.mp3'
import { usePreferences } from "../../hooks/usePreferences";

export function Timer() {
  const { userPreferences } = usePreferences();

  const [timerOption, setTimerOption] = useState("pomodoro");
  const [timer, setTimer] = useState({
    "pomodoro": userPreferences["pomodoro"],
    "short-break": userPreferences["short-break"],
    "long-break": userPreferences["long-break"],
  });

  const [currentButtonColor, setCurrentButtonColor] = useState(null);
  const [progress, setProgress] = useState(1);
  const [progressBeforeBreak, setProgressBeforeBreak] = useState(0);
  const [secondsAmount, setSecondsAmount] = useState(timer[timerOption] * 60);
  const [start, setStart] = useState(false);
  
  const minutes = String(Math.floor((secondsAmount % 3600) / 60)).padStart(2, '0');
  const seconds = String(secondsAmount % 60).padStart(2, '0');

  useEffect(
    () =>
      setTimer({
        "pomodoro": userPreferences["pomodoro"],
        "short-break": userPreferences["short-break"],
        "long-break": userPreferences["long-break"],
      }),
    [userPreferences]
  );

  useEffect(() => {
    const Colors = {
      "pomodoro": "#FE504F",
      "short-break": "#468E91",
      "long-break": "#437EA8",
    };
    setCurrentButtonColor(Colors[timerOption]);
  }, [timerOption]);

  useEffect(() => {
    if(progress > 1) {
      if(timerOption === 'short-break' || timerOption === 'long-break') {
        userPreferences["auto-start-break"] && setStart(true);
      } if(timerOption === 'pomodoro') {
        userPreferences["auto-start-pomodoro"] && setStart(true);
      }
    }
  }, [timerOption, progress, userPreferences])

  function handleChangeTimerOption(event) {
    if (!start) {
      setTimerOption(event.target.id);
    } else {
      const switchTimerOptionConfirm = window.confirm(
        "O crônometro ainda está em execução, Tem certeza que deseja mudar?"
      );
      if (switchTimerOptionConfirm) {
        setStart(false);
        setSecondsAmount(timer[timerOption] * 60 + seconds);
        setTimerOption(event.target.id);
      }
    }
  }

  useEffect(() => {
    setSecondsAmount(timer[timerOption] * 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, timerOption]);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setSecondsAmount((prevState) => prevState - 1);
      }, 1000);
      document.title = `${minutes}:${seconds} | Pomodoro Timer`;

      if (secondsAmount === 0) {
        setStart(false);
        setTimeout(() => {
          if (timerOption === "pomodoro") {
            setProgress((prevState) => prevState + 1);
            progressBeforeBreak < userPreferences["long-break-interval"] &&
              setProgressBeforeBreak((prevState) => prevState + 1);
            progressBeforeBreak + 1 < userPreferences["long-break-interval"]
              ? setTimerOption('short-break')
              : setTimerOption('long-break');
          } else {  
            setTimerOption("pomodoro");
          }
          if (timerOption === "long-break") {
            setProgressBeforeBreak(0);
          }
        }, 300);
        setSecondsAmount(timer[timerOption] * 60);
        const audio = new Audio(alarm);
        audio.play();
      }

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPreferences, start, secondsAmount]);

  useEffect(() => {
    setStart(false);
  }, [userPreferences])

  const notifyUser = (secondsAmount) => {
    const audio = new Audio(notificationSong)
    audio.play();

    toast(
    <div className="toast-content">
      <img src={clockImg} alt="Relógio" />
      <span>Restam {String((secondsAmount % 3600) / 60)} minutos para o desacanso</span>
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  useEffect(() => {
    if(userPreferences["notifications"]){
      if(timerOption === 'pomodoro' && start) {
        if(timer["pomodoro"] >= 10) {
          if(secondsAmount === 300) {
            notifyUser(300); // 5 minutes
          }
        } else if(Number(timer["pomodoro"]) >= 5){
          if(secondsAmount === 120) {
            notifyUser(120); // 2 minutes
          }
        }
      }
    }
  }, [start, timerOption, timer, secondsAmount, userPreferences])

  const handleStart = useCallback(
    () => setStart((prevState) => !prevState),
    []
  );
  const handleSkip = () => {
    const skipTimerConfirm = window.confirm(
      "Tem certeza de que deseja terminar a rodada mais cedo?"
    );

    if (skipTimerConfirm) {
      setStart(false);
        if(timerOption === 'short-break') {
            setTimerOption('pomodoro')
        } else if(timerOption === 'long-break') {
            setTimerOption('pomodoro')
            setProgressBeforeBreak(0);
        }

        if(timerOption === 'pomodoro' && progressBeforeBreak + 1 < userPreferences["long-break-interval"]) {
            setTimerOption('short-break')
            setProgress((prevState) => prevState + 1)
            setProgressBeforeBreak((prevState) => prevState + 1)
        } else if(timerOption === 'pomodoro' && progressBeforeBreak + 1 === userPreferences["long-break-interval"]) {
            setTimerOption('long-break')
            setProgressBeforeBreak(prevState => prevState + 1);
        }
    }
  };

  return (
    <Container color={currentButtonColor}>
      <div className="options">
        <button
          type="button"
          id="pomodoro"
          className={"pomodoro" === timerOption ? "selected" : ""}
          onClick={handleChangeTimerOption}
        >
          Pomodoro
        </button>

        <button
          type="button"
          id="short-break"
          className={"short-break" === timerOption ? "selected" : ""}
          onClick={handleChangeTimerOption}
        >
          Pausa pequena
        </button>

        <button
          type="button"
          id="long-break"
          className={"long-break" === timerOption ? "selected" : ""}
          onClick={handleChangeTimerOption}
        >
          Pausa longa
        </button>
      </div>

      <div className="progress-bar">
        <CircularProgressbarWithChildren
          value={secondsAmount}
          maxValue={timer[timerOption] * 60}
          minValue={0}
          strokeWidth={4}
          styles={{
            path: {
              stroke: currentButtonColor,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },

            trail: {
              stroke: "rgba(117, 116, 116, 0.1)",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
          }}
        >
          <div className="timer">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          <div className="description">
            {" "}
            {timerOption === "pomodoro"
              ? "Hora de focar!"
              : "Hora de dar uma pausa!"}{" "}
          </div>
          {start && (
            <button onClick={handleSkip} className="skip-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 512 512"
                fill={currentButtonColor}
              >
                <path d="M 100.257,92.648 A 10.044,10.044 0 0 0 84,100.5 v 311 a 10.039,10.039 0 0 0 16.249,7.849 l 196.981,-155.5 a 10,10 0 0 0 0,-15.7 z M 104,390.868 V 121.132 L 274.838,256 Z M 428,100 A 10,10 0 0 0 418,90 h -71 a 10,10 0 0 0 -10,10 v 311 a 10,10 0 0 0 10,10 h 71 a 10,10 0 0 0 10,-10 z M 408,402 H 357 V 110 h 51 z"></path>
              </svg>
            </button>
          )}
        </CircularProgressbarWithChildren>
      </div>

      <Button
        background={currentButtonColor}
        type="button"
        onClick={handleStart}
      >
        {!start ? "Iniciar" : "Parar"}
      </Button>

      <div className="progress">
        <span>#{progress}</span>
        <div>
          {new Array(userPreferences["long-break-interval"]).fill(0).map((_, index) => (
            <div key={index} className={progressBeforeBreak > index ? 'completed' : ''}></div>
            )
          )}
        </div>
      </div>
    </Container>
  );
}
