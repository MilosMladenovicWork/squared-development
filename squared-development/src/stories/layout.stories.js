import React from 'react'

import Layout from '../components/layout'

export default {
  title: 'Components/layout',
  component: Layout
}

const Template = (args) => <Layout {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  activeSection: {
    activeSectionId: '/#contact'
  }
}