import React from 'react'

import PeopleOutside from '../../components/Illustrations/PeopleOutside'

export default {
  title: 'Components/Illustrations',
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

export const PeopleOutsideIllustration = Template.bind({})
PeopleOutsideIllustration.args = {
  fillColor:'accent'
}