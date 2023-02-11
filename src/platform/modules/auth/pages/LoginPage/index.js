import { Grid, Stack, Typography } from '@mui/material';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';
import LoginForm from '../../forms/LoginForm';
import authPaths from '../../routes/paths';
import Link from '../../../../../core/components/navigation/Link';
import useLoginService from '../../services/useLoginService';
import useService from '../../../core/hooks/useService';
function LoginPage() {
  const { translate } = useLocale();
  const { login } = useLoginService();
  const { loading, runService } = useService({ service: login });

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
          {translate(AUTH_TEXTS.LOGIN_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <LoginForm onSubmit={handleSubmit} submitDisabled={loading}></LoginForm>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems="flex-end">
          <Link href={authPaths.recover}>
            {translate(AUTH_TEXTS.LOGIN_PAGE_GO_RECOVER_PASSWORD)}
          </Link>
          <Link href={authPaths.register}>
            {translate(AUTH_TEXTS.LOGIN_PAGE_GO_REGISTER)}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
