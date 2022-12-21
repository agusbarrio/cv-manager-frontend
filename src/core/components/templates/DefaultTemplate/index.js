import { Stack, useTheme } from '@mui/material';
import Icon from '../../dataDisplay/Icon';
import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';

function DefaultTemplate({ children }) {
  const theme = useTheme();
  return (
    <DefaultLayout
      header={
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Icon color={theme.palette.primary.contrastText} size={'2rem'}>
              work
            </Icon>
          </Stack>
        </Stack>
      }
      sxHeader={{ backgroundColor: theme.palette.primary.main }}
      sxChildren={{
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </DefaultLayout>
  );
}

DefaultTemplate.propTypes = {
  children: PropTypes.any,
};

export default DefaultTemplate;
