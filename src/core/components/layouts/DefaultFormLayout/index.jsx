import { Box, Stack } from '@mui/material';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

function DefaultFormLayout({
  header,
  sxHeader = {},
  childrenProps = {},
  children,
  containerProps = {},
  actions,
  actionsProps,
}) {
  const defaultContainerProps = useMemo(
    () => ({
      width: '100%',
      direction: 'column',
      ...containerProps,
    }),
    [containerProps]
  );

  const defaultChildrenProps = useMemo(
    () => ({
      width: '100%',
      ...childrenProps,
    }),
    [childrenProps]
  );
  const headerSx = useMemo(
    () => ({
      width: '100%',
      ...sxHeader,
    }),
    [sxHeader]
  );

  const defaultActionsProps = useMemo(
    () => ({
      width: '100%',
      direction: 'row',
      ...actionsProps,
    }),
    [actionsProps]
  );
  return (
    <Stack {...defaultContainerProps}>
      {!!header && <Box sx={headerSx}>{header}</Box>}
      <Stack {...defaultChildrenProps}>{children}</Stack>
      <Stack {...defaultActionsProps}>{actions}</Stack>
    </Stack>
  );
}

DefaultFormLayout.propTypes = {
  header: PropTypes.any,
  sxHeader: PropTypes.object,
  childrenProps: PropTypes.object,
  containerProps: PropTypes.object,
  children: PropTypes.any,
  actions: PropTypes.any,
  actionsProps: PropTypes.object,
};
export default DefaultFormLayout;
