import React from 'react'

import styled from 'styled-components'

const ConstraintContainerStyled = styled.div`
  padding:0 7.5%;
  @media (max-width:1200px){
    padding:0 40px;
  }
  @media (max-width: 767px){
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