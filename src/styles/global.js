import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  input,
  button {
    border: 0;
    outline: none;
  }
  
  button {
    cursor: pointer;
  }
`