import React from 'react'

import perunProject from '../images/Perun.png'
import ReferencesSlider from '../components/ReferencesSlider'

export default {
  title: 'Components/References Slider',
  component: ReferencesSlider
}

const Template = (args) => <ReferencesSlider {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  setImageToParent: () => console.log('image sent to parent'),
  data:[
    {
      title: 'Mahamud Hassan',
      text: 'Definetely top notch! Looking forward to the next project!',
      button: 'Perun',
      buttonLink: 'https://perun.network',
      projectImg: perunProject
    },
  ]
}