import React from "react"

import Header from "../components/Header"

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    menuClicked: "boolean",
  },
}

const Template = args => <Header {...args} />

export const Primary = Template.bind({})

Primary.args = {
  menuClicked: false,
  children: "",
}
