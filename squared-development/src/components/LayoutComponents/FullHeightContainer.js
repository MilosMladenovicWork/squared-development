import React from 'react'

import styled from 'styled-components'

const StyledFullHeightContainer = styled.div`
  min-height:100vh;
`

const FullHeightContainer = ({children,...rest}) => {
  return(
    <StyledFullHeightContainer {...rest}>
      {children}
    </StyledFullHeightContainer>
  )
}

export default FullHeightContainer