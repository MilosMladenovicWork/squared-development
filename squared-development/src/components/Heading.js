import React from 'react'

import styled from 'styled-components'
import SquaredSquare from './Details/SquaredSquare'

const StyledHeading = styled.h1`
  font-family: ${props => props.theme.font.display};
  color:${props => props.light ? props.theme.colors.textLight : props.theme.colors.textDark};
  position:relative;
  text-align:${props => props.alignment ? props.alignment : 'left'};
  text-transform:uppercase;
  color:${props => props.textColor ? (props.theme.colors[props.textColor] ? props.theme.colors[props.textColor] : props.theme.colors.textDark) : props.theme.colors.textDark};
`

const Heading = ({children, accent, alignment, textColor, ...rest}) => {
  return (
    <StyledHeading {...rest} alignment={alignment} textColor={textColor}>
      {accent &&
        <SquaredSquare alignment={alignment}/>
      }
      {children}
    </StyledHeading>
  )
}

export default Heading