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
    { props: { label: 'Tab label 0' }, render: () => <div>Tab 0</div> },
    { props: { label: 'Tab label 1' }, render: () => <div>Tab 1</div> },
    { props: { label: 'Tab label 2' }, render: () => <div>Tab 2</div> },
    { props: { label: 'Tab label 3' }, render: () => <div>Tab 3</div> },
  ],
};
