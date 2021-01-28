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
      <IllustrationBody fillColor={fillColor}/>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        height="100%" 
        viewBox="0 0 403.138 36.564"
      >
        <StyledPath 
          {...rest}
          fillColor={fillColor}
          d="M2196,2708.383c-2.547,3.961,145.728,64.582,201.673,17.962s199.212,12.556,200.061,14.9,0-32.861,0-32.861Z" 
          transform="translate(-2195.473 -2707.821)"
        >
          <animate
            fill="freeze"
            attributeName="d"
            attributeType="XML"
            dur={`${(Math.random() * 10) + 2}s`}
            repeatCount="indefinite"
            values="
            M2196,2708.383c-2.547,3.961,145.728,64.582,201.673,17.962s199.212,12.556,200.061,14.9,0-32.861,0-32.861Z;
            M2196,2708.383c-2.547,60.961,0.728,0.582,201.673,17.962s199.212,0.556,300.061,14.9,0-32.861,0-32.861Z;
            M2196,2708.383c-2.547,3.961,145.728,64.582,201.673,17.962s199.212,12.556,200.061,14.9,0-32.861,0-32.861Z;
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