import React from "react"

import styled, { css } from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

import Heading from "../Heading"
import Paragraph from "../Paragraph"
import Button from "../Buttons/Button"
import VerticalMarginSeparator from "../LayoutComponents/VerticalMarginSeparator"

const StyledImg = styled(Image)`
  max-width: 100%;
  max-height: 60vh;
  transition: 0.6s;
  transform: rotate3d(0, 1, 0, -45deg);
  transform-style: preserve-3d;
  box-shadow: 5px 9px 25px 0px rgb(225,225,225);
  margin: 50px 0px;
  ${props =>
    props.reverse &&
    css`
      transform: rotate3d(0, 1, 0, 45deg);
    `}
  @media (max-width:767px) {
    transform: none;
  }
`

const StyledCardTextContent = styled.div`
  width:50%;
  max-width: 50%;
  transition: max-width 0.6s;
  overflow: hidden;
  max-height: 50vh;
  > div {
    width:70%;
    ${props => props.reverse && css`
      margin-left:auto;
    `}
    @media (max-width:1200px){
      width:100%;
    }
  }
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    width:100%;
    max-height: unset;
  }
`

const StyledImageContainer = styled.div`
  width: 100%;
  max-width: 50%;
  perspective: 2000px;
  max-height: 60vh;
  transition: 0.8s;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
  }
  &:hover {
    @media (min-width: 767px) {
      ~ div {
        max-width: 0%;
      }
      max-width: 100%;
      width: 100%;
      max-height: 100vh;
      ${StyledImg} {
        transform: rotate3d(0, 1, 0, 0deg);
        max-width: 100%;
        max-height: 100vh;
      }
    }
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`

const StyledTransformedImageCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  text-align: left;
  margin: 50px 0px;
  * {
    @media (max-width: 767px) {
      text-align: center;
    }
  }
  ${props =>
    props.reverse &&
    css`
      flex-direction: row;
      * {
        text-align: left;
        @media (max-width: 767px) {
          text-align: center;
        }
      }
    `}
  @media (max-width:1200px) {
    margin: 100px 0;
  }
  @media (max-width: 767px) {
    margin: 50px 0px;
    flex-direction: column;
  }
`

const TransformedImageCard = ({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  reverse,
}) => {
  return (
    <StyledTransformedImageCard reverse={reverse}>
      <StyledImageContainer>
        {image && image.childImageSharp && image.childImageSharp.fluid && (
          <StyledImg
            reverse={reverse}
            fluid={image.childImageSharp.fluid}
            alt=""
          />
        )}
      </StyledImageContainer>
      <StyledCardTextContent reverse={reverse}>
        <div>
          <Heading as={"h3"} display>
            {title}
          </Heading>
          <Paragraph>{description}</Paragraph>
          <Button as={Link} to={buttonLink}>
            {buttonText}
          </Button>
        </div>
      </StyledCardTextContent>
    </StyledTransformedImageCard>
  )
}

export default TransformedImageCard
