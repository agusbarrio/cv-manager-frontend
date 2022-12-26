import ButtonIcon from './index';

export default {
  title: 'Core/Components/Inputs/ButtonIcon',
  component: ButtonIcon,
  argTypes: {},
};

function Template(args) {
  return <ButtonIcon {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  color: '#f00',
  iconProps: {
    color: 'primary',
  },
  children: 'work',
};
