import React from 'react'

import styled from 'styled-components'

const StyledHorizontalMarginSeparator = styled.div`
  margin:0 ${props => props.marginSize ? `${props.marginSize}rem` : '0.5rem'};
  display:inline-block;
  @media (max-width:767px){
    margin:unset;
  }
`

const HorizontalMarginSeparator = ({children, marginSize, ...rest}) => {
  return (
    <StyledHorizontalMarginSeparator marginSize={marginSize} {...rest}>
      {children}
    </StyledHorizontalMarginSeparator>
  )
}

export default HorizontalMarginSeparator