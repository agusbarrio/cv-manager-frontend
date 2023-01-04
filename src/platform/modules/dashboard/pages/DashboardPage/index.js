import { Button, Stack, Typography } from '@mui/material';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import useLogoutService from '../../../auth/services/useLogoutService';
import DASHBOARD_TEXTS from '../../constants/texts';

function DashboardPage() {
  const { translate } = useLocale();
  const { logout } = useLogoutService();
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography variant="h3" component="h1" textAlign="center">
        {translate(DASHBOARD_TEXTS.DASHBOARD_TITLE)}
      </Typography>
      <Button variant="contained" onClick={logout}>
        {translate(DASHBOARD_TEXTS.LOGOUT_BUTTON)}
      </Button>
    </Stack>
  );
}

export default DashboardPage;
