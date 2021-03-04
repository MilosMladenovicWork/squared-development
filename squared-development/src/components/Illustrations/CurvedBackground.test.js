import React from "react"
import { render } from "@testing-library/react"
import CurvedBackground from "./CurvedBackground"
import { theme } from "../../styles/styles"

import { ThemeProvider } from "styled-components"

describe("CurvedBackground", () => {
  const CurvedBackgroundWithTheme = ({ ...props }) => (
    <ThemeProvider theme={theme}>
      <CurvedBackground {...props} />
    </ThemeProvider>
  )

  it("renders", () => {
    const { getByTestId } = render(<CurvedBackgroundWithTheme />)
    expect(getByTestId("illustration-container")).not.toBe(null)
  })

  describe("StyledPath", () => {
    it("renders", () => {
      const { getAllByTestId } = render(<CurvedBackgroundWithTheme />)
      expect(getAllByTestId("styled-path")).not.toBe(null)
    })

    it("renders 2 StyledPaths", () => {
      const { getAllByTestId } = render(<CurvedBackgroundWithTheme />)
      expect(getAllByTestId("styled-path").length).toBe(2)
    })

    it("accepts fillColor prop", () => {
      const { getAllByTestId } = render(
        <CurvedBackgroundWithTheme fillColor="accent" />
      )
      expect(getAllByTestId("styled-path")[0]).toHaveStyle(`
        fill: ${theme.colors["accent"]}
      `)
      expect(getAllByTestId("styled-path")[1]).toHaveStyle(`
        fill: ${theme.colors["accent"]}
      `)
    })
  })

  describe("IllustrationBody", () => {
    it("renders", () => {
      const { getByTestId } = render(<CurvedBackgroundWithTheme />)
      expect(getByTestId("illustration-body")).not.toBe(null)
    })

    it("accepts fillColor prop", () => {
      const { getByTestId } = render(
        <CurvedBackgroundWithTheme fill="textDark" />
      )
      expect(getByTestId("illustration-body")).toHaveStyle(`
        background-color:${theme.colors["textDark"]};
      `)
    })
  })
})
