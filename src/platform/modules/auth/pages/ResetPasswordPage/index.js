import { Grid, Stack, Typography } from '@mui/material';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';
import authPaths from '../../routes/paths';

import useResetPasswordService from '../../services/useResetPasswordService';
import useLocation from '../../../core/hooks/useLocation';
import ResetPasswordForm from '../../forms/ResetPasswordForm';
import useService from '../../../core/hooks/useService';
import Link from '../../../core/components/navigation/Link';

function ResetPasswordPage() {
  const { translate } = useLocale();
  const { resetPassword } = useResetPasswordService();
  const { queryParams } = useLocation();

  const { loading, runService } = useService({ service: resetPassword });

  const handleSubmit = useCallback(
    async (data) => {
      const { password } = data;
      const { token } = queryParams;
      await runService({ password, token });
    },
    [runService, queryParams]
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          {translate(AUTH_TEXTS.RESET_PASSWORD_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ResetPasswordForm
          onSubmit={handleSubmit}
          submitDisabled={loading}
        ></ResetPasswordForm>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems="flex-end">
          <Link to={authPaths.login}>
            {translate(AUTH_TEXTS.RESET_PASSWORD_PAGE_GO_LOGIN)}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ResetPasswordPage;
