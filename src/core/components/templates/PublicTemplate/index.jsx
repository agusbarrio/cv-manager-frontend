import { Stack, useTheme } from '@mui/material';
import Icon from '../../dataDisplay/Icon';

import PublicLayout from '../../layouts/PublicLayout';
import PropTypes from 'prop-types';
import useDevice from '../../../hooks/useDevice';
function PublicTemplate({ children }) {
  const theme = useTheme();
  const { isMobile } = useDevice();
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
            <Icon
              color={theme.palette.primary.contrastText}
              size={isMobile ? '2rem' : '5rem'}
            >
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
    </PublicLayout>
  );
}

PublicTemplate.propTypes = {
  children: PropTypes.any,
};

export default PublicTemplate;
