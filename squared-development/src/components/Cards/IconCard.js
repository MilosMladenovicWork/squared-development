import React from 'react'

import styled from 'styled-components'
import Button from '../Buttons/Button'
import Heading from '../Heading'
import VerticalMarginSeparator from '../LayoutComponents/VerticalMarginSeparator'
import Paragraph from '../Paragraph'

const StyledIconCard = styled.div`
  width:27.5vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  @media (max-width:768px){
    width:80%;
  }
`

const IconContainer = styled.div`
  width:50%;
  overflow:hidden;
  img {
    width:100%;
  }
  @media (max-width:768px){
    width:75%;
  }
`

const IconCard = ({icon, text, title, button}) => {
  return (
    <StyledIconCard data-testid="card">
      {
        icon &&
        <IconContainer>
          <img src={icon} alt=''/>
        </IconContainer>
      }
      <VerticalMarginSeparator marginSize={1}/>
      <Paragraph display={true} alignment="center">
        "{text}"
      </Paragraph>
      <VerticalMarginSeparator marginSize={1}/>
      <Paragraph as="h4" display={true} alignment="center">
        {title}
      </Paragraph>
      <VerticalMarginSeparator marginSize={1}/>
      <Button primary>
        {button}
      </Button>
    </StyledIconCard>
  )
}

export default IconCard