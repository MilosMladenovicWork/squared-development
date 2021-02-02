import React, {useState} from 'react'

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
  && > svg:last-of-type{
    transform:translateY(-2px);
  }
  && > svg:first-of-type{
    transform:translateY(2px);
  }
`

const IllustrationBody = styled.div`
  background-color:${props => props.fillColor ? (props.theme.colors[props.fillColor] ? props.theme.colors[props.fillColor] : props.theme.colors.primary) : props.theme.colors.primary};
  width:100%;
  flex-grow:1;
`


const CurvedBackground = ({fillColor, hideBottom, hideTop, topVariant}, ...rest) => {
  
  const [topVariants, setTopVariants] = useState([
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
        </svg>,

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="100%" 
          viewBox="0 0 1920 161.997"
        >
          <StyledPath
            id="three-waves" 
            d="M0-9.683s121.31-120.435,344.727,0c57.195,30.831,162.448,126.171,230.191,83.147C707.017-3.979,863.039-102.165,1082.99-41.267,1299.981,21.171,1340.413,133.7,1455.576,73.464,1696.064-107.237,1920-9.683,1920-9.683V98.788H0Z" 
            transform="translate(0 63.209)" 
            {...rest}
            fillColor={fillColor}
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
              M0-9.683s121.31-120.435,344.727,0c57.195,30.831,162.448,126.171,230.191,83.147C707.017-3.979,863.039-102.165,1082.99-41.267,1299.981,21.171,1340.413,133.7,1455.576,73.464,1696.064-107.237,1920-9.683,1920-9.683V98.788H0Z;
              M0,73.464S-3.939,84.242,0,28.485C82.424,52.107,214.378,100.6,282.121,57.576c132.1-77.443,344.242-189.091,620.606,0,143.03,36.364,210.909-118.788,453.333-101.818C1608.182-41.818,1920,73.464,1920,73.464V98.788H0Z;
              M0,73.464s-3.939-35.283,0-91.04c88.182,60.606,316.2,43.024,383.939,0,132.1-77.443,438.788,38.788,819.394,75.152,164.848-33.94,162.424-87.273,407.272-96.97C1862.727-36.97,1920,73.464,1920,73.464V98.788H0Z;
                M0-9.683s121.31-120.435,344.727,0c57.195,30.831,162.448,126.171,230.191,83.147C707.017-3.979,863.039-102.165,1082.99-41.267,1299.981,21.171,1340.413,133.7,1455.576,73.464,1696.064-107.237,1920-9.683,1920-9.683V98.788H0Z;  
              "
              from=""
              to=""
            ></animate>
          </StyledPath>
        </svg>
  ])
  
  return (
    <IllustrationContainer
      data-testid="illustration-container"
    >
      {
        !hideTop &&
        (
          topVariant ?
          topVariants[topVariant]
          :
          topVariants[0]
        )
      }
      <IllustrationBody 
        fillColor={fillColor}
        data-testid="illustration-body"
      />
      {
        !hideBottom &&
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
      }
    </IllustrationContainer>
  )
}

export default CurvedBackground