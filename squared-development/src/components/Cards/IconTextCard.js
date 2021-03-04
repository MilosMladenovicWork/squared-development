import React, { useState } from "react"

import styled from "styled-components"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import WavyBottomBackground from "../Illustrations/WavyBottomBackground"

const StyledCard = styled.div`
  width: 320px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  h3 {
    font-size: 2rem;
    text-transform: unset;
  }
`

const TextContent = styled.div`
  min-height: 200px;
  padding: 0 15px 15px;
`

const PresentationalContent = styled.div`
  position: relative;
  min-height: 200px;
  display: flex;
  justify-content: center;
  > svg {
    margin: auto;
    width: 50%;
  }
`

const IllustrationContainer = styled.div`
  position: absolute;
  top: 0%;
  z-index: -1;
  height: 100%;
  width: 100%;
  transition: 0.25s;
  transform: ${props => (props.cardHovered ? "scale(7)" : "scale(1)")};
`
const StyledPath = styled.path`
  fill: ${props =>
    props.fillColor
      ? props.theme.colors[props.fillColor]
        ? props.theme.colors[props.fillColor]
        : props.theme.colors.primary
      : props.theme.colors.primary};
`
const StyledSvg = styled.svg`
  transition: 0.25s;
  transform: ${props =>
    props.cardHovered ? "translateY(20px)" : "translateY(-20px)"};
`

const IconTextCard = ({ heading, text, icon }) => {
  const [cardHovered, setCardHovered] = useState(false)
  return (
    <StyledCard
      data-testid="card"
      onMouseOver={() => setCardHovered(true)}
      onMouseOut={() => setCardHovered(false)}
    >
      <PresentationalContent>
        {icon ? (
          icon(cardHovered)
        ) : (
          <StyledSvg
            cardHovered={cardHovered}
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <StyledPath
              fillColor={cardHovered ? "accent" : "textLight"}
              d="M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z"
            />
          </StyledSvg>
        )}
        <IllustrationContainer cardHovered={cardHovered}>
          <WavyBottomBackground />
        </IllustrationContainer>
      </PresentationalContent>
      <TextContent>
        <Heading
          as="h3"
          alignment="center"
          textColor={cardHovered ? "textLight" : "textDark"}
        >
          {heading}
        </Heading>
        <Paragraph
          alignment="center"
          textColor={cardHovered ? "textLight" : "textDark"}
        >
          {text}
        </Paragraph>
      </TextContent>
    </StyledCard>
  )
}

export default IconTextCard
