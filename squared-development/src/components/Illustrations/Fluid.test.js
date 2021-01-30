import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Fluid from './Fluid'
import {theme} from '../../../gatsby-browser' 

import {ThemeProvider} from 'styled-components'

describe('Fluid', () => {
  const FluidWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <Fluid {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<FluidWithTheme/>)
    expect(getByTestId('fluid')).not.toBe(null)
  })
})