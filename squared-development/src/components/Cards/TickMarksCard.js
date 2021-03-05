import React, { useState } from "react"

import styled from "styled-components"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import WavyBottomBackground from "../Illustrations/WavyBottomBackground"
import VerticalMarginSeparator from "../LayoutComponents/VerticalMarginSeparator"

const StyledCard = styled.div`
  width: 320px;
  box-shadow: 5px 9px 25px 0px rgb(225,225,225);
  overflow: hidden;
  transition:0.3s;
  &:hover{
    transform:scale(0.95);
  }
  h3 {
    font-size: 2rem;
    text-transform: unset;
    margin-bottom: 15px;
  }
  h4 {
    margin-top: 0;
    font-size: 1.5rem;
    text-transform: unset;
  }
`

const StyledPath = styled.path`
  stroke: ${props =>
    props.strokeColor
      ? props.theme.colors[props.strokeColor]
        ? props.theme.colors[props.strokeColor]
        : props.theme.colors.primary
      : props.theme.colors.primary};
  stroke-width: 8px;
`

const TextContent = styled.div`
  min-height: 200px;
  padding: 15px 15px 15px;
`

const PresentationalContent = styled.div`
  position: relative;
  min-height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
  > svg {
    margin: auto;
    width: 50%;
  }
`
const IconContainer = styled.div`
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
  transform: ${props => (props.cardHovered ? "scale(10)" : "scale(1)")};
`

const TickmarkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`

const TickmarkItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

const Mark = styled.div`
  width: 30px;
  margin-right: 10px;
  > svg {
    width: 100%;
  }
`

const IconTextCard = ({ heading, subheading, text, listItems, icon }) => {
  const [cardHovered, setCardHovered] = useState(false)
  return (
    <StyledCard
      data-testid="card"
      onMouseOver={() => setCardHovered(true)}
      onMouseOut={() => setCardHovered(false)}
    >
      <IconContainer>{icon && icon(cardHovered)}</IconContainer>
      <PresentationalContent>
        <Heading as="h3" alignment="center" textColor={"textLight"}>
          {heading}
        </Heading>
        <Heading as="h4" alignment="center" textColor={"textLight"}>
          {subheading}
        </Heading>
        <IllustrationContainer cardHovered={cardHovered}>
          <WavyBottomBackground bothSides />
        </IllustrationContainer>
      </PresentationalContent>
      <TextContent>
        <Paragraph
          alignment="center"
          textColor={cardHovered ? "textLight" : "textDark"}
        >
          {text}
        </Paragraph>
        <VerticalMarginSeparator marginSize={0.5} />
        {listItems && listItems.length > 0 && (
          <TickmarkList>
            {listItems.map(item => (
              <TickmarkItem>
                <Mark>
                  {item.available ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.676"
                      height="29.144"
                      viewBox="0 0 35.676 29.144"
                    >
                      <StyledPath
                        id="checkmark-outline"
                        d="M120.375,128l-17.062,19.5L96,140.187"
                        transform="translate(-90.343 -122.356)"
                        fill="none"
                        strokeColor={"success"}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="8"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.614"
                      height="36.614"
                      viewBox="0 0 36.614 36.614"
                    >
                      <StyledPath
                        id="close-outline"
                        d="M169.3,169.3,144,144m25.3,0L144,169.3"
                        transform="translate(-138.343 -138.343)"
                        fill="none"
                        strokeColor={"error"}
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="8"
                      />
                    </svg>
                  )}
                </Mark>
                <Paragraph textColor={cardHovered ? "textLight" : "textDark"}>
                  {item.text}
                </Paragraph>
              </TickmarkItem>
            ))}
          </TickmarkList>
        )}
      </TextContent>
    </StyledCard>
  )
}

export default IconTextCard
