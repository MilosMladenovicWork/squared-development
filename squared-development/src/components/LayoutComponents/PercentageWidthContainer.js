import React from 'react'

import styled from 'styled-components'

const StyledPercentageWidthContainer = styled.div`
  width:${props => props.widthPercentage ? `${props.widthPercentage}%` : '100%'};
`

const PercentageWidthContainer = ({children, widthPercentage, ...rest}) => {
  return(
    <StyledPercentageWidthContainer widthPercentage={widthPercentage} {...rest}>
      {children}
    </StyledPercentageWidthContainer>
  )
}

export default PercentageWidthContainer