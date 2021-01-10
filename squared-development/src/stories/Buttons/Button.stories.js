import React from 'react';
import {Link as GatsbyLink} from 'gatsby'

import Button from '../../components/Buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  secondary: true
};

export const Link = Template.bind({});
Link.args = {
  ...Primary.args,
  link: true,
  as: GatsbyLink,
  to:'#'
};

export const Clipped = Template.bind({});
Clipped.args = {
  ...Primary.args,
  clipped: true
};
