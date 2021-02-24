import React from 'react'

import Footer from '../components/Footer'

export default {
  title: 'Components/Footer',
  component: Footer
}

const Template = (args) => <Footer {...args}/>

export const Primary = Template.bind({}) 
Primary.args = {
  activeSection: {
    activeSectionId: '/#contact',
    lastActiveSectionId: '/#contact'
  }
}