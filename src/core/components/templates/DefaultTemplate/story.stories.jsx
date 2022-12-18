import DefaultTemplate from './index';

export default {
  title: 'Core/Components/Templates/DefaultTemplate',
  component: DefaultTemplate,
  argTypes: {},
};

function Template(args) {
  return <DefaultTemplate {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  children: <div>Children</div>,
  sxHeader: { backgroundColor: 'blue' },
  sxChildren: { backgroundColor: 'green' },
};
