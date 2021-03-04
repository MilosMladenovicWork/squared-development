import React from 'react'

import styled from 'styled-components'

const StyledVerticalMarginSeparator = styled.div`
  margin:${props => props.marginSize ? `${props.marginSize}rem` : '0.5rem'} 0;
  display:inline-block;
  @media (max-width:767px){
    margin:${props => props.marginSize ? `${props.marginSize / 2}rem` : '0.25rem'} 0;
  }
`

const VerticalMarginSeparator = ({children, marginSize, ...rest}) => {
  return (
    <StyledVerticalMarginSeparator marginSize={marginSize} {...rest}>
      {children}
    </StyledVerticalMarginSeparator>
  )
}

export default VerticalMarginSeparator