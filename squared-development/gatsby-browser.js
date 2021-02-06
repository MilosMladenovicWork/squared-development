/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'

import {ThemeProvider, createGlobalStyle} from 'styled-components'

import {theme, GlobalStyle} from './src/styles/styles'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    {element}
  </ThemeProvider>
)