import Tabs from '.';

export default {
  title: 'Core/Components/Navigation/Tabs',
  component: Tabs,
  argTypes: {},
};

function Template(args) {
  return <Tabs {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  tabs: [
    { label: 'Tab label 0', render: () => <div>Tab 0</div> },
    { label: 'Tab label 1', render: () => <div>Tab 1</div> },
    { label: 'Tab label 2', render: () => <div>Tab 2</div> },
    { label: 'Tab label 3', render: () => <div>Tab 3</div> },
  ],
};
