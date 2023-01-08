import TextInput from './index';

export default {
  title: 'Core/Components/Inputs/TextInput',
  component: TextInput,
  argTypes: {},
};

function Template(args) {
  return <TextInput {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  label: 'Label',
};
export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  errorMessage: 'Error message',
};
