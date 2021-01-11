import React from 'react'

import styled, {css} from 'styled-components'

const StyledParagraph = styled.p`
  font-size:1rem;
  ${props => props.display && css`
    font-family:${props => props.theme.font.display};
  `}
`

const Paragraph = ({children, ...rest}) => {
  return(
    <StyledParagraph {...rest}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph