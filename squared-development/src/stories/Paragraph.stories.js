import React from "react"

import Paragraph from "../components/Paragraph"

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  argTypes: {
    children: { control: "text" },
    display: { control: "boolean" },
    alignment: {
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
    halfWidth: { control: "boolean" },
  },
}

const Template = args => <Paragraph {...args} />

export const Text = Template.bind({})
Text.args = {
  children: "Paragraph",
  display: false,
}
