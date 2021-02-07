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
    if(props.alignment === 'right'){
      return '100%'
    }
    else if(props.alignment === 'center'){
      return '50%'
    }else if(props.alignment === 'left'){
      return '0%'
    }else{
      return 'unset'
    }
  }};
  @media (max-width: 768px){
    width:110px;
    height:110px;
  }
`

const SquaredSquare = ({alignment, ...rest}) => {
  return(
    <SquaredContainer 
      alignment={alignment} 
      {...rest}
      data-testid="squared-square"
    />
  )
}

export default SquaredSquare