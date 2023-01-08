import { Stack, useTheme } from '@mui/material';
import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';

function DefaultTemplate({
  children,
  rightHeaderContent = [],
  leftHeaderContent = [],
  middleHeaderContent,
  sxHeader = {},
  sxChildren = {},
}) {
  const theme = useTheme();
  return (
    <DefaultLayout
      header={
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          paddingLeft={2}
          paddingRight={2}
        >
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {leftHeaderContent}
          </Stack>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {middleHeaderContent}
          </Stack>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {rightHeaderContent}
          </Stack>
        </Stack>
      }
      sxHeader={{ backgroundColor: theme.palette.primary.main, ...sxHeader }}
      sxChildren={{
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sxChildren,
      }}
    >
      {children}
    </DefaultLayout>
  );
}

DefaultTemplate.propTypes = {
  children: PropTypes.any,
  rightHeaderContent: PropTypes.any,
  leftHeaderContent: PropTypes.any,
  middleHeaderContent: PropTypes.any,
};

export default DefaultTemplate;
