import React from 'react'

import styled, {keyframes} from 'styled-components'

const dropDown = keyframes`
  0%{
    transform:translateY(-150px);
  }
  100%{
    transform:translateY(0%);
  }
`

const HeaderStyled = styled.header`
  width:100%;
  position:fixed;
  top:0;
  z-index:10;
  padding:20px 100px 0px 100px;
  transform:translateY(-150px);
  animation: ${dropDown} 1s 2s forwards;
  @media (max-width: 768px){
    padding:15px 20px;
  }
`

const BackgroundBody = styled.div`
  background-color:${props => props.theme.colors.primary};
  height:${props => props.menuClicked ? '100vh' : '100%'};
  max-height:${props => props.menuClicked ? '100vh' : '85px'};
  transition:0.3s;
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
      transform:translateY(-7px);
    }
  }
`

const PathStyled = styled.path`
  fill:${props => props.theme.colors.primary};
  min-height:100%;
  min-width:100%;
`

const Header = ({children, menuClicked, ...rest}) => {
  return (
    <HeaderStyled {...rest}>
      <HeaderBackground>
        <BackgroundBody menuClicked={menuClicked}/>
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