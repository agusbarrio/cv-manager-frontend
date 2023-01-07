import { Box, Stack } from '@mui/material';
import { useMemo } from 'react';
import useDevice from '../../../hooks/useDevice';
import PropTypes from 'prop-types';

function PublicLayout({ header, sxHeader = {}, sxChildren = {}, children }) {
  const { isMobile } = useDevice();
  const containerProps = useMemo(
    () => ({
      height: '100vh',
      width: '100vw',
      direction: isMobile ? 'column' : 'row',
    }),
    [isMobile]
  );

  const headerSx = useMemo(
    () => ({
      width: isMobile ? '100%' : '50%',
      height: isMobile ? '4rem' : '100%',
      ...sxHeader,
    }),
    [isMobile, sxHeader]
  );

  const childrenSx = useMemo(
    () => ({
      width: isMobile ? '100%' : '50%',
      height: isMobile ? 'calc(100% - 4rem)' : '100%',
      flexGrow: isMobile ? 0 : 1,
      ...sxChildren,
    }),
    [isMobile, sxChildren]
  );
  return (
    <Stack {...containerProps}>
      <Box sx={headerSx}>{header}</Box>
      <Box sx={childrenSx}>{children}</Box>
    </Stack>
  );
}

PublicLayout.propTypes = {
  header: PropTypes.any,
  sxHeader: PropTypes.object,
  sxChildren: PropTypes.object,
  children: PropTypes.any,
};
export default PublicLayout;
