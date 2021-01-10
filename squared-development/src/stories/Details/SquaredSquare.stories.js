import React from 'react'

import SquaredSquare from '../../components/Details/SquaredSquare'

export default {
  title: 'Components/Details',
  component: SquaredSquare,
  argTypes:{
    alignment:{control:{
      type: 'select',
        options: [
          'left', 
          'center', 
          'right'
        ],
    }}
  }
}

const Template = (args) => <SquaredSquare {...args}/>

export const AccentSquare = Template.bind({})
AccentSquare.args = {
  alignment:'center'
}