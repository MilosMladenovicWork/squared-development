import React from "react"

import TextInput from "../../components/Inputs/TextInput"

export default {
  title: "Inputs/TextInput",
  component: TextInput,
  argTypes: {
    name: {
      control: "text",
    },
    value: {
      control: "text",
    },
    onChange: {
      action: "changed",
    },
    placeholder: {
      control: "text",
    },
    textColor: {
      control: {
        type: "select",
        options: ["textLight", "textDark"],
      },
    },
  },
}

const Template = args => <TextInput {...args} />

export const Primary = Template.bind({})

Primary.args = {
  name: "inputName",
  placeholder: "Placeholder",
}
