/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

import {ThemeProvider, createGlobalStyle} from 'styled-components'

const theme = {
  colors:{
    accent:'#F64E3E',
    primary: '#121212',
    textLight: '#ffffff',
    textDark: '#121212',
  },
  font:{
    display: "'Fredoka One', Arial, Helvetica, sans-serif",
    regular: "Arial, Helvetica, sans-serif",
  }
}

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    font-family: ${props => props.theme.font.regular};
  }
  body{
    margin:0;
  }
  h1{
    font-size:5rem;
  }
  h2{
    font-size:4rem;
  }
  h3{
    font-size:2.5rem;
  }
  h4{
    font-size:2rem;
  }
  h5{
    font-size:1.75rem;
  }
  h6{
    font-size:1.5rem;
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    {element}
  </ThemeProvider>
)