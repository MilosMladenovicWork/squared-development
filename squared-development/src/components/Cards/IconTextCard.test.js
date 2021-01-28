import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import IconTextCard from './IconTextCard'
import {theme} from '../../../gatsby-browser' 

import {ThemeProvider} from 'styled-components'

describe('IconTextCard', () => {
  const IconTextCardWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <IconTextCard {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<IconTextCardWithTheme/>)
    expect(getByTestId('card')).not.toBe(null)
  })

  it('renders heading', () => {
    const {getByText} = render(<IconTextCardWithTheme heading="heading"/>)
    expect(getByText('heading')).not.toBe(null)
  })
  
  it('renders text', () => {
    const {getByText} = render(<IconTextCardWithTheme text="text"/>)
    expect(getByText('text')).not.toBe(null)
  })

  it('calls icon function', () => {
    const iconFunction = jest.fn()
    render(<IconTextCardWithTheme icon={iconFunction}/>)
    expect(iconFunction.mock.calls.length).toBe(1)
  })
  
  it('calls icon function with argument', () => {
    const iconFunction = jest.fn()
    render(<IconTextCardWithTheme icon={iconFunction}/>)
    expect(iconFunction.mock.calls[0][0]).toBe(false)  
  })

  it('detects card hover', () => {
    const iconFunction = jest.fn()
    const {getByTestId} = render(<IconTextCardWithTheme icon={iconFunction}/>)
    expect(iconFunction.mock.calls[0][0]).toBe(false)  
    fireEvent.mouseOver(getByTestId('card'))
    expect(iconFunction.mock.calls[1][0]).toBe(true)
    fireEvent.mouseOut(getByTestId('card'))
    expect(iconFunction.mock.calls[2][0]).toBe(false)
  })
})