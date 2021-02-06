import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import PeopleOutside from './PeopleOutside'
import {theme} from '../../styles/styles' 

import {ThemeProvider} from 'styled-components'

describe('PeopleOutside', () => {
  const PeopleOutsideWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <PeopleOutside {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<PeopleOutsideWithTheme/>)
    expect(getByTestId('people-outside')).not.toBe(null)
  })

  describe('StyledPath', () => {
    it('accepts fillColor prop - valid value', () => {
      const {getByTestId} = render(<PeopleOutsideWithTheme fillColor="accent"/>)
      expect(getByTestId('path')).toHaveStyle(`
        fill: ${theme.colors["accent"]};
      `)
    })
    
    it('accept fillColor prop - invalid value', () => {
      const {getByTestId} = render(<PeopleOutsideWithTheme fillColor="something"/>)
      expect(getByTestId('path')).toHaveStyle(`
        fill: ${theme.colors["primary"]};
      `)  
    })
    it('gives fill value without passed fillColor prop', () => {
      const {getByTestId} = render(<PeopleOutsideWithTheme/>)
      expect(getByTestId('path')).toHaveStyle(`
        fill: ${theme.colors["primary"]};
      `)    
    })
  })
})