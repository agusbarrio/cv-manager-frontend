import { Grid, Stack, Typography } from '@mui/material';
import RegisterForm from '../../forms/RegisterForm';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';
import Link from '../../../../../core/components/navigation/Link';
import authPaths from '../../routes/paths';
import useRegisterService from '../../services/useRegisterService';
function RegisterPage() {
  const { translate } = useLocale();
  const { register } = useRegisterService();
  const handleSubmit = useCallback(
    async (data) => {
      await register({ email: data?.email, password: data?.password });
    },
    [register]
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          {translate(AUTH_TEXTS.REGISTER_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm onSubmit={handleSubmit}></RegisterForm>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems="flex-end">
          <Link href={authPaths.login}>
            {translate(AUTH_TEXTS.REGISTER_PAGE_GO_LOGIN)}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
