import React from 'react'

import CurvedBackground from '../../components/Illustrations/CurvedBackground.js'

export default {
  title: 'Components/CurvedBackground',
  component: CurvedBackground,
  argTypes:{
    fillColor: {control: {
      type: 'select',
      options: [
        'primary',
        'accent'
      ]
    }}
  }
}

const Template = (args) => <CurvedBackground {...args}/>

export const FilledCurvedBackground = Template.bind({})
FilledCurvedBackground.args = {
  fillColor: 'primary' 
}