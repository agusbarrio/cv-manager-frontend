import Link from '.';

export default {
  title: 'Core/Components/Navigation/Link',
  component: Link,
  argTypes: {},
};

function Template(args) {
  return <Link {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  href: '/',
  children: 'Link',
};
