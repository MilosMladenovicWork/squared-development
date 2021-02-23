import React from 'react'

import Heading from '../components/Heading'

export default {
  title: 'Components/Heading',
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
    children:{control:'text'},
    alignment:{
      control:{
        type:'select',
        options:[
          'left',
          'right',
          'center'
        ]
      }
    },
    accent:{
      control:'boolean'
    }
  }
}

const Template = (args) => <Heading {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  as:'h1',
  children: 'Heading'
}