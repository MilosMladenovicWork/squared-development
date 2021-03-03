import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import {inject, observer} from 'mobx-react'
import styled, {keyframes, css} from 'styled-components'
import 'swiper/swiper.scss';
import ReactVisibilitySensor from 'react-visibility-sensor'

import Layout from "../components/layout"
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
import Detail from "../components/Illustrations/Detail"
import IconTextCard from "../components/Cards/IconTextCard"
import ImageCoverCard from "../components/Cards/ImageCoverCard"
import perunProject from '../images/Perun.png'
import projectImgMobile from '../images/Minus1.png'
import projectImg from '../images/Perun.png'
import projectImgMobile2 from '../images/mobile-project.png'
import referenceImg from '../images/reference.png'
import ReferencesSlider from "../components/ReferencesSlider";
import TickMarksCard from '../components/Cards/TickMarksCard'
import ScalingSquares from "../components/Illustrations/ScalingSquares";
import TransformedImageCard from "../components/Cards/TransformedImageCard";
import minus1Img from '../images/minus1.png'
import perunImg from '../images/perun.png'
import mathGameImg from '../images/math-game.png'
import cubicalImg from '../images/cubical.png'
import helloCleanImg from '../images/hello-clean.png'
import runbgdImg from '../images/runbgd.png'

const HeroBannerContainer = styled.div`
  display:flex;
  align-items:center;
  min-height:70vh;
  @media (max-width:768px){
    flex-direction:column;
    align-items:unset;
  }
`

const heroAppear = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity:1
  }
`

const HeroButtons = styled.div`
  display:flex;
  align-items:flex-start;
  opacity:0;
  animation: ${heroAppear} 0.5s 2.25s forwards; 
  & > *:first-of-type{
    margin-right:10px;
    @media (max-width:768px){
      margin-right:unset;
      margin-bottom:10px;
    }
  }
  @media (max-width: 768px){
    flex-direction:column;
    margin-bottom:40px; 
  }
`

const FluidBackgroundContainer = styled.div`
  position:absolute;
  top:0;
  right:0;
  width:125vw;
  transform:translate(40%, -50%);
  z-index:-1;
  @media (max-width: 768px){
    width:130vw;
  }
`

const AboutContentContainer = styled.div`
  position:relative;
  width:100%;
  padding:75px 0 75px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  @media (max-width: 768px){
    flex-direction:column;
  }
`

const RelativeFullWidthContainer = styled.div`
  position:relative;
  width:100%;
`

const ServicesCardsContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  margin:auto;
  margin-top:50px; 
  max-width:1200px;
  @media (max-width: 768px){
    flex-direction: column;
    align-items:center;
    > *{
      margin-bottom:30px;
    }
  }
`

const ProjectsContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  @media (max-width:768px){
    margin-top:30px;
    flex-direction:column;
  }
`

const ReferencesContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-between;
  & > *:nth-child(odd){
    transform:scale(0.8);
  }
`

const appear = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:0.08;
  }
`
const secondAppear = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:0.08;
  }
`

const ReferencesBackgroundContainer = styled.div`
  position:absolute;
  top:0;
  z-index:-1;
  width:100%;
  height:100%;
  overflow:visible;
  > img {
    height:140%;
  }
  animation: ${({ toggle }) =>
    toggle
      ? css`
          ${appear} 0.7s linear forwards;
        `
      : css`
          ${secondAppear} 0.7s linear forwards;
        `};
  img {
    min-width:100%;
    min-height:100%;
    transform:translate(-50%, -50%);
    position:relative;
    top:50%;
    left:50%;
  }
`

const StyledPath = styled.path`
  fill:${props => props.fillColor ? (props.theme.colors[props.fillColor] ? props.theme.colors[props.fillColor] : props.theme.colors.primary) : props.theme.colors.primary};
`
const StyledSvg = styled.svg`
  transition:.25s;
  transform: ${props => props.cardHovered ? 'translateY(20px)' : 'translateY(-20px)'}; 
`

const HeroHeadingContainer = styled.div`
  opacity:0;
  animation: ${heroAppear} 0.5s forwards;
`

const HeroDescriptionContainer = styled.div`
  opacity:0;
  animation: ${heroAppear} 0.5s 0.75s forwards;
`

const HeroIllustrationContainer = styled.div`
  opacity:0;
  animation: ${heroAppear} 0.5s 1.5s forwards;
`

const IndexPage = ({activeSection: activeSectionStore}) => {

  const [referenceSectionImage, setReferenceSectionImage] = useState('')
  const [toggleReferencesBackground, setToggleReferencesBackground] = useState(false)
  const {activeSectionId, lastActiveSectionId} = activeSectionStore

  useEffect(() => {
    setToggleReferencesBackground(prevState => !prevState)
  }, [referenceSectionImage])

  
  const handleSectionVisibility = (isVisible, id) => {
    console.log(isVisible, id)
    console.log(activeSectionId, lastActiveSectionId)
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
  <Layout>
    <SEO title="Home" />
    <ConstraintContainer>
      <FullHeightContainer>
        <ReactVisibilitySensor partialVisibility offset={{top: typeof window !== 'undefined' && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#home')}>
          <section>
            <HeroBannerContainer>
              <PercentageWidthContainer widthPercentage={45}>
                <HeroHeadingContainer>
                  <Heading alignment={'left'}>Squared Development Agency</Heading>
                </HeroHeadingContainer>
                <HeroDescriptionContainer>
                  <Paragraph display>
                    We develop professionally designed, fast and attention grabbing websites and web applications.
                  </Paragraph>
                </HeroDescriptionContainer>
                <VerticalMarginSeparator marginSize={2}>
                  <HeroButtons>
                    <Button as={Link} to='/#contact'>Contact Us</Button>
                    <Button as={Link} to='/#projects' secondary>See our work</Button>
                  </HeroButtons>
                </VerticalMarginSeparator>
              </PercentageWidthContainer>
              <PercentageWidthContainer widthPercentage={55}>
                <HeroIllustrationContainer>
                  <DeveloperMakingSite fillColor={'accent'}/>
                </HeroIllustrationContainer>
              </PercentageWidthContainer>
              <FluidBackgroundContainer>
                <Fluid/>
              </FluidBackgroundContainer>
            </HeroBannerContainer>
          </section>
        </ReactVisibilitySensor>
      </FullHeightContainer>
    </ConstraintContainer>
    <RelativeFullWidthContainer>
      <Detail size={10} backwards horizontalPosition={'left'} verticalPosition={'top'}/>
      <Detail size={5} horizontalPosition={'right'} verticalPosition={'bottom'}/>
      <ConstraintContainer>
      <ReactVisibilitySensor partialVisibility offset={{top: typeof window !== 'undefined' && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#services')}>
          <section>
            <Heading alignment={'center'} accent>
              OUR SERVICES
            </Heading>
            <Paragraph halfWidth display alignment={'center'}>
              We provide everything you need for your company website so you can focus on what matters the most, your product. Also, you are going to get exactly what you need in time interval that you set. Our services include:    
            </Paragraph>
            <ServicesCardsContainer>
              <IconTextCard 
                heading="Custom Website Design"
                text="We are going to create original and user friendly design so your clients can feel quality of your product by just looking at your website."
                icon={ (cardHovered) =>
                  <StyledSvg
                  cardHovered={cardHovered}
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  >
                    <StyledPath fillColor={cardHovered ? 'accent' : 'textLight'} d="M96.85 286.62a8 8 0 00-12.53 8.25C102.07 373.28 172.3 432 256 432a175.31 175.31 0 0052.41-8 8 8 0 00.79-15 1120 1120 0 01-109.48-55.61 1126.24 1126.24 0 01-102.87-66.77zm395.87 52.89c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 00-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 003.15 16.06c22.74 25 26.42 38.51 25.48 41.36-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0019.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 00432 256a178.87 178.87 0 00-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 00-106.4 35.89 177.4 177.4 0 00-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 00-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0096.22 123l.36-.44a15.74 15.74 0 00-8.67-25.43A237.38 237.38 0 0064.13 93c-30.72-3.53-50.83 2.52-59.78 18-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5z"/>
                  </StyledSvg>
                }
              />
              <IconTextCard 
                heading="Free Hosting"
                text="We offer free hosting for websites that we build so you don't need to think about additional costs associated with your website."
                icon={ (cardHovered) =>
                  <StyledSvg
                  cardHovered={cardHovered}
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  >
                    <StyledPath fillColor={cardHovered ? 'accent' : 'textLight'} d='M432 32H80a64.07 64.07 0 00-64 64v320a64.07 64.07 0 0064 64h352a64.07 64.07 0 0064-64V96a64.07 64.07 0 00-64-64zM96 256a16 16 0 01-10-28.49L150.39 176 86 124.49a16 16 0 1120-25l80 64a16 16 0 010 25l-80 64A16 16 0 0196 256zm160 0h-64a16 16 0 010-32h64a16 16 0 010 32z'/>
                  </StyledSvg>
                }
              />
              <IconTextCard 
                heading="Maintenance and Scaling"
                text="Whenever you want you can expand on your website and add exciting stuff, like live chat. When you are too busy with your clients you can ask us to maintain your website for you."
                icon={ (cardHovered) =>
                  <StyledSvg
                  cardHovered={cardHovered}
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  >
                    <StyledPath fillColor={cardHovered ? 'accent' : 'textLight'} d='M156 432h-40a36 36 0 01-36-36V244a36 36 0 0136-36h40a36 36 0 0136 36v152a36 36 0 01-36 36zM300 432h-40a36 36 0 01-36-36V196a36 36 0 0136-36h40a36 36 0 0136 36v200a36 36 0 01-36 36zM443.64 432h-40a36 36 0 01-36-36V132a36 36 0 0136-36h40a36 36 0 0136 36v264a36 36 0 01-36 36z'/>
                  </StyledSvg>
                }
              />
            </ServicesCardsContainer>
            <VerticalMarginSeparator marginSize={2}/>
          </section>
      </ReactVisibilitySensor> 
      </ConstraintContainer>
    </RelativeFullWidthContainer>
    <AboutContentContainer>
      <CurvedBackground />
      <ConstraintContainer>
      <ReactVisibilitySensor partialVisibility offset={{top: typeof window !== 'undefined' && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#about')}>
        <section id="about">
          <AboutContentContainer>
            <PercentageWidthContainer widthPercentage={50}>
              <PeopleOutside fillColor="accent"/>
            </PercentageWidthContainer>
            <PercentageWidthContainer widthPercentage={40}>
              <Heading alignment={'right'} accent textColor="textLight">About us</Heading>
              <Paragraph alignment={'right'} textColor="textLight">
                We are team of developers and designers with a mission of creating engaging and user friendly websites and web applications.
              </Paragraph>
              <VerticalMarginSeparator marginSize={0.25}/>
              <Paragraph alignment={'right'} textColor="textLight">
                With use of latest technologies we are creating websites that can stand test of time with good design and appear on 1st page of Google results.
              </Paragraph>
            </PercentageWidthContainer>
          </AboutContentContainer>
        </section>
      </ReactVisibilitySensor>
      </ConstraintContainer>
    </AboutContentContainer>
    <RelativeFullWidthContainer>
      <ScalingSquares size={7} backwards horizontalPosition={'left'} verticalPosition={'top'}/>
      <ScalingSquares size={5} horizontalPosition={'right'} verticalPosition={'bottom'}/>
      <ConstraintContainer>
        <ReactVisibilitySensor partialVisibility offset={{top: typeof window !== 'undefined' && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#pricing')}>
          <section>
            <Heading alignment={'center'} accent>
              Pricing
            </Heading>
            <Paragraph halfWidth display alignment={'center'}>
              We divided price ranges in three packages with different included services, but feel free to contact us so we can negotiate the price.  
            </Paragraph>
            <ServicesCardsContainer>
              <TickMarksCard 
                heading="Basic"
                subheading="From 200$"
                text="Small website for starting out your business."
                listItems={[
                  {
                    available: true,
                    text: 'Custom Design'
                  },
                  {
                    available: true,
                    text: 'Free Hosting'
                  },
                  {
                    available: true,
                    text: 'Analytics'
                  },
                  {
                    available: true,
                    text: 'Up to 3 pages'
                  },
                  {
                    available: true,
                    text: 'SEO'
                  },
                  {
                    available: false,
                    text: 'Custom CMS'
                  },
                  {
                    available: false,
                    text: 'Advanced Custom Features'
                  },
                ]}
                icon={ (cardHovered) =>
                  <StyledSvg cardHovered={cardHovered} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 288">
                    <StyledPath fillColor={cardHovered ? 'accent' : 'textDark'} id="albums" d="M419.13,448H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z" transform="translate(-48 -160)"/>
                  </StyledSvg>
                }
              />
              <TickMarksCard 
                heading="Advanced"
                subheading="From 500$ to 1200$"
                text="Medium websites where you can change page data using Custom CMS."
                listItems={[
                  {
                    available: true,
                    text: 'Custom Design'
                  },
                  {
                    available: true,
                    text: 'Free Hosting'
                  },
                  {
                    available: true,
                    text: 'Analytics'
                  },
                  {
                    available: true,
                    text: 'Up to 10 pages'
                  },
                  {
                    available: true,
                    text: 'SEO'
                  },
                  {
                    available: true,
                    text: 'Custom CMS'
                  },
                  {
                    available: true,
                    text: 'Advanced Custom Features'
                  },
                ]}
                icon={ (cardHovered) =>
                  <StyledSvg cardHovered={cardHovered} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 336">
                    <StyledPath fillColor={cardHovered ? 'accent' : 'textDark'} id="albums" d="M400,144H112a16,16,0,0,1,0-32H400a16,16,0,0,1,0,32Zm19.13,304H92.87A44.92,44.92,0,0,1,48,403.13V204.87A44.92,44.92,0,0,1,92.87,160H419.13A44.92,44.92,0,0,1,464,204.87V403.13A44.92,44.92,0,0,1,419.13,448Z" transform="translate(-48 -112)"/>
                  </StyledSvg>
                }
                />
              <TickMarksCard 
                heading="Professional"
                subheading="From 1200$"
                text="Large websites with lots of pages and visitors."
                listItems={[
                  {
                    available: true,
                    text: 'Custom Design'
                  },
                  {
                    available: true,
                    text: 'Free Hosting'
                  },
                  {
                    available: true,
                    text: 'Analytics'
                  },
                  {
                    available: true,
                    text: 'More than 10 pages'
                  },
                  {
                    available: true,
                    text: 'SEO'
                  },
                  {
                    available: true,
                    text: 'Custom CMS'
                  },
                  {
                    available: true,
                    text: 'Advanced Custom Features'
                  },
                ]}
                icon={ (cardHovered) =>
                  <StyledSvg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    cardHovered={cardHovered}
                  >
                    <StyledPath fillColor={cardHovered ? 'accent' : 'textDark'} d="M368 96H144a16 16 0 010-32h224a16 16 0 010 32zm32 48H112a16 16 0 010-32h288a16 16 0 010 32zm19.13 304H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z"/>
                  </StyledSvg>
                }
              />
            </ServicesCardsContainer>
            <VerticalMarginSeparator marginSize={2}/>
          </section>
        </ReactVisibilitySensor>
      </ConstraintContainer>
    </RelativeFullWidthContainer>
    <VerticalMarginSeparator marginSize={4}/>
    <RelativeFullWidthContainer>
      <Detail size={3} backwards horizontalPosition={'left'} verticalPosition={'top'}/>
      <Detail size={4} horizontalPosition={'right'} verticalPosition={'bottom'}/>
      <ConstraintContainer>
      <ReactVisibilitySensor partialVisibility offset={{top: typeof window !== 'undefined' && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#projects')}>
        <section id="projects">
          <Heading alignment="left" accent>
            Our Latest Work
          </Heading>
          <VerticalMarginSeparator marginSize={1}/>
          <Paragraph alignment="left" display halfWidth>
            We are proud to showcase our most recent work. 
          </Paragraph>
          <VerticalMarginSeparator marginSize={3}/>
          <ProjectsContainer>
            <TransformedImageCard 
              image={minus1Img} 
              title="Minus1 Store" 
              description="Hype wear web store built with elegant and smooth page transitions and users experience in mind." 
              buttonText="Visit"
              buttonLink="https://minus1store.rs"
            />
            <TransformedImageCard
              image={perunImg} 
              reverse 
              title="Perun network" 
              description="One page modern and clean look website for blockchain framework." 
              buttonText="Visit"
              buttonLink="https://perun.network"
            />
            <TransformedImageCard 
              image={cubicalImg} 
              title="Cubical.ag properties" 
              description="Website built with support for CMS with fresh and eye grabbing design." 
              buttonText="Visit"
              buttonLink="https://cubical-ag.netlify.app"
            />
            <TransformedImageCard
              image={runbgdImg} 
              reverse 
              title="RUN BGD news blog" 
              description="Mobile first website with CMS support, web store, newsletter, and find location app for visitors to easily find their next location to visit in Belgrade." 
              buttonText="Visit"
              buttonLink="https://runbgd.com"
            />
            <TransformedImageCard 
              image={mathGameImg} 
              title="Kids Math Game" 
              description="Web application with user authentication. Built for kids that are practicing simple mathematical operations where numbers result needs to be above 0." 
              buttonText="Visit"
              buttonLink="https://kids-math-game.netlify.app"
            />
            <TransformedImageCard
              image={helloCleanImg} 
              reverse 
              title="Hello clean website" 
              description="Website featuring simple and clean design that doesn't tire visitor's eyes." 
              buttonText="Visit"
              buttonLink="https://helloclean.pl"
            />
          </ProjectsContainer>  
        </section>
      </ReactVisibilitySensor>
      </ConstraintContainer>
    </RelativeFullWidthContainer>
    <RelativeFullWidthContainer>
      <ReactVisibilitySensor partialVisibility offset={{top: typeof window !== 'undefined' && window.innerHeight/2}} onChange={(isVisible) => handleSectionVisibility(isVisible, '/#references')}>
        <section id="references">
          <ReferencesBackgroundContainer toggle={toggleReferencesBackground}>
            <img src={referenceSectionImage} alt=''/>
          </ReferencesBackgroundContainer>
          <ConstraintContainer>
            <Heading alignment="right" accent>
              References
            </Heading>
          </ConstraintContainer>
          <ReferencesContainer>
            <ReferencesSlider
              data={[
                {
                  title: 'Mahamud Hassan',
                  text: 'Definetely top notch! Looking forward to the next project!',
                  button: 'Perun',
                  buttonLink: 'https://perun.network',
                  projectImg: perunProject
                },
              ]}
              setImageToParent={(image) => setReferenceSectionImage(image)}
            />
          </ReferencesContainer>
        </section>
      </ReactVisibilitySensor>
    </RelativeFullWidthContainer>
  </Layout>
  )
}

export default inject('activeSection')(observer(IndexPage))
