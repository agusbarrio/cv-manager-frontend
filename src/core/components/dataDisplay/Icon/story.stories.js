import Icon from './index';

export default {
  title: 'Core/Components/DataDisplay/Icon',
  component: Icon,
  argTypes: {},
};

function Template(args) {
  return <Icon {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  color: '#f00',
  children: 'work',
};
export const Example2 = Template.bind({});
Example2.args = {
  color: 'primary',
  children: 'work',
};
