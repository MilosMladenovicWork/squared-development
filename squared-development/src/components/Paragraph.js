import React from 'react'

import styled, {css} from 'styled-components'

const StyledParagraph = styled.p`
  font-size:1rem;
  ${props => props.display && css`
    font-family:${props => props.theme.font.display};
  `};
  margin:${props => {
    if(props.alignment === 'center'){
      return 'auto'
    }else{
      return 'unset'
    }
  }};
  text-align:${props => props.alignment ? props.alignment : 'left'};
  color:${props => props.textColor ? (props.theme.colors[props.textColor] ? props.theme.colors[props.textColor] : props.theme.colors.textDark) : props.theme.colors.textDark};
  width:${props => props.halfWidth ? '50%' : '100%'};
`

const Paragraph = ({children, alignment, textColor, halfWidth, display, ...rest}) => {
  return(
    <StyledParagraph halfWidth={halfWidth} alignment={alignment} textColor={textColor} display={display} {...rest}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph