import React from 'react'

import styled, {keyframes} from 'styled-components'
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
  animation: ${borderCurving} 15s ease-in forwards;
  animation-iteration-count: infinite;
`

const Footer = ({children}) => {
  return(
    <footer>
      <VerticalMarginSeparator marginSize={5}/>
      <Heading alignment="center" accent textColor="textLight">
        Contact Us
      </Heading>
      <VerticalMarginSeparator marginSize={2}/>
      <ContactForm/>
      <VerticalMarginSeparator marginSize={2}/>
      {children}
      <WavyLinesBackground fillColor="light"/>
      <CurvyBackgroundContainer>
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
    </footer>
  )
}

export default Footer