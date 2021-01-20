import React from 'react'

import styled, {css} from 'styled-components'

const StyledParagraph = styled.p`
  font-size:1rem;
  ${props => props.display && css`
    font-family:${props => props.theme.font.display};
  `};
  text-align:${props => props.alignment ? props.alignment : 'left'};
  color:${props => props.textColor ? (props.theme.colors[props.textColor] ? props.theme.colors[props.textColor] : props.theme.colors.textDark) : props.theme.colors.textDark};
`

const Paragraph = ({children, alignment, textColor, display, ...rest}) => {
  return(
    <StyledParagraph alignment={alignment} textColor={textColor} display={display} {...rest}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph