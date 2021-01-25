import React from 'react'

import Detail from '../../components/Illustrations/Detail.js'

export default {
  title: 'Components/Illustrations',
  component: Detail,
  argTypes:{
    size: {control: 'number'},
    backwards: {control: 'boolean'},
    verticalPosition: {control: {
      type:'select',
      options:[
        'top',
        'bottom'
      ]
    }},
    horizontalPosition: {control: {
      type:'select',
      options:[
        'left',
        'right'
      ]
    }}
  }
}

const Template = (args) => <Detail {...args}/>

export const SectionDetail = Template.bind({})
SectionDetail.args = {
  verticalPosition:'top',
  horizontalPosition: 'left',
  size:10
}