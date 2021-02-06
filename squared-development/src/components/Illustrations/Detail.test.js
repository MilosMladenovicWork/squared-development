import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Detail from './Detail'
import {theme} from '../../styles/styles' 

import {ThemeProvider} from 'styled-components'

describe('Detail', () => {

  const DetailWithTheme = ({...props}) => <ThemeProvider theme={theme}>
    <Detail {...props}/>
  </ThemeProvider>

  it('renders', () => {
    const {getByTestId} = render(<DetailWithTheme/>)
    expect(getByTestId('detail')).not.toBe(null)
  })
  
  it('accepts backwards prop', () => {
    const {getByTestId} = render(<DetailWithTheme backwards={true}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      animation-direction: reverse;
    `)
  })
  
  it('have normal animation direction without backwards prop', () => {
    const {getByTestId} = render(<DetailWithTheme />)
    expect(getByTestId('detail')).toHaveStyle(`
      animation-direction: normal;
    `)
  })
  
  it('accepts size prop', () => {
    const {getByTestId} = render(<DetailWithTheme size={1}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      width: ${1 * 2}vw;
    `)
  })
  it('accepts size prop', () => {
    const {getByTestId} = render(<DetailWithTheme size={1}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      width: ${1 * 2}vw;
    `)
  })
  it('has size without size prop', () => {
    const {getByTestId} = render(<DetailWithTheme/>)
    expect(getByTestId('detail')).toHaveStyle(`
    width: 2vw;
    `) 
  })
  it('has animation speed based on size', () => {
    const {getByTestId} = render(<DetailWithTheme size={1}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      animation-duration:2s;
    `)
  })
  it('accepts verticalPosition prop - top', () => {
    const {getByTestId} = render(<DetailWithTheme verticalPosition={'top'}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      top:0%;
    `)
  })
  it('accepts verticalPosition prop - unallowed value set', () => {
    const {getByTestId} = render(<DetailWithTheme verticalPosition={'something'}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      top:0%;
    `)
  })
  it('accepts horizontalPosition prop - right', () => {
    const {getByTestId} = render(<DetailWithTheme horizontalPosition={'right'}/>)
    expect(getByTestId('detail')).toHaveStyle(`
      right:0%;
    `)
  })
  it('accepts horizontalPosition prop - unallowed value set', () => {
    const {getByTestId} = render(<DetailWithTheme horizontalPosition={'something'}/>)
    expect(getByTestId('detail')).toHaveStyle(`
    left:0%;
    `)
  })
  
  describe('StyledRect', () => {
    it('renders', () => {
      const {getAllByTestId} = render(<DetailWithTheme/>)
      expect(getAllByTestId('styled-rect')).not.toBe(null)
    })
    it('renders 4 rects', () => {
      const {getAllByTestId} = render(<DetailWithTheme/>)
      expect(getAllByTestId('styled-rect').length).toBe(4)
    })
    it('accepts theme fill', () => {
      const {getAllByTestId} = render(<DetailWithTheme/>)
      expect(getAllByTestId('styled-rect')[0]).toHaveStyle(`
        fill:${theme.colors.accent};
      `)
    })
  })
})