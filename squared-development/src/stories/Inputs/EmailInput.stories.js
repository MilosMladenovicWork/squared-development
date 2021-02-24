import React from 'react'

import EmailInput from '../../components/Inputs/EmailInput'

export default {
  title:'Inputs/Email Input',
  component:EmailInput,
  argTypes:{
    name:{
      control:'text'
    },
    value:{
      control:'text'
    },
    onChange:{
      action:'changed'
    },
    placeholder:{
      control:'text'
    },
    textColor:{
      control:{
        type:'select',
        options:[
          'textLight',
          'textDark'
        ]
      }
    }
  }
}

const Template = (args) => <EmailInput {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  placeholder: 'Placeholder',
  name:'inputName'
}