import React from 'react'

import Heading from '../../components/Heading'

export default {
  title: 'Components/Headings',
  component:Heading,
  argTypes: {
    as:{
      control:{
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6'
        ],
    }
  },
    textColor:{
      control:{
        type: 'select',
        options: [
          'textDark',
          'textLight',
          'accent'
        ]
      }
    },
    children:{control:'text'}
  }
}

const Template = (args) => <Heading {...args}/>

export const TextHeading = Template.bind({})
TextHeading.args = {
  as:'h1',
  children: 'Heading'
}