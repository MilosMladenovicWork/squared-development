import React from 'react'
import {render} from '@testing-library/react'
import IconCard from './IconCard'
import {theme} from '../../styles/styles'

import {ThemeProvider} from 'styled-components'

describe('IconCard', () => {

  const IconCardWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <IconCard {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<IconCardWithTheme/>)
    expect(getByTestId('card')).not.toBe(null)
  })

  it('accepts text props', () => {
    const {getByText} = render(<IconCardWithTheme text="text" title="title" button="button"/>)
    expect(getByText('"text"')).not.toBe(null)
    expect(getByText('title')).not.toBe(null)
    expect(getByText('button')).not.toBe(null)
  })
})