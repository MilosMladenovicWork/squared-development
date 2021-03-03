import React from 'react'

import styled, {css} from 'styled-components'
import {Link} from 'gatsby'

import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Buttons/Button'
import VerticalMarginSeparator from '../LayoutComponents/VerticalMarginSeparator'

const StyledImg = styled.img`
  max-width:100%;
  max-height:60vh;
  transition:0.6s;
  transform: rotate3d(0, 1, 0, -45deg);
  transform-style:preserve-3d;
  box-shadow:0px 5px 25px rgba(0, 0, 0, 0.12);
  margin:50px 0px;
  ${props => props.reverse && css`
    transform: rotate3d(0, 1, 0, 45deg);
  `}
  @media (max-width:768px){
    transform:none;
  }  
`

const StyledCardTextContent = styled.div`
  max-width:50%;
  transition:max-width 0.6s;
  overflow:hidden;
  max-height:50vh;
  h3{
    margin-top:0;
  }
  @media (max-width:768px){
    max-width:100%;
    max-height:unset;
  }
`

const StyledImageContainer = styled.div`
  max-width:50%;
  perspective:2000px;
  max-height:60vh;
  transition:0.8s;
  display:flex;
  align-items:center;
  justify-content: center;
  &:hover{
    @media (min-width:768px){
      ~ div{
        max-width:0%;
      }
      max-width:100%;
      width:100%;
      max-height:100vh;
      ${StyledImg}{
        transform: rotate3d(0, 1, 0, 0deg);
        max-width:100%;
        max-height:100vh;
      }
    }
  }
  @media (max-width:768px){
    max-width:100%;
  }
`

const StyledTransformedImageCard = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  flex-direction:row-reverse;
  align-items: center;
  text-align:left;
  *{
    @media (max-width:768px){
      text-align:center;
    }  
  }
  ${props => props.reverse && css`
    flex-direction:row;
    *{
      text-align:right;
      @media (max-width:768px){
        text-align:center;
      }  
    }
  `}
  @media (max-width:768px){
    flex-direction:column;
  }
`


const TransformedImageCard = ({image, title, description, buttonText, buttonLink, reverse}) => {
  return (
    <StyledTransformedImageCard reverse={reverse}>
      <StyledImageContainer>
        <StyledImg reverse={reverse} src={image} alt=""/>
      </StyledImageContainer>
      <StyledCardTextContent>
        <Heading as={'h3'} display>
          {title}
        </Heading>
          <Paragraph>
            {description} 
          </Paragraph>
        <VerticalMarginSeparator marginSize={2}/>
        <Button as={Link} to={buttonLink}>
          {buttonText} 
        </Button>
      </StyledCardTextContent>
    </StyledTransformedImageCard>
  )
}

export default TransformedImageCard