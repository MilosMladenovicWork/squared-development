import React from 'react'

import styled from 'styled-components'

const SquaredContainer = styled.div`
  position:absolute;
  transform:translate(-50%, -50%);
  top:50%;
  width:157px;
  height:157px;
  border:15px solid ${props => props.theme.colors.accent};
  background:transparent;
  z-index:-1;
  left:${props => {
    if(props.alignment === 'center'){
      return '50%'
    }else if(props.alignment === 'right'){
      return '100%'
    }else{
      return '0%'
    }
  }};
`

const SquaredSquare = ({alignment, ...rest}) => {
  return(
    <SquaredContainer alignment={alignment} {...rest}/>
  )
}

export default SquaredSquare