import React from 'react'

import styled from 'styled-components'

const StyledPath = styled.path`
  fill:${props => props.fillColor ? (props.theme.colors[props.fillColor] ? props.theme.colors[props.fillColor] : props.theme.colors.primary) : props.theme.colors.primary};
`

const IllustrationContainer =  styled.div`
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
  min-width:100%;
  min-height:100%;
  max-height:100%;
  display:flex;
  flex-direction:column;
  > svg:first-of-type{
    transform:translateY(2px);
  }
  > svg:last-of-type{
    transform:translateY(-2px);
  }
`

const IllustrationBody = styled.div`
  background-color:${props => props.fillColor ? (props.theme.colors[props.fillColor] ? props.theme.colors[props.fillColor] : props.theme.colors.primary) : props.theme.colors.primary};
  width:100%;
  flex-grow:1;
`

const CurvedBackground = ({fillColor}, ...rest) => {
  return (
    <IllustrationContainer
      data-testid="illustration-container"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 1914.2 105.822"
        >
        <StyledPath
          data-testid="styled-path"
          {...rest}
          fillColor={fillColor}
          d="M4321 2158h1914.2v-104.4s-832 128-940.8 38.4-973.4 0-973.4 0z"
          data-name="Path 382"
          transform="translate(-4321 -2052.178)"
        >
          <animate
            fill="freeze"
            attributeName="d"
            attributeType="XML"
            dur={`10s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            values="
              M4321 2158h1914.2v-104.4s-832 128-940.8 38.4-973.4 0-973.4 0z;
              M4321,2158H6235.2V2053.6S4917.6,2232,4780,2116.8s-459-24.8-459-24.8Z;
              M4321,2158H6235.2V2053.6s-196.8,128-305.6,38.4-1608.6,0-1608.6,0Z;
              M4321 2158h1914.2v-104.4s-832 128-940.8 38.4-973.4 0-973.4 0z;  
            "
            from=""
            to=""
          ></animate>
        </StyledPath>
      </svg>
      <IllustrationBody 
        fillColor={fillColor}
        data-testid="illustration-body"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 1914.2 82"
      >
        <StyledPath
          data-testid="styled-path"
          {...rest}
          fillColor={fillColor}
          d="M4321 2158v-82h1914.2v82s-651.556-56.4-985.6-56.4S4321 2158 4321 2158z"
          data-name="Path 383"
          transform="translate(-4321 -2076)"
        >
          <animate
            fill="freeze"
            attributeName="d"
            attributeType="XML"
            dur={`10s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            values="
              M4321 2158v-82h1914.2v82s-651.556-56.4-985.6-56.4S4321 2158 4321 2158z;
              M4321,2158v-82H6235.2v82s-149.6-130.8-985.6-56.4S4321,2158,4321,2158Z;
              M4321,2158v-82H6235.2v82s-144.8,14.8-985.6-56.4S4321,2158,4321,2158Z;
              M4321 2158v-82h1914.2v82s-651.556-56.4-985.6-56.4S4321 2158 4321 2158z;  
            "
            from=""
            to=""
          ></animate>
        </StyledPath>
      </svg>
    </IllustrationContainer>
  )
}

export default CurvedBackground