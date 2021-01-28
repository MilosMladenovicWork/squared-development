import React, {useState} from 'react'

import styled from 'styled-components'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import WavyBottomBackground from '../Illustrations/WavyBottomBackground'

const StyledCard = styled.div`
  width: 320px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow:hidden;
  h3 {
    font-size:2rem;
    text-transform:unset;
  }
`

const TextContent = styled.div`
  min-height:200px;
  padding: 0 15px 15px;
`

const PresentationalContent = styled.div`
  position:relative;
  min-height:200px;
  display:flex;
  justify-content:center;
  > svg{
    margin:auto;
    width:50%;
  }
`


const IllustrationContainer = styled.div`
  position:absolute;
  top:0%;
  z-index:-1;
  height:100%;
  width:100%;
  transition:.25s;
  transform:${props => props.cardHovered ? 'scale(7)' : 'scale(1)'};
`

const IconTextCard = ({heading, text, icon}) => {
  const [cardHovered, setCardHovered] = useState(false)
  return(
    <StyledCard 
      onMouseOver={() => setCardHovered(true)}
      onMouseOut={() => setCardHovered(false)}
    >
      <PresentationalContent>
        {icon(cardHovered)}
        <IllustrationContainer cardHovered={cardHovered}>
          <WavyBottomBackground/>
        </IllustrationContainer>
      </PresentationalContent>
      <TextContent>
        <Heading as='h3' alignment="center" textColor={cardHovered ? 'textLight' : 'textDark'}>
          {heading}
        </Heading>
        <Paragraph alignment="center" textColor={cardHovered ? 'textLight' : 'textDark'}>
          {text} 
        </Paragraph>
      </TextContent>
    </StyledCard>
  )
}

export default IconTextCard