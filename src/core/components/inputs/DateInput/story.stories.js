import DateInput from './index';

export default {
  title: 'Core/Components/Inputs/DateInput',
  component: DateInput,
  argTypes: {},
};

function Template(args) {
  return <DateInput {...args} onChange={() => { }} />;
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
