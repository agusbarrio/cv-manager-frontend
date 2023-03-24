import { Grid, Stack, Typography } from '@mui/material';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';
import RecoverPasswordForm from '../../forms/RecoverPasswordForm';
import authPaths from '../../routes/paths';

import useRequestPasswordRecoveryService from '../../services/useRequestPasswordRecoveryService';
import useService from '../../../core/hooks/useService';
import Link from '../../../core/components/navigation/Link';

function RecoverPasswordPage() {
  const { translate } = useLocale();
  const { requestPasswordRecovery } = useRequestPasswordRecoveryService();
  const { loading, runService } = useService({
    service: requestPasswordRecovery,
  });

  const handleSubmit = useCallback(
    async (data) => {
      const { email } = data;
      await runService({ email });
    },
    [runService]
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          {translate(AUTH_TEXTS.RECOVER_PASSWORD_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="p">
          {translate(AUTH_TEXTS.RECOVER_PASSWORD_PAGE_DESCRIPTION)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RecoverPasswordForm
          onSubmit={handleSubmit}
          submitDisabled={loading}
        ></RecoverPasswordForm>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems="flex-end">
          <Link to={authPaths.login}>
            {translate(AUTH_TEXTS.RECOVER_PAGE_GO_LOGIN)}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default RecoverPasswordPage;
