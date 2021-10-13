import styled from 'styled-components';

export const Wrapper = styled.div`
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