import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.main_bg};
  
  hr {
    max-width: 80%;
    width: 100%;
    height: 1px;
    background: '#000';
    margin: 0 auto;

    @media(max-width: 480px) {
      width: 80%;
   }
  }
  
`

export const Header = styled.div`
  height: 100px;
  max-width: 800px;
  width: 100%;
  padding: 1rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  
  @media(max-width: 480px) {
    width: 400px;
  }

  div {  
    display: flex;
    align-items: center;
    flex-direction: row;
    
    h1 {
      font-size: 1.6rem;
      font-weight: bold;
      margin-left: 10px;
      display: flex;
      align-items: center;
      color: ${({ theme } ) => ( theme.color )};
    }
  }

  button {
    background: transparent;
  }


`
export const Card = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  border-radius: 6px;

  @media(max-width: 480px) {
    max-width: 350px;
  }

  .options {
    display: flex;
    align-items: center;
    margin: 10px 0 30px 0;    

    button {
      color: ${({ theme } ) => ( theme.color )};
      font-size: 18px;
      font-weight: 500;
      padding: 8px;
      background: transparent;

      &.selected {
        background: ${({ theme }) => theme.selected };
        font-weight: bold;
        border-radius: 3px;
        color: ${props => ( props.color )};
      }
      
      @media(max-width: 480px) {
        font-size: 14px;
      }      

    }

    button + button {
      margin-left: 10px;
    }
  }
  .progress-bar {
    width: 240px;

    .timer {
      font-weight: bold;
      font-size: 48px;
      margin-bottom: 10px;
      color: ${({ theme } ) => ( theme.color )};
    }

    .description {
      font-weight: 500;
      font-size: 14px;
      color: ${({ theme } ) => ( theme.color )};
    }
  }
`

export const Button = styled.button`
  height: 50px;
  width: 100%;
  margin-top: 30px;
  border-radius: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #f6f8fd;
  background: ${props => ( props.background )};
  `

export const Steps = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -100px;

  span {
    font-size: 20px;
    color: ${({ theme } ) => ( theme.color )};
    opacity: .6;
    font-weight: 700;
  }
`

export const Settings = styled.div`
  z-index: 999;
  position: fixed;
  margin-top: 7rem;
  width: 480px;
  background: ${({ theme }) => theme.settings_bg};
  padding: 1.2rem;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;


  @media(max-width: 480px) {
    width: 370px;
    margin-top: 9rem;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content:space-between;
    

    h2 {
      font-size: 16px;
      font-weight: 500;
      color: ${({ theme }) => theme.light }
    }

    button {
      background: transparent; 
      opacity: .3;
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
    color: ${({ theme } ) => ( theme.color )};
    margin-bottom: 10px;
  }
`

export const Form = styled.form`
  h3 {
    color: ${({ theme } ) => ( theme.color )};
    font-weight: 500;
  } 

  input {
    background: ${({ theme }) => theme.input_bg};
    color: #212025;
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
  }

  label {
    ${({ theme }) => theme.color === '#151620' ? ({ color: 'rgb(21, 22, 32, 0.7)' }) : ({ color: 'rgba(246, 248, 253, 0.7)' }) }
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
      margin-top: 30px;
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

  .change-theme {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    @media(max-width: 480px) {
      margin-bottom: 60px;
  }
  }
`

export const Text = styled.div`
  width: 100vw;
  margin-top: 25vh;
  padding: 2.4rem 1.4rem;
  background: ${({ theme}) => theme.text_bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px 30px 30px 30px;
  @media(max-width: 480px) {
    margin-top: 35vh;
  }

  div {
    margin-bottom: 45px;
    max-width: 600px;
    width: 100%;

    h2 {
      color: ${({ theme } ) => ( theme.subtitle )};
      font-size: 28px;

      @media(max-width: 480px) {
        font-size: 1.4rem;
      }
    }
    hr {
      width: 50px;
      height: 5px;
      background: ${({ theme}) => theme.row};
      position: relative;
      float: left;
      border: 0;
      margin-top: 5px;
    }

    p {
      text-align: justify;
      margin-top: 30px;
      color: ${({ theme } ) => ( theme.text )};
      font-weight: 500;
      @media(max-width: 480px) {
        font-size: 14px;
      }
      a {
        text-decoration: none;
      }
      strong {
        color: ${({ theme }) => ( theme.row )};
      }
    }
  }
`

export const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  color: ${({ theme } ) => ( theme.color )};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    color:${({ theme }) => ( theme.row )};
  }

  span {
    margin-bottom: 20px;
    a {
      text-decoration: none;
    }
  }

  a + a {
    margin-left: 10px;
  }
`