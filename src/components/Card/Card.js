import styled from 'styled-components';

export const Section = styled.section`
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
      font-size: 13px;
      color: ${({ theme } ) => ( theme.color )};
    }
  }
`