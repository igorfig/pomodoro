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

export const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content:center;
`

export const FooterWrapper = styled.footer`
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

export const HeaderWrapper = styled.header`
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



export const Section = styled.section`
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

    ol { 
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 20px;
      padding: 1rem;

      li {
        color: ${({ theme } ) => ( theme.text )};
      }

      li + li {
        margin-top: 10px;
      }
    }
  }
`