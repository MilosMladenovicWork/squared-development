import React from 'react'

import CurvedBackground from '../../components/Illustrations/CurvedBackground.js'

export default {
  title: 'Illustrations/CurvedBackground',
  component: CurvedBackground,
  argTypes:{
    fillColor: {control: {
      type: 'select',
      options: [
        'primary',
        'accent'
      ]
    }},
    hideBottom:'boolean',
    hideTop:'boolean',
    topVariant:{
      control:{
        type:'select',
        options:[
          0,
          1
        ]
      }
    }
  }
}

const Template = (args) => <CurvedBackground {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  fillColor: 'primary' 
}