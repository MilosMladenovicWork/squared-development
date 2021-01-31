import React from 'react'
import {render} from '@testing-library/react'
import SquaredSquare from './SquaredSquare'
import {theme} from '../../../gatsby-browser'

import {ThemeProvider} from 'styled-components'

describe('SquaredSquare', () => {
  const SquaredSquareWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <SquaredSquare {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<SquaredSquareWithTheme/>)
    expect(getByTestId('squared-square')).not.toBe(null)
  })

  it('accepts alignment prop - left', () => {
    const {getByTestId} = render(<SquaredSquareWithTheme alignment='left'/>)
    expect(getByTestId('squared-square')).toHaveStyle(`
    left:0%;
    `)
  })
  
  it('accepts alignment prop - right', () => {
    const {getByTestId} = render(<SquaredSquareWithTheme alignment='right'/>)
    expect(getByTestId('squared-square')).toHaveStyle(`
    left:100%;
    `)
  })
  
  it('sets alignment without alignment prop', () => {
    const {getByTestId} = render(<SquaredSquareWithTheme />)
    expect(getByTestId('squared-square')).toHaveStyle(`
      left:unset;
      right:unset;
    `)
  })
  
  it('accepts theme colors', () => {
    const {getByTestId} = render(<SquaredSquareWithTheme alignment='right'/>)
    expect(getByTestId('squared-square')).toHaveStyle(`
      border: 15px solid ${theme.colors.accent};
    `)
  })

})