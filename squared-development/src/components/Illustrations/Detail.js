import React from 'react'

import styled, {css, keyframes} from 'styled-components'

const rotate = keyframes`
  from{
    transform:rotateZ(0deg);
  }
  to{
    transform:rotateZ(360deg);
  }
`

const DetailContainer = styled.div`
  width:${props => props.size * 2 + 'vw'};
  position:absolute;
  ${props => css`
    ${props.verticalPosition}: 0%;
    ${props.horizontalPosition}: 0%;
  `};
  animation:${rotate} ${props => props.size / 0.5}s linear infinite;
  animation-direction: ${props => props.backwards ? 'reverse' : 'normal'};
`

const StyledRect = styled.rect`
  fill:${props => props.theme.colors.accent};
  transition:0.2s;
  &:hover{
    opacity:0.5;
  }
`

const Detail = ({size, verticalPosition, horizontalPosition, backwards, ...rest}) => {
  return(
    <DetailContainer size={size} backwards={backwards} {...rest} verticalPosition={verticalPosition} horizontalPosition={horizontalPosition}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 424.537 424.537">
        <g id="Group_31" data-name="Group 31" transform="translate(-1445.897 -4265.975) rotate(45)" opacity="0.19">
          <StyledRect id="Rectangle_69" data-name="Rectangle 69" width="121.953" height="121.953" transform="translate(4189 1965.953) rotate(-90)"/>
          <StyledRect id="Rectangle_70" data-name="Rectangle 70" width="121.953" height="121.953" transform="translate(4367.239 1965.953) rotate(-90)"/>
          <StyledRect id="Rectangle_71" data-name="Rectangle 71" width="121.953" height="121.953" transform="translate(4189 2144.193) rotate(-90)"/>
          <StyledRect id="Rectangle_72" data-name="Rectangle 72" width="121.953" height="121.953" transform="translate(4367.239 2144.193) rotate(-90)"/>
        </g>
      </svg>
    </DetailContainer>
  )
}

export default Detail