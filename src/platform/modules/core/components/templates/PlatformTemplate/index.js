import DefaultTemplate from '../../../../../../core/components/templates/DefaultTemplate';
import Icon from '../../../../../../core/components/dataDisplay/Icon';
import { Button, Stack, useTheme } from '@mui/material';
import { useMemo } from 'react';
import CORE_TEXTS from '../../../constants/texts';
import useLogoutService from '../../../../auth/services/useLogoutService';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';

function PlatformTemplate({ children }) {
  const theme = useTheme();
  const { logout } = useLogoutService();
  const { translate } = useLocale();
  const logoutButton = useMemo(() => {
    return (
      <Button sx={{ color: theme.palette.common.white }} onClick={logout}>
        {translate(CORE_TEXTS.LOGOUT)}
      </Button>
    );
  }, [logout, translate, theme]);
  return (
    <DefaultTemplate
      rightHeaderContent={logoutButton}
      leftHeaderContent={
        <Icon color={theme.palette.primary.contrastText} size={'2rem'}>
          work
        </Icon>
      }
    >
      <Stack width={1} height={1}>
        {children}
      </Stack>
    </DefaultTemplate>
  );
}

export default PlatformTemplate;
