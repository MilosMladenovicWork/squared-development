import React from 'react'

import styled from 'styled-components'

const StyledText = styled.text`
  fill: ${props => props.theme.colors.textLight};
`

const StyledPath = styled.path`
  fill: ${props => props.theme.colors.accent};
`

const Logo = ({children, ...rest}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="87"
      viewBox="0 0 102 87"
    >
      <g data-name="Group 1" transform="translate(-15 -20)">
        <g fill="none" data-name="Path 129">
          <path d="M0 0h61v61H0z" transform="translate(15 20)"></path>
          <StyledPath
            d="M7 7v47h47V7H7M0 0h61v61H0V0z"
            transform="translate(15 20)"
          ></StyledPath>
        </g>
        <StyledText
          fontFamily="SegoeUI, Segoe UI"
          fontSize="31"
          transform="translate(79 78)"
        >
          <tspan x="0" y="0">
            ed
          </tspan>
        </StyledText>
        <StyledText
          fontFamily="SegoeUI, Segoe UI"
          fontSize="13"
          transform="translate(15 103)"
        >
          <tspan x="0" y="0">
            DEVELOPMENT
          </tspan>
        </StyledText>
      </g>
    </svg>
  )
}

export default Logo