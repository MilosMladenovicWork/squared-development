import React from 'react'

import PeopleOutside from '../../components/Illustrations/PeopleOutside'

export default {
  title: 'Illustrations/PeopleOutside',
  component: PeopleOutside,
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

const Template = (args) => <PeopleOutside {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  fillColor:'accent'
}