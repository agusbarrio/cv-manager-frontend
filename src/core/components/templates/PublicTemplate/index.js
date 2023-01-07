import { Stack, useTheme } from '@mui/material';
import PublicLayout from '../../layouts/PublicLayout';
import PropTypes from 'prop-types';

function PublicTemplate({ children, headerContent }) {
  const theme = useTheme();
  return (
    <PublicLayout
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
            {headerContent}
          </Stack>
        </Stack>
      }
      sxHeader={{ backgroundColor: theme.palette.primary.main }}
      sxChildren={{
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      {children}
    </PublicLayout>
  );
}

PublicTemplate.propTypes = {
  children: PropTypes.any,
};

export default PublicTemplate;
