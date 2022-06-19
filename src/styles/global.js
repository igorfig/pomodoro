import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --tomato: #F25F5C;

    --white: #fff;
    --white-instructions-bg: #f7f7f7fa;
    --white-800: #eee;

    --gray: #0000001a;
    --gray-100: #7574744d;
    
    --black-400: #151620b3;
    --black-600: #00000099;
    --black-title: #1b1b1bc9;
    --black-font: #151620;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media(max-width: 720px) {
        font-size: 87,5%;
    }
}
  * html ul li { float: left; }
  * html ul li a { height: 1%; }

  a {
    text-decoration: none;
  }


  strong {
      color: var(--tomato);
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background: var(--white);
  }

  html {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87,5%;
        }
    }
    * html ul li { float: left; }
    * html ul li a { height: 1%; }

  label.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow:hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
  }

  input,
  button {
    border: 0;
    outline: none;
  }
  
  button {
    cursor: pointer;
  }

  hr {
    width: 80%;
    margin: 0 auto;
  }

  footer {
    padding: 10px;
    text-align: center;
    color: var(--black-font);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        margin-bottom: 20px;
        a {
        text-decoration: none;
        }
    }

    a + a {
        margin-left: 10px;
    }
  }

  .settings-modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 998;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100vh;

    @media(max-width: 480px) {
      align-items: flex-start;
    }

    justify-content: center;

    .settings-modal {
      outline: none;
      z-index: 999;
      position: fixed;
      width: 480px;
      background: var(--white);
      padding: 1.8rem 1.5rem;
      border-radius: 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      animation: fade-in .3s 1;

      @keyframes fade-in {
        from {
          opacity: 0;
          transform: scale(0);
        }

        to {
          opacity: 1;
          transform: scale(1);
        }
      }


      @media(max-width: 480px) {
        width: 370px;
        margin-top: 9rem;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content:space-between;
        
        h2 {
          font-size: 1.125rem;
          font-weight: 500;
          opacity: .7;
          color: var(--black-title);
        }

        button {
          background: transparent; 
          opacity: .3;

          transition: opacity .3s;
          &:hover {
            opacity: .5;
          }
        }
      }

      hr {
        margin: 10px 0 20px 0;
        width: 100%;
        height: 1px;
        opacity: .3;
      }

      h3 {
        font-size: 15px;
        color: var(--black-font);
        margin-bottom: 10px;
      }
      form {
        h3 {
          color: var(--black-font);
          font-weight: 500;
        } 

        input {
          background: var(--white-800);
          color: #212025;
          padding: 10px;
          border-radius: 6px;
          font-size: 16px;
        }

        label, span {
          color: var(--black-400);
        }

        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          div {
            display: flex;
            flex-direction: column;

            label {
              font-size: 14px;
            }

            input {
              width: 80%;
            }
          }
        }

        hr {
            margin-top: 20px;
        }

        .set-interval {
          display: flex;
          align-items: center;
          justify-content:space-between;
          flex-direction: row;

          label {
            font-size: 16px;
            font-weight: 500;
          }

          input {
            padding: 10px;
            width: 60px;
          }
        }

        .auto-start-pomodoro, .auto-start-breaks, .on-off-notications {
          span {
            font-size: 1rem;
            font-weight: 500;
          }
        }

        .on-off-notications {
          margin-bottom: 20px;
        }
      }
    }
  }

  .Toastify__toast-container {
    width: 400px;
    @media(max-width: 480px) {
      max-width: 100vw;
      padding: 0 .5rem;
      width: 100%;
      position: absolute;
      top: 2rem;
      margin: 0 auto;
    }
  }

  .toast-content { /* custom class */
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 480px) {
      font-size: 1rem;
    }

    img {
      margin-right: .8rem;
      width: 32px;
      width: 32px;
    }
  }

  .Toastify__progress-bar {
    background: var(--tomato);
  }

  .Toastify__close-button {
    align-self: center;
  }

  .Toastify__close-button > svg {
    width: 28px;
    height: 28px;
  }

`;
