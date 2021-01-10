import React from 'react'

import styled from 'styled-components'

const ConstraintContainerStyled = styled.div`
  max-width:80%;
  margin:auto;
`

const ConstraintContainer = ({children, ...rest}) => {
  return(
    <ConstraintContainerStyled {...rest}>
      {children}
    </ConstraintContainerStyled>
  )
}

export default ConstraintContainer