import React from "react"

import Logo from "../components/Logo"

export default {
  title: "Components/Logo",
  component: Logo,
}

const Template = args => <Logo {...args} />

export const Primary = Template.bind({})
