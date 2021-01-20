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
import CurvedBackground from "../components/Illustrations/CurvedBackground.js"
import PeopleOutside from '../components/Illustrations/PeopleOutside'


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

const AboutContentContainer = styled.div`
  position:relative;
  width:100%;
  padding:75px 0 75px;
`

const AboutContentRow = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
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
    <AboutContentContainer>
      <CurvedBackground />
      <ConstraintContainer>
        <AboutContentContainer>
          <AboutContentRow>
            <PercentageWidthContainer widthPercentage={50}>
              <PeopleOutside fillColor="accent"/>
            </PercentageWidthContainer>
            <PercentageWidthContainer widthPercentage={40}>
              <Heading alignment={'right'} accent textColor="textLight">About us</Heading>
              <Paragraph alignment={'right'} textColor="textLight">
                Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.
              </Paragraph>
              <Paragraph alignment={'right'} textColor="textLight">
                Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
              </Paragraph>
            </PercentageWidthContainer>
          </AboutContentRow>
        </AboutContentContainer>
      </ConstraintContainer>
    </AboutContentContainer>
  </Layout>
)

export default IndexPage
