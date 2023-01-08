import PasswordInput from './index';

export default {
  title: 'Core/Components/Inputs/PasswordInput',
  component: PasswordInput,
  argTypes: {},
};

function Template(args) {
  return <PasswordInput {...args} />;
}

export const Example = Template.bind({});
Example.args = {};
