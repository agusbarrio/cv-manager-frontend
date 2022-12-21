import PublicLayout from './index';

export default {
  title: 'Core/Components/Layouts/DefaultFormLayout',
  component: PublicLayout,
  argTypes: {},
};

function Template(args) {
  return <PublicLayout {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  header: (
    <div style={{ backgroundColor: '#f00', width: '100%', height: '100%' }}>
      Title
    </div>
  ),
  children: (
    <div style={{ backgroundColor: '#0f0', width: '100%', height: '100%' }}>
      Children
    </div>
  ),
  actions: (
    <>
      <div>1</div>
      <br />
      <div>2</div>
      <br />
      <div>2</div>
    </>
  ),
};
