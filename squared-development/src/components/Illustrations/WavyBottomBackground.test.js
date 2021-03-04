import React from "react"
import { render, fireEvent } from "@testing-library/react"
import WavyBottomBackground from "./WavyBottomBackground"
import { theme } from "../../styles/styles"

import { ThemeProvider } from "styled-components"

describe("WavyBottomBackground", () => {
  const WavyBottomBackgroundWithTheme = ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <WavyBottomBackground {...props} />
    </ThemeProvider>
  )
  it("renders", () => {
    const { getByTestId } = render(<WavyBottomBackgroundWithTheme />)
    expect(getByTestId("wavy-bottom-background")).not.toBe(null)
  })
  describe("IllustrationBody", () => {
    it("accepts fillColor prop - valid", () => {
      const { getByTestId } = render(
        <WavyBottomBackgroundWithTheme fillColor="accent" />
      )
      expect(getByTestId("illustration-body")).toHaveStyle(`
        background:${theme.colors["accent"]};
      `)
    })
    it("accepts fillColor prop - invalid", () => {
      const { getByTestId } = render(
        <WavyBottomBackgroundWithTheme fillColor="something" />
      )
      expect(getByTestId("illustration-body")).toHaveStyle(`
        background:${theme.colors["primary"]};
      `)
    })
    it("background is default colored without passed fillColor prop", () => {
      const { getByTestId } = render(<WavyBottomBackgroundWithTheme />)
      expect(getByTestId("illustration-body")).toHaveStyle(`
        background:${theme.colors["primary"]};
      `)
    })
  })
  describe("StyledPath", () => {
    it("accepts fillColor prop - valid", () => {
      const { getByTestId } = render(
        <WavyBottomBackgroundWithTheme fillColor="accent" />
      )
      expect(getByTestId("path")).toHaveStyle(`
        fill:${theme.colors["accent"]};
      `)
    })
    it("accepts fillColor prop - invalid", () => {
      const { getByTestId } = render(
        <WavyBottomBackgroundWithTheme fillColor="something" />
      )
      expect(getByTestId("path")).toHaveStyle(`
        fill:${theme.colors["primary"]};
      `)
    })
    it("background is default colored without passed fillColor prop", () => {
      const { getByTestId } = render(<WavyBottomBackgroundWithTheme />)
      expect(getByTestId("path")).toHaveStyle(`
        fill:${theme.colors["primary"]};
      `)
    })
  })
})
