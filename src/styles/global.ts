import { getStylesTypography } from 'components/atoms/Typography/styles'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body * {
    margin: 0;
    padding: 0;
    color: currentColor;
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
     ${getStylesTypography('body')};
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
