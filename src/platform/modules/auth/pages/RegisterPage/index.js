import { Grid, Stack, Typography } from '@mui/material';
import RegisterForm from '../../forms/RegisterForm';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';

import authPaths from '../../routes/paths';
import useRegisterService from '../../services/useRegisterService';
import useService from '../../../core/hooks/useService';
import Link from '../../../core/components/navigation/Link';
function RegisterPage() {
  const { translate } = useLocale();
  const { register } = useRegisterService();
  const { loading, runService } = useService({ service: register });

  const handleSubmit = useCallback(
    async (data) => {
      await runService({ email: data?.email, password: data?.password });
    },
    [runService]
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          {translate(AUTH_TEXTS.REGISTER_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm
          onSubmit={handleSubmit}
          submitDisabled={loading}
        ></RegisterForm>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems="flex-end">
          <Link to={authPaths.login}>
            {translate(AUTH_TEXTS.REGISTER_PAGE_GO_LOGIN)}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
