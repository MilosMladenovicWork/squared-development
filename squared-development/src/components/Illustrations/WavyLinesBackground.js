import React, {useState, useEffect} from 'react'

import styled, {keyframes} from 'styled-components'

const StyledPath = styled.path`
  stroke:${props => props.fillColor ? (props.theme.colors[props.fillColor] ? props.theme.colors[props.fillColor] : props.theme.colors.primary) : props.theme.colors.primary};
  stroke-width:10px;
  opacity:${props => props.opacity};
`

const translateFullyHorizontally = keyframes`
  0%{
    transform: translateX(-30%);
  }
  50%{
    transform: translateX(-45%);
  }
  100%{
    transform: translateX(-30%);
  }
`

const StyledSvg = styled.svg`
  opacity:${Math.random() * 100};
  animation-iteration-count:infinite;
`

const TranslateContainer = styled.div`
  animation: ${translateFullyHorizontally} ${props => props.duration}s forwards;
  animation-iteration-count:infinite;
  position:relative;
  left:${props => props.startPosition}%;
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
  justify-content: flex-start;
`

const WavyLinesBackground = ({fillColor, ...props}) => {
  
  const [lines, setLines] = useState([])
  const [numOfLines, setNumOfLines] = useState(15)
  
  const createLine = (startPosition, duration) => {
    return <TranslateContainer startPosition={startPosition} duration={duration}>
        <StyledSvg xmlns="http://www.w3.org/2000/svg" width="3249.589" height="213.976" viewBox="0 0 3249.589 213.976">
        <StyledPath fillColor={fillColor} id="WavyLine" d="M181.636,5167.748s288.332-224.217,597.24,0,691.327,0,691.327,0,198.254-158.629,576.787,0,711.78,0,711.78,0,282.258-234.565,666.782,0" transform="translate(-178.567 -5058.459)" fill="none" stroke-width="10" opacity="0.1"/>
      </StyledSvg>
      </TranslateContainer>
  }


  useEffect(() => {
    if(numOfLines){
      setLines([])
      for(let i = 0; i < numOfLines; i++){
        setLines(prevState => [...prevState, createLine(Math.random() * 20 + 1, Math.random() * 10 + 4)])
      }
    }else{
      setLines([createLine(Math.random() * 20 + 1, Math.random() * 10 + 4)])
    }
  }, [numOfLines])

  return(
    <IllustrationContainer {...props}>
      {lines}
    </IllustrationContainer>
  )
}

export default WavyLinesBackground