import PublicLayout from './index';

export default {
  title: 'Core/Components/Layouts/DefaultLayout',
  component: PublicLayout,
  argTypes: {},
};

function Template(args) {
  return <PublicLayout {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  header: (
    <div
      style={{ backgroundColor: '#f00', width: '100%', height: '100%' }}
    ></div>
  ),
  children: (
    <div
      style={{ backgroundColor: '#0f0', width: '100%', height: '100%' }}
    ></div>
  ),
};
