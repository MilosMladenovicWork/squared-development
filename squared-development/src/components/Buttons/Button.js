import React from 'react'

import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  background-color:${props => props.theme.colors.accent};
  padding:0.5em 2em;
  color:${props => props.theme.colors.textLight};
  border:3px solid ${props => props.theme.colors.accent};
  text-transform:uppercase;
  text-decoration:none;
  font-size:1rem;
  display:inline-block;
  ${props => props.secondary && css`
    background:transparent;
    border-color:${props => props.theme.colors.primary};
    color:${props => props.theme.colors.textDark};
  `}
  ${props => props.clipped && css`
    clip-path: polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%);
  `
  }
  ${props => props.link && css`
    background:transparent;
    border-color:transparent;
  `}
`

const Button = ({children, ...rest}) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button