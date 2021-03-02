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
  transform-style:preserve-3d;
  transform: rotate3d(0, 1, 0, -45deg);
  box-shadow:0px 5px 25px rgba(0, 0, 0, 0.12);
  margin:50px 0px;
  ${props => props.reverse && css`
    transform: rotate3d(0, 1, 0, 45deg);
  `}
  @media (max-width:768px){
    transform:none;
  }  
`

const StyledImageContainer = styled.div`
  max-width:50%;
  perspective:2000px;
  max-height:60vh;
  @media (max-width:768px){
    width:100%;
  }
`

const StyledTransformedImageCard = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  *{
    @media (max-width:768px){
      text-align:center;
    }  
  }
  ${props => props.reverse && css`
    flex-direction:row-reverse;
    *{
      text-align:right;
      @media (max-width:768px){
        text-align:center;
      }  
    }
  `}
  @media (max-width:768px){
    flex-direction:column-reverse;
  }
`

const StyledCardTextContent = styled.div`
  width:50%;
  @media (max-width:768px){
    width:100%;
  }
`

const TransformedImageCard = ({image, title, description, buttonText, buttonLink, reverse}) => {
  return (
    <StyledTransformedImageCard reverse={reverse}>
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
      <StyledImageContainer>
        <StyledImg reverse={reverse} src={image} alt=""/>
      </StyledImageContainer>
    </StyledTransformedImageCard>
  )
}

export default TransformedImageCard