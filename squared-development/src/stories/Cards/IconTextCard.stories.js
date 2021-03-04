import React from "react"

import IconTextCard from "../../components/Cards/IconTextCard"

export default {
  title: "Cards/IconTextCard",
  component: IconTextCard,
  argTypes: {
    heading: { control: "text" },
    text: { control: "text" },
  },
}

const Template = args => <IconTextCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  heading: "Heading",
  text: "Text",
}
