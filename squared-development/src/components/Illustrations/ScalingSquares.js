import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import styled, {css, keyframes} from 'styled-components'

const rotate = keyframes`
  0%{
    transform:rotateZ(0deg) translate(0%, 0%) scale(0);
    opacity:0;
  }
  50%{
    transform:rotateZ(180deg) translate(0%, 0%) scale(1);
    opacity:0.2;
  }
  100%{
    transform:rotateZ(360deg) translate(0%, 0%) scale(0);
    opacity:0;
  }
`

const DetailContainer = styled.div`
  width:${props => (props.size ? props.size : 1) * 2 + 'vw'};
  height:${props => (props.size ? props.size : 1) * 2 + 'vw'};
  position:absolute;
  ${props => css`
    ${props.verticalPosition === 'top' ? props.verticalPosition : (props.verticalPosition === 'bottom' ? props.verticalPosition : 'top')}: 0%;
    ${props.horizontalPosition === 'left' ? props.horizontalPosition : (props.horizontalPosition === 'right' ? props.horizontalPosition : 'left')}: 0%;
  `};
  @media (max-width:768px){
    width:${props => (props.size ? props.size : 1) * 4 + 'vw'};
  }
`
const RelativeContainer = styled.div`
  position:relative;
  width:100%;
  height:100%;
`

const Square = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  opacity:0;
  background:${props => props.theme.colors.accent};
  ${props => props.isVisible && css`
    animation:${rotate} ease-in-out 10s ${props => props.order * 2}s infinite;
  `
  }
  animation-direction: ${props => props.backwards ? 'reverse' : 'normal'};
`

const ScalingSquares = ({size, verticalPosition, horizontalPosition, backwards, ...rest}) => {
  return(
    <VisibilitySensor partialVisibility>
    {({isVisible}) => {
      return <DetailContainer 
        isVisible={isVisible}
        size={size} 
        {...rest} 
        verticalPosition={verticalPosition} 
        horizontalPosition={horizontalPosition}
        data-testid="detail"
      >
        <RelativeContainer>
          <Square isVisible={isVisible} order={3} backwards={backwards} />
          <Square isVisible={isVisible} order={2}/>
          <Square isVisible={isVisible} order={1}/>
          <Square isVisible={isVisible} order={0} backwards={backwards}/>
        </RelativeContainer>
      </DetailContainer>
    }}
  </VisibilitySensor>
  )
}

export default ScalingSquares