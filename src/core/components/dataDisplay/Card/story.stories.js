import Card from './index';

export default {
  title: 'Core/Components/DataDisplay/Card',
  component: Card,
  argTypes: {},
};

function Template(args) {
  return <Card {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  title: 'Title',
  children: 'content',
};
