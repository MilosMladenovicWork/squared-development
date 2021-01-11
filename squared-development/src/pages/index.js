import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '../components/Buttons/Button.js'
import Heading from '../components/Heading.js'
import ConstraintContainer from "../components/LayoutComponents/ConstraintContainer"
import Paragraph from "../components/Paragraph"
import HorizontalMarginSeparator from '../components/LayoutComponents/HorizontalMarginSeparator'
import VerticalMarginSeparator from "../components/LayoutComponents/VerticalMarginSeparator"
import FullHeightContainer from '../components/LayoutComponents/FullHeightContainer'
import DeveloperMakingSite from '../components/Illustrations/DeveloperMakingSite'
import Fluid from '../components/Illustrations/Fluid'
import PercentageWidthContainer from '../components/LayoutComponents/PercentageWidthContainer'


const HeroBannerContainer = styled.div`
  display:flex;
  align-items:center;
  min-height:70vh;
`

const FluidBackgroundContainer = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:125vw;
  transform:translate(40%, -50%);
  z-index:-1;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ConstraintContainer>
      <FullHeightContainer>
        <section>
          <HeroBannerContainer>
            <PercentageWidthContainer widthPercentage={45}>
              <Heading alignment={'left'}>Squared Development Agency</Heading>
              <Paragraph display>
                We develop professionally designed, fast and attention grabbing experiences.
              </Paragraph>
              <VerticalMarginSeparator marginSize={2}>
                <Button as={Link} to='#'>Contact Us</Button>
                <HorizontalMarginSeparator marginSize={2}>
                  <Button as={Link} to='#' secondary>See our work</Button>
                </HorizontalMarginSeparator>
              </VerticalMarginSeparator>
            </PercentageWidthContainer>
            <PercentageWidthContainer widthPercentage={55}>
              <DeveloperMakingSite/>
            </PercentageWidthContainer>
            <FluidBackgroundContainer>
              <Fluid/>
            </FluidBackgroundContainer>
          </HeroBannerContainer>
        </section>
      </FullHeightContainer>
    </ConstraintContainer>
  </Layout>
)

export default IndexPage
