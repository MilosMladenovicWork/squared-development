import React from "react"

import styled, { css } from "styled-components"

const StyledText = styled.text`
  fill: ${props => props.theme.colors.textLight};
`

const StyledPath = styled.path`
  fill: ${props => props.theme.colors.accent};
`

const StyledSvg = styled.svg`
  width: 100px;
  transition:0.3s;
  ${props => props.randomRotation && css`
    transform:rotate(${Math.floor((Math.random() * 91)) - 45}deg);
  `
  }
  @media (max-width: 767px) {
    width: 65px;
  }
`

const Logo = ({ children, fillColor, randomRotation, ...rest }) => {
  return (
    <StyledSvg
      randomRotation={randomRotation}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 198.4 164"
      version="1.1"
      viewBox="0 0 198.4 144"
      xmlSpace="preserve"
      {...rest}
    >
      <path
        fill={fillColor ? fillColor : '#fff'}
        d="M94.7 138.9l-2-135.3 42.3 14 4.4 8.9v75.8L135 111l-40.3 27.9zm33.4-105.6l-21-4.4.7 86.4 21-13.6-.7-68.4zM90.6 3.8v51.1l-6.2 13.3 6.2 13v57.4l-45.3-28.3-.2-89.7L90.6 3.8zM56.4 34.7v25.9l21.1-.9V28.9l-21.1 5.8zm0 41.9l.7 27.6 21.1 11.4-.7-39.2-21.1.2z"
      ></path>
      {/* <g fill="#fff" className="st0">
        <path d="M15 142.6v6.1l-1.4 2 1.4 2v6H3.9v-16.1H15zm-8 2.8v4h5.1v-4H7zm0 6.6v4h5.1v-4H7zM20.7 145.4v4h8v2.6h-8v4h8v2.8H17.6v-16.1h11.1v2.8h-8zM34.5 156h8v2.8H31.4v-16.1h3.1V156zM50.1 149.4h6.1v9.4h-11v-16.1h11.1v2.8h-8V156h5.1v-4h-3.2v-2.6zM58.9 158.7v-16.1H70v9.4h-3.8l3.8 6.8h-2.9l-4-6.8H62v6.8h-3.1zm3.1-13.3v4h5.1v-4H62zM80.8 152h-5.1v6.8h-3.1v-16.1h11.1v16.1h-2.9V152zm-5-6.6v4h5.1v-4h-5.1zM86.4 158.7v-16.1h9.9l1.2 1.4v13.3l-1.2 1.4h-9.9zm8.2-13.3h-5.1V156h5.1v-10.6zM103.3 145.4v4h8v2.6h-8v4h8v2.8h-11.1v-16.1h11.1v2.8h-8zM120.1 158.7v-16.1h9.9l1.2 1.4v13.3l-1.2 1.4h-9.9zm8.1-13.3h-5.1V156h5.1v-10.6zM136.9 158.7h-3.1v-16.1h3.1v16.1zM144.6 149.4h6.1v9.4h-11.1v-16.1h11.1v2.8h-8V156h5.1v-4h-3.2v-2.6zM156.5 158.7h-3.1v-16.1h3.1v16.1zM163.4 145.4h-4.2v-2.8h11.1v2.8h-3.8v13.4h-3.1v-13.4zM181.1 152H176v6.8h-3.1v-16.1H184v16.1h-2.9V152zm-5.1-6.6v4h5.1v-4H176zM189.8 156h8v2.8h-11.1v-16.1h3.1V156z"></path>
      </g> */}
    </StyledSvg>
    // <StyledSvg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 102 87"
    // >
    //   <g data-name="Group 1" transform="translate(-15 -20)">
    //     <g fill="none" data-name="Path 129">
    //       <path d="M0 0h61v61H0z" transform="translate(15 20)"></path>
    //       <StyledPath
    //         d="M7 7v47h47V7H7M0 0h61v61H0V0z"
    //         transform="translate(15 20)"
    //       ></StyledPath>
    //     </g>
    //     <StyledText
    //       fontFamily="SegoeUI, Segoe UI"
    //       fontSize="31"
    //       transform="translate(79 78)"
    //     >
    //       <tspan x="0" y="0">
    //         ed
    //       </tspan>
    //     </StyledText>
    //     <StyledText
    //       fontFamily="SegoeUI, Segoe UI"
    //       fontSize="13"
    //       transform="translate(15 103)"
    //     >
    //       <tspan x="0" y="0">
    //         DEVELOPMENT
    //       </tspan>
    //     </StyledText>
    //   </g>
    // </StyledSvg>
  )
}

export default Logo

export const MemoizedLogo = React.memo(Logo)
