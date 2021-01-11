import React from 'react'

import styled from 'styled-components'

const ConstraintContainerStyled = styled.div`
  padding:0 10%;
`

const ConstraintContainer = ({children, ...rest}) => {
  return(
    <ConstraintContainerStyled {...rest}>
      {children}
    </ConstraintContainerStyled>
  )
}

export default ConstraintContainer