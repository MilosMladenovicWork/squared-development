import React from 'react'

import ImageCoverCard from '../../components/Cards/ImageCoverCard'
import projectImgDesktop from '../../images/Perun.png'
import projectImgMobile from '../../images/mobile-project.png'

export default {
  title: 'Cards/ImageCoverCard',
  component: ImageCoverCard,
  argTypes:{
    mobile:{control:'boolean'},
    description: {control:'text'},
    title:{control:'text'},
    projectImg:{control:{
      type:'select',
      options:{
        projectImgMobile,
        projectImgDesktop
      }
    }}
  }
}

const Template = (args) => <ImageCoverCard {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  mobile: true,
  projectImg: projectImgMobile,
  description: 'Description',
  title: 'Title'
}