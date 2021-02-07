/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled, {ThemeProvider} from 'styled-components'

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


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <StyledLayout>
        <Header>
          <RowSpaceBetween>
            <Link to='/'>
              <Logo/>
            </Link>
            <StyledNav>
              <Button as={Link} to='#' link>About Us</Button>
              <Button as={Link} to='#' link>Projects</Button>
              <Button as={Link} to='#' link>References</Button>
              <Button as={Link} to='#' clipped>Contact</Button>
            </StyledNav>
          </RowSpaceBetween>
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
