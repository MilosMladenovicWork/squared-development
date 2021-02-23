import React from 'react'

import IconCard from '../../components/Cards/IconCard'

export default {
  title: 'Cards/IconCard',
  component: IconCard,
  argTypes:{
    text:{
      control:'text'
    },
    title:{
      control:'text'
    },
    button:{
      control:'text'
    },
    buttonLink:{
      control:'text'
    }
  }
}

const Template = (args) => <IconCard {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  text:'Card text',
  title:'Card title',
  button: 'button',
  buttonLink: 'https://example.com'
}