import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  background: rgba(238, 238, 238);
  
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
    color: #292525;
  }

  }

`
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;;
  max-width: 500px;
  width: 100%;
  background-color: rgba(255,255,255,0.1);
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
      color: #292525;
      font-size: 18px;
      font-weight: 500;
      padding: 8px;
      background: transparent;

      &.selected {
        background: rgba(0,0,0,0.1);
        font-weight: bold;
        border-radius: 3px;
        color: #D35149;
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
    width: 225px;

    .timer {
      font-weight: bold;
      font-size: 48px;
      margin-bottom: 10px;
      color: #292525;
    }

    .description {
      font-weight: 400;
      font-size: 14px;
      color: #292525;
    }
  }
`

export const Button = styled.button`
  height: 50px;
  width: 100%;
  margin-top: 30px;
  border-radius: 100px;
  background: #fff ;

  font-size: 20px;
  font-weight: bold;
  color: white;
  background: ${props => ( props.bgColor )};
  `

export const Steps = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 20px;
    color: #292929;
    opacity: .6;
    font-weight: 700;
  }
`

export const Settings = styled.div`
  z-index: 999;
  position: absolute;
  margin-top: 7rem;
  width: 480px;
  background: #fff;
  padding: 1.2rem;
  color: #fff;
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
      color: rgba(0, 0, 0, .5);
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
    color: #eee;
    margin-bottom: 10px;
  }
`

export const Form = styled.form`
  h3 {
    color: #292929;
  } 

  input {
    background: rgba(238, 238, 238, 0.8);
    color: rgba(41, 41, 41, 0.801);
    padding: 10px;
    border-radius: 6px;
    font-size: 16px;
  }

  label {
    color: rgba(0, 0, 0, .5);
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
      font-weight: bold;
    }

    input {
      background: rgba(238, 238, 238, 0.8);
      color: rgba(41, 41, 41, 0.801);
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