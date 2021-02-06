import {createGlobalStyle} from 'styled-components'

export const theme = {
  colors:{
    accent:'#F64E3E',
    primary: '#121212',
    light: "#fefefe",
    textLight: '#ffffff',
    textDark: '#121212',
  },
  font:{
    display: "'Fredoka One', Arial, Helvetica, sans-serif",
    regular: "Arial, Helvetica, sans-serif",
  }
}

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    font-family: ${props => props.theme.font.regular};
  }
  body{
    margin:0;
  }
  h1{
    font-size:4rem;
  }
  h2{
    font-size:3.5rem;
  }
  h3{
    font-size:3rem;
  }
  h4{
    font-size:2.5rem;
  }
  h5{
    font-size:2rem;
  }
  h6{
    font-size:1.75rem;
  }
  a{
    color: #F64E3E;
  }
`