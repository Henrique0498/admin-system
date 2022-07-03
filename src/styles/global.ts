import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

    :focus,
    :hover{
      outline:none;
    }

  }

  html {
  }

  html, body, #__next {
    min-height: 100%;
  }

  body {
    font-size:  0.875rem;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
