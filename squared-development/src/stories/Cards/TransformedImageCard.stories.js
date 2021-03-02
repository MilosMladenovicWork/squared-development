import React from 'react'

import TransformedImageCard from '../../components/Cards/TransformedImageCard'
import image from '../../images/Perun.png'

export default {
  title: 'Cards/TransformedImageCard',
  component: TransformedImageCard,
  argTypes:{
    title:{
      control:'text'
    },
    description:{
      control: 'text'
    },
    buttonText:{
      control: 'text'
    },
    buttonLink:{
      control: 'text'
    },
    reverse: {
      control: 'boolean'
    }
  }
}

const Template = (args) => <TransformedImageCard {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  image:image,
  title:'Project title',
  description:'Project Description',
  buttonText:'Button text',
  buttonLink:'https://google.com'
}