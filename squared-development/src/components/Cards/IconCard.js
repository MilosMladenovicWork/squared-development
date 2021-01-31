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
`

const IconContainer = styled.div`
  width:50%;
  overflow:hidden;
  img {
    width:100%;
  }
`

const IconCard = ({icon, text, title, button}) => {
  return (
    <StyledIconCard>
      <IconContainer>
        <img src={icon} alt=''/>
      </IconContainer>
      <VerticalMarginSeparator marginSize={1}/>
      <Paragraph display alignment="center">
        "{text}"
      </Paragraph>
      <VerticalMarginSeparator marginSize={1}/>
      <Paragraph as="h4" display alignment="center">
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