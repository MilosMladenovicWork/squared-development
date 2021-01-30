import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import DeveloperMakingSite from './DeveloperMakingSite'
import {theme} from '../../../gatsby-browser' 

import {ThemeProvider} from 'styled-components'

describe('DeveloperMakingSite', () => {
  const DeveloperMakingSiteWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <DeveloperMakingSite {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<DeveloperMakingSiteWithTheme/>)
    expect(getByTestId('developer-making-site')).not.toBe(null)
  })  

  it('accepts theme colors - fill', () => {
    const {getByTestId} = render(<DeveloperMakingSiteWithTheme/>)
    expect(getByTestId('path-fill')).toHaveStyle(`
      fill:${theme.colors.accent};
    `)
  })
  it('accepts theme colors - stroke', () => {
    const {getByTestId} = render(<DeveloperMakingSiteWithTheme/>)
    expect(getByTestId('path-stroke')).toHaveStyle(`
      stroke:${theme.colors.accent};
    `)
  })
})