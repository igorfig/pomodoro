import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "./styles/global";

import { Header } from "./components/Header/index";
import { Timer } from "./components/Timer/index";
import { Instructions } from "./components/Instructions";

import instagramImg from "./assets/images/instagram.svg";
import githubImg from "./assets/images/github.svg";
import { UserPreferencesProvider } from './hooks/usePreferences'
import { ModalProvider } from "./hooks/useModal";

function App() {
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
        <Timer />
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
