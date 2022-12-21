import { Stack, Typography, Button, Grid } from '@mui/material';
import DefaultFormLayout from '../../layouts/DefaultFormLayout';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

function DefaultFormTemplate({ children, title, submitButtonProps }) {
  const actions = useMemo(
    () => (
      <Button type="submit" variant="contained" {...submitButtonProps}>
        {submitButtonProps?.children || 'Submit'}
      </Button>
    ),
    [submitButtonProps]
  );
  return (
    <DefaultFormLayout
      containerProps={{ spacing: 2 }}
      header={
        !!title ? (
          <Stack direction="row" alignItems="center" width="100%">
            <Typography variant="h4">{title}</Typography>
          </Stack>
        ) : null
      }
      actions={actions}
      actionsProps={{
        justifyContent: 'flex-end',
      }}
    >
      <Grid container spacing={2}>
        {children}
      </Grid>
    </DefaultFormLayout>
  );
}

DefaultFormTemplate.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  submitButtonProps: PropTypes.object,
};

export default DefaultFormTemplate;
