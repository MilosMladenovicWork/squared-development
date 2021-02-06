import React from 'react'

import styled from 'styled-components'

const HeaderStyled = styled.header`
  width:100%;
  min-height:120px;
  position:fixed;
  top:0;
  z-index:10;
  padding:20px 100px;
`

const HeaderBackground = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  svg {
    min-height:100%;
    min-width:100%;
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920.933 149.24"
          preserveAspectRatio="none"
        >
          <PathStyled
            fill="#121212"
            d="M3948 77.5c-1929.467 29.767-1826.653 120.66-1912.533 20.567-9.6-23.2-6.627-23.187-7.747-52.467.533-23.467-.653-51-.653-51l1887.27 1.158H3948z"
            data-name="Path 19"
            transform="translate(-2027.067 5.4)"
          ></PathStyled>
        </svg>
      </HeaderBackground>
      {children}
    </HeaderStyled>
  )
}

export default Header