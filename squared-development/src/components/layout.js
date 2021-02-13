/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled, {ThemeProvider, keyframes} from 'styled-components'

import {theme, GlobalStyle} from '../styles/styles'

import Button from './Buttons/Button.js'
import RowSpaceBetween from './LayoutComponents/RowSpaceBetween'
import Header from "./Header.js"
import Logo from './Logo.js'
import CurvedBackground from './Illustrations/CurvedBackground'
import Footer from './Footer'

const RelativeFullWidthContainer = styled.div`
  position:relative;
  width:100%;
`

const StyledLayout = styled.div`
  position:relative;
  overflow:hidden;
`

const StyledMain = styled.main`
  position:relative;
  margin-top:170px;
  @media (max-width: 768px){
    margin-top:100px;
  }
`

const StyledNav = styled.nav`
  @media (max-width: 768px){
    display:none;
  }
`
const StyledMobileNav = styled.nav`
  display:none;
  @media (max-width: 768px){
    display:${props => props.menuClicked ? 'flex' : 'none'};
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    height:80vh;
  }
`

const CloseIcon = styled.div`
  width:40px;
  height:40px;
  display:unset;
  position:absolute;
  right:20px;
  transition:0.3s;
  transform: ${props => props.menuOpened ? 'translateY(0px)' : 'translateY(-100px)'};
  opacity: ${props => props.menuOpened ? 1 : 0};
`

const HeaderMainContent = styled.div`
  display:flex;
  justify-content:space-between;
`

const HamburgerIconContainer = styled.div`
  width:40px;
  transition:0.3s;
  display:none;
  svg{
    width:100%;
  }
  @media (max-width:768px){
    transform: ${props => props.menuOpened ? 'translateY(-100px)' : 'translateY(0px)'};
    opacity: ${props => props.menuOpened ? 0 : 1};
    display:block;
  }
`

const StyledPath = styled.path`
  fill: ${props => props.theme.colors.light};
  stroke: ${props => props.theme.colors.light};
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuClicked, setMenuClicked] = useState(false)


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <StyledLayout>
        <Header menuClicked={menuClicked}>
          <HeaderMainContent>
            <Link to='/'>
              <Logo/>
            </Link>
            <StyledNav>
              <Button as={Link} to='/#about' link>About Us</Button>
              <Button as={Link} to='/#projects' link>Projects</Button>
              <Button as={Link} to='/#references' link>References</Button>
              <Button as={Link} to='/#contact' clipped>Contact</Button>
            </StyledNav>
            <HamburgerIconContainer menuOpened={menuClicked}>
              <svg
                onClick={() => setMenuClicked(prevState => !prevState)}
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <StyledPath
                  fill="none"
                  stroke="red"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="48"
                  d="M88 152h336M168 256h252M256 360h168"
                ></StyledPath>
              </svg>
            </HamburgerIconContainer>
            <CloseIcon menuOpened={menuClicked} onClick={() => setMenuClicked(prevState => !prevState)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                <StyledPath d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/>
              </svg>
            </CloseIcon>
          </HeaderMainContent>
          <StyledMobileNav menuClicked={menuClicked}>
            <Button display as={Link} to='/#about' link>About Us</Button>
            <Button display as={Link} to='/#projects' link>Projects</Button>
            <Button display as={Link} to='/#references' link>References</Button>
            <Button display as={Link} to='/#contact' clipped>Contact</Button>
          </StyledMobileNav>
        </Header>
        <div>
          <StyledMain>{children}</StyledMain>
          <RelativeFullWidthContainer>
            <CurvedBackground hideBottom topVariant={1}/>
            <Footer>
            </Footer>
          </RelativeFullWidthContainer>
        </div>
      </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
