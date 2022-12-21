import { useMediaQuery, useTheme } from '@mui/material';

function useDevice() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return { isMobile };
}

export default useDevice;
