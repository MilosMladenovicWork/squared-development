import React from 'react'

import styled from 'styled-components'
import SquaredSquare from './Details/SquaredSquare'

const StyledHeading = styled.h1`
  font-family: ${props => props.theme.font.display};
  color:${props => props.light ? props.theme.colors.textLight : props.theme.colors.textDark};
  position:relative;
  text-align:${props => props.alignment ? props.alignment : 'left'};
  text-transform:uppercase;
`

const Heading = ({children, accent, alignment, ...rest}) => {
  return (
    <StyledHeading {...rest} alignment={alignment}>
      {accent &&
        <SquaredSquare alignment={alignment}/>
      }
      {children}
    </StyledHeading>
  )
}

export default Heading