/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import styled from 'styled-components'

import Button from './Buttons/Button.js'
import RowSpaceBetween from './LayoutComponents/RowSpaceBetween'
import Header from "./Header.js"
import Logo from './Logo.js'


const StyledLayout = styled.div`
  position:relative;
  overflow:hidden;
`

const StyledMain = styled.main`
  position:relative;
  margin-top:170px;
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
    <StyledLayout>
      <Header>
        <RowSpaceBetween>
          <Link to='/'>
            <Logo/>
          </Link>
          <nav>
            <Button as={Link} to='#' link>About Us</Button>
            <Button as={Link} to='#' link>Projects</Button>
            <Button as={Link} to='#' link>References</Button>
            <Button as={Link} to='#' clipped>Contact</Button>
          </nav>
        </RowSpaceBetween>
      </Header>
      <div>
        <StyledMain>{children}</StyledMain>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://www.squareddevelopment.com">Squared Development</a>
        </footer>
      </div>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
