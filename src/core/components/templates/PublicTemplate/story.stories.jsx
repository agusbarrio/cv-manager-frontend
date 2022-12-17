import PublicTemplate from './index';

export default {
  title: 'Core/Components/Templates/PublicTemplate',
  component: PublicTemplate,
  argTypes: {},
};

function Template(args) {
  return <PublicTemplate {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  children: <div>Children</div>,
  sxHeader: { backgroundColor: 'blue' },
  sxChildren: { backgroundColor: 'green' },
};
