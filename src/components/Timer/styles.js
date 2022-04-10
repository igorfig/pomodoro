import styled from 'styled-components';

export const Container = styled.section`
  margin: 1.5rem auto 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  padding: 0 1rem;
  border-radius: 6px;

  @media(max-width: 480px) {
    max-width: 350px;
  }

  .options {
    display: flex;
    align-items: center;
    margin: 10px 0 30px 0;    

    button {
      color: var(--black-font);
      font-size: 1.125rem;
      @media(max-width: 480px) {
        font-size: .95rem;
      }
      
      font-weight: 500;
      padding: 8px;
      background: transparent;

      transition: color, background-color .3s;

      &:not(.selected) {
        opacity: .7;
        transition: opacity .3s;
        &:hover {
          opacity: 1;
        }
      }

      &.selected {
        background: var(--gray);
        font-weight: 700;
        border-radius: 5px;
        color: ${({ color }) => color};
      }
    }

    button + button {
      margin-left: 10px;
    }
  }
  .progress-bar {
    width: 300px;

    .timer {
      font-weight: bold;
      font-size: 3.2rem;
      margin-bottom: 10px;
      color: var(--black-font);
    }

    .description {
      font-weight: 500;
      font-size: 1rem;
      color: var(--black-font);
    }

    .skip-btn {
      animation: fade .3s 1 ease-in;
      @keyframes fade {
        from {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }

      background: transparent;
      position: relative;
      top: 20px;
      bottom: 0;

      img {
        color: blue;
      }
    }
  }

  .progress {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -100px;

    span {
      font-size: 1.5rem;
      color: var(--black-font);
      opacity: .6;
      font-weight: 700;
    }

    div {
      display: flex;
      align-items: center;
      margin-top: 15px;

      div {
        background: var(--gray-100);
        height: 15px;
        width: 15px;
        border-radius: 50%;

        &.completed {
          background: ${props => ( props.color )};
        }
      }

      div + div {
        margin-left: 20px;
      }
    }
  }
`