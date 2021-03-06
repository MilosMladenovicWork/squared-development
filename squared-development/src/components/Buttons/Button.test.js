import React from "react"
import { render } from "@testing-library/react"
import Button from "./Button"
import { theme } from "../../styles/styles"

import { ThemeProvider } from "styled-components"

describe("Button", () => {
  const ButtonWithTheme = ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>
  )

  it("renders", () => {
    const { getByTestId } = render(<ButtonWithTheme />)
    expect(getByTestId("button")).not.toBeNull()
  })

  it("accepts and sets children", () => {
    const { getByTestId } = render(<ButtonWithTheme children="button" />)
    expect(getByTestId("button")).toHaveTextContent("button")
  })

  it("changes styles based on props", () => {
    const { getByTestId } = render(<ButtonWithTheme secondary />)
    expect(getByTestId("button")).toHaveStyle(`
    border-color:${theme.colors.primary};
    color:${theme.colors.textDark};
    `)
  })

  it("renders secondary button styles", () => {
    const { getByTestId } = render(<ButtonWithTheme secondary />)
    expect(getByTestId("button")).toHaveStyle(`
        border-color:${theme.colors.primary}
      `)
  })

  it("renders clipped styles", () => {
    const { getByTestId } = render(<ButtonWithTheme clipped />)
    expect(getByTestId("button")).toHaveStyle(`
        clip-path: polygon(1.5em 0%,100% 0%,calc(100% - 1.5em) 100%,0% 100%);
      `)
  })

  it("renders link styles", () => {
    const { getByTestId } = render(<ButtonWithTheme link />)
    expect(getByTestId("button")).toHaveStyle(`
        background:transparent;
        border-color:transparent;
      `)
  })
})
