import React from 'react'

import styled from 'styled-components'

const RowSpaceBetweenStyled = styled.div`
  display:flex;
  justify-content:space-between;
`

const RowSpaceBetween = ({children, ...rest}) => {
  return <RowSpaceBetweenStyled {...rest}>
    {children}
  </RowSpaceBetweenStyled>
}

export default RowSpaceBetween