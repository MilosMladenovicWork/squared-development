import React from "react"

import DeveloperMakingSite from "../../components/Illustrations/DeveloperMakingSite"

export default {
  title: "Illustrations/DeveloperMakingSite",
  component: DeveloperMakingSite,
  argTypes: {
    fillColor: {
      control: {
        type: "select",
        options: ["primary", "accent"],
      },
    },
  },
}

const Template = args => <DeveloperMakingSite {...args} />

export const Primary = Template.bind({})
Primary.args = {
  fillColor: "primary",
}
