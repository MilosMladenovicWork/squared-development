import React from 'react'

import styled from 'styled-components'

const HeaderStyled = styled.header`
  width:100%;
  position:fixed;
  top:0;
  z-index:10;
  padding:20px 100px 0px 100px;
  @media (max-width: 768px){
    padding:15px 20px;
  }
`

const BackgroundBody = styled.div`
  background-color:${props => props.theme.colors.primary};
  height:100%;
  max-height:85px;
`

const HeaderBackground = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  svg {
    transform:translateY(-2px);
    min-width:100%;
    @media (max-width:768px){
      min-width:unset;
      transform:translateY(-5px);
    }
  }
`

const PathStyled = styled.path`
  fill:${props => props.theme.colors.primary};
  min-height:100%;
  min-width:100%;
`

const Header = ({children, ...rest}) => {
  return (
    <HeaderStyled {...rest}>
      <HeaderBackground>
        <BackgroundBody/>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1928.271 55.831"
        >
          <PathStyled
            d="M1990-307.273h1926.969S2244.242-253.94 2106.06-251.515 1990-307.273 1990-307.273z"
            transform="translate(-1988.699 307.273)"
          ></PathStyled>
        </svg>
      </HeaderBackground>
      {children}
    </HeaderStyled>
  )
}

export default Header