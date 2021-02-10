import React from 'react'

import styled, {css, keyframes} from 'styled-components'

const clippingAnimation = keyframes`
  0%{
    clip-path:polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%); 
  }
  50%{
    clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); 
  }
  100%{
    clip-path:polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%); 
  }
`

const StyledButton = styled.button`
  ${props => props.display && css`
    font-family:${props => props.theme.font.display};
  `};
  background-color:${props => props.theme.colors && props.theme.colors.accent};
  padding:0.5em 2em;
  color:${props => props.theme.colors && props.theme.colors.textLight};
  border:3px solid ${props => props.theme.colors && props.theme.colors.accent};
  text-transform:uppercase;
  text-decoration:none;
  font-size:1rem;
  display:inline-block;
  ${props => props.secondary && css`
    background:transparent;
    border-color:${props => props.theme.colors && props.theme.colors.primary};
    color:${props => props.theme.colors && props.theme.colors.textDark};
  `}
  ${props => props.clipped && css`
    clip-path: polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%);
    animation: ${clippingAnimation} 8s forwards;
    animation-iteration-count:infinite;
  `
  }
  ${props => props.link && css`
    background:transparent;
    border-color:transparent;
  `}
`

const Button = ({children, ...rest}) => {
  return (
    <StyledButton data-testid="button" {...rest}>{children}</StyledButton>
  )
}

export default Button