import React from 'react'

import styled from 'styled-components'

const ConstraintContainerStyled = styled.div`
  padding:0 10%;
  @media (max-width: 768px){
    padding:0 20px;
  }
`

const ConstraintContainer = ({children, ...rest}) => {
  return(
    <ConstraintContainerStyled {...rest}>
      {children}
    </ConstraintContainerStyled>
  )
}

export default ConstraintContainer