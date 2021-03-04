import React from "react"

import TextareaInput from "../../components/Inputs/TextareaInput"

export default {
  title: "Inputs/TextareaInput",
  component: TextareaInput,
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

const Template = args => <TextareaInput {...args} />

export const Primary = Template.bind({})

Primary.args = {
  name: "inputName",
  placeholder: "Placeholder",
}
