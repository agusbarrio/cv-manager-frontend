import { Box, Stack } from '@mui/material';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

function DefaultLayout({ header, sxHeader = {}, sxChildren = {}, children }) {
  const containerProps = useMemo(
    () => ({
      height: '100vh',
      width: '100vw',
      direction: 'column',
    }),
    []
  );

  const headerSx = useMemo(
    () => ({
      width: '100%',
      height: '4rem',
      ...sxHeader,
    }),
    [sxHeader]
  );

  const childrenSx = useMemo(
    () => ({
      width: '100%',
      height: 'calc(100% - 4rem)',
      flexGrow: 0,
      ...sxChildren,
    }),
    [sxChildren]
  );
  return (
    <Stack {...containerProps}>
      <Box sx={headerSx}>{header}</Box>
      <Box sx={childrenSx}>{children}</Box>
    </Stack>
  );
}

DefaultLayout.propTypes = {
  header: PropTypes.any,
  sxHeader: PropTypes.object,
  sxChildren: PropTypes.object,
  children: PropTypes.any,
};
export default DefaultLayout;
