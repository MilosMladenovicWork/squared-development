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
    <IllustrationContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 1914.2 105.822"
        >
        <StyledPath
          {...rest}
          fillColor={fillColor}
          d="M4321 2158h1914.2v-104.4s-832 128-940.8 38.4-973.4 0-973.4 0z"
          data-name="Path 382"
          transform="translate(-4321 -2052.178)"
        ></StyledPath>
      </svg>
      <IllustrationBody fillColor={fillColor}/>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 1914.2 82"
      >
        <StyledPath
          {...rest}
          fillColor={fillColor}
          d="M4321 2158v-82h1914.2v82s-651.556-56.4-985.6-56.4S4321 2158 4321 2158z"
          data-name="Path 383"
          transform="translate(-4321 -2076)"
        ></StyledPath>
      </svg>
    </IllustrationContainer>
  )
}

export default CurvedBackground