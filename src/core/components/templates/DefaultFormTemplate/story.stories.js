import { Grid } from '@mui/material';
import DefaultFormTemplate from './index';

export default {
  title: 'Core/Components/Templates/DefaultFormTemplate',
  component: DefaultFormTemplate,
  argTypes: {},
};

function Template(args) {
  return <DefaultFormTemplate {...args} />;
}

export const Example = Template.bind({});
Example.args = {
  children: (
    <>
      <Grid item xs={12}>
        Children 1
      </Grid>
      <Grid item xs={12}>
        Children 2
      </Grid>
      <Grid item xs={12}>
        Children 3
      </Grid>
    </>
  ),
  title: 'Title',
};
