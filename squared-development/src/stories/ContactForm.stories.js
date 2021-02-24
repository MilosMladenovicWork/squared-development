import React from 'react'

import ContactForm from '../components/ContactForm'

export default {
  title:'Components/ContactForm',
  component: ContactForm,
}

const Template = (args) => <ContactForm {...args}/>

export const Primary = Template.bind({})