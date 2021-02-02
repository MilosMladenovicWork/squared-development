import React from 'react'

import styled from 'styled-components'
import Heading from '../components/Heading'
import VerticalMarginSeparator from '../components/LayoutComponents/VerticalMarginSeparator'
import Paragraph from './Paragraph'

const Footer = ({children}) => {
  return(
    <footer>
      <VerticalMarginSeparator marginSize={5}/>
      <Heading alignment="center" accent textColor="textLight">
        Contact Us
      </Heading>
      <Heading>
        Hey
      </Heading>
      <Heading>
        Hey
      </Heading>
      <Heading>
        Hey
      </Heading>
      <Heading>
        Hey
      </Heading>
      <Heading>
        Hey
      </Heading>
      {children}
      <Paragraph textColor="textLight" alignment="center">
      © {new Date().getFullYear()},
          {` `}
          <a href="https://www.squareddevelopment.com">Squared Development</a>
      </Paragraph>
      <VerticalMarginSeparator marginSize={1}/>
    </footer>
  )
}

export default Footer