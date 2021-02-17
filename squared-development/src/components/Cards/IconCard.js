import React from 'react'
import {Link} from 'gatsby'

import styled from 'styled-components'
import Button from '../Buttons/Button'
import Heading from '../Heading'
import VerticalMarginSeparator from '../LayoutComponents/VerticalMarginSeparator'
import Paragraph from '../Paragraph'
import defaultIcon from '../../images/person-circle.svg'

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
  width:40%;
  overflow:hidden;
  img {
    width:100%;
  }
  @media (max-width:768px){
    width:75%;
  }
`

const IconCard = ({icon, text, title, button, buttonLink}) => {
  return (
    <StyledIconCard data-testid="card">
        <IconContainer>
        {
          icon ?
          <img src={icon} alt=''/>
          :
          <img src={defaultIcon} alt=''/>
        }
        </IconContainer>
      <VerticalMarginSeparator marginSize={1}/>
      <Paragraph display={true} alignment="center">
        "{text}"
      </Paragraph>
      <VerticalMarginSeparator marginSize={1}/>
      <Paragraph as="h4" display={true} alignment="center">
        {title}
      </Paragraph>
      <VerticalMarginSeparator marginSize={1}/>
      <Button primary as={Link} to={buttonLink}>
        {button}
      </Button>
    </StyledIconCard>
  )
}

export default IconCard