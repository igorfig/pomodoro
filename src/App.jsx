import { useState, useCallback } from 'react';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "./styles/global";

import { Header } from "./components/Header/index";
import { Timer } from "./components/Timer/index";
import { Instructions } from "./components/Instructions";

import instagramImg from "./assets/images/instagram.svg";
import githubImg from "./assets/images/github.svg";
import { UserPreferencesProvider } from "./hooks/usePreferences";
import { ModalProvider } from "./hooks/useModal";
import { TaskList } from "./components/TaskList";
import { UserTasksProvider } from "./hooks/useTask";

function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [timerOption, setTimerOption] = useState();
  const handleRenderTimeLeft = useCallback((timeLeft) => setTimeLeft(timeLeft), []);
  const handleGetTimerOption = useCallback((timerOption) => setTimerOption(timerOption), [])
  const [currentColor, setCurrentColor] = useState('');
  const updateCurrentColor = useCallback((color) => setCurrentColor(color), []);


  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserPreferencesProvider>
        <ModalProvider>
          <Header />
        </ModalProvider>
        <UserTasksProvider>
          <Timer setTimeLeft={handleRenderTimeLeft} getTimerOption={handleGetTimerOption} setCurrentColor={updateCurrentColor}/>
          <TaskList timeLeft={timeLeft} timerOption={timerOption} currentColor={currentColor}/>
        </UserTasksProvider>
      </UserPreferencesProvider>
      <Instructions />
      <footer>
        <span>
          Feito com &lt;3 by&nbsp;
          <a rel="noreferrer" href="mailto:contato.igorfig@gmail.com">
            <strong>Igor Figueiredo</strong>
          </a>
        </span>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/igorfig"
          >
            <img src={githubImg} width="40" height="40" alt="github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/igufs123/"
          >
            <img src={instagramImg} width="40" height="40" alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
