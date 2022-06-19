import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  margin-top: 25vh;
  padding: 2.4rem 1.4rem;
  background: var(--white-instructions-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  @media(max-width: 480px) {
    margin-top: 20vh;
  }

  div {
    margin-bottom: 45px;
    max-width: 600px;
    width: 100%;

    h2 {
      color: var(--black-title);
      font-size: 2rem;

      @media(max-width: 480px) {
        font-size: 1.4rem;
      }
    }
    hr {
      width: 50px;
      height: 5px;
      background: var(--tomato);
      position: relative;
      float: left;
      border: 0;
      margin-top: 5px;
    }

    p {
      text-align: justify;
      margin-top: 30px;
      color: var(--black-600);
      font-weight: 500;
    }

    ol { 
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
      padding: 1rem;

      li {
        color: var(--black-600);
      }

      li + li {
        margin-top: 10px;
      }
    }
  }
`