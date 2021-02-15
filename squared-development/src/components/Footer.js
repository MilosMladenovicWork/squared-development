import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {inject, observer} from 'mobx-react'

import styled, {keyframes, css} from 'styled-components'
import Heading from '../components/Heading'
import VerticalMarginSeparator from '../components/LayoutComponents/VerticalMarginSeparator'
import ContactForm from './ContactForm'
import WavyLinesBackground from './Illustrations/WavyLinesBackground'
import Paragraph from './Paragraph'

const borderCurving = keyframes`
  0%{
    border-radius:0% 0% 0 0;
  }
  50%{
    border-radius:100% 100% 0 0;
  }
  100%{
    border-radius:0% 0% 0 0;
  }
`

const CurvyBackgroundContainer = styled.div`
  background:${props => props.theme.colors.light};
  border-radius: 100% 100% 0 0;
  ${props => props.isVisible && css`
    animation: ${borderCurving} 15s ease-in forwards;
  `}
  animation-iteration-count: infinite;
`


const Footer = ({children, activeSection: activeSectionStore}) => {

  const {activeSectionId, lastActiveSectionId} = activeSectionStore

  const handleSectionVisibility = (isVisible, id) => {
    if(isVisible){
      if(activeSectionId !== id){
        activeSectionStore.setActiveSectionId(id)
      }
    }else{
      if(activeSectionId === id){
        activeSectionStore.setActiveSectionId(lastActiveSectionId)
      }
    }
  }

  return(
    <VisibilitySensor partialVisibility offset={{top: typeof window !== undefined && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#contact')}>
      <footer id="contact">
        <VerticalMarginSeparator marginSize={5}/>
        <Heading alignment="center" accent textColor="textLight">
          Contact Us
        </Heading>
        <VerticalMarginSeparator marginSize={2}/>
        <ContactForm/>
        <VerticalMarginSeparator marginSize={2}/>
        {children}
        <WavyLinesBackground fillColor="light"/>
        <VisibilitySensor partialVisibility>
        {({isVisible}) => {
          return <CurvyBackgroundContainer isVisible={isVisible}>
            <VerticalMarginSeparator marginSize={1}/>
            <Paragraph textColor="textDark" alignment="center">
            © {new Date().getFullYear()}
                {` `}
                <a href="https://www.squareddevelopment.com">
                  <b>
                    Squared Development
                  </b>
                </a>
            </Paragraph>
            <VerticalMarginSeparator marginSize={1}/>
          </CurvyBackgroundContainer>
        }}
        </VisibilitySensor>
      </footer>
    </VisibilitySensor>
  )
}

export default inject('activeSection')(observer(Footer))