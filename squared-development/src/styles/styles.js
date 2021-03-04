import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    accent: "#F64E3E",
    primary: "#121212",
    light: "#fefefe",
    textLight: "#ffffff",
    textDark: "#121212",
    error: "#61010C",
    success: "#1D6100",
  },
  font: {
    display: "'Fredoka One', Arial, Helvetica, sans-serif",
    regular: "Arial, Helvetica, sans-serif",
  },
}

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    font-family: ${props => props.theme.font.regular};
  }
  html{
    scroll-behavior:smooth;
  }
  body{
    margin:0;
  }
  h1{
    font-size:4rem;
    @media (max-width:767px){
      font-size:2.5rem;
      margin-top:4rem;
      margin-bottom:4rem;
    }
  }
  h2{
    font-size:3.5rem;
    @media (max-width:767px){
      font-size:2.25rem;
      margin-top:3.5rem;
      margin-bottom:3.5rem;
    }
  }
  h3{
    font-size:3rem;
    margin-top:2rem;
    margin-bottom:2rem;
    @media (max-width:767px){
      font-size:2rem;
      margin-top:2rem;
      margin-bottom:2rem;
    }
  }
  h4{
    font-size:2.5rem;
    @media (max-width:767px){
      font-size:1.75rem;
      margin-top:2.5rem;
      margin-bottom:2.5rem;
    }
  }
  h5{
    font-size:2rem;
    @media (max-width:767px){
      font-size:1.5rem;
      margin-top:2rem;
      margin-bottom:2rem;
    }
  }
  h6{
    font-size:1.75rem;
    @media (max-width:767px){
      font-size:1.25rem;
      margin-top:1.5rem;
      margin-bottom:1.5rem;
    }
  }
  a{
    color: #F64E3E;
    transition:0.3s;
  }
  p a:hover{
    opacity:0.6;
  }
`
