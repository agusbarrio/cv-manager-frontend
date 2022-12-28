import { Grid, Stack, Typography } from '@mui/material';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';
import RecoverPasswordForm from '../../forms/RecoverPasswordForm';
import authPaths from '../../routes/paths';
import Link from '../../../../../core/components/navigation/Link';

function RecoverPasswordPage() {
  const { translate } = useLocale();
  const handleSubmit = useCallback((data) => {
    //TODO consumir servicio de recuperar contraseña
  }, []);
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
        <RecoverPasswordForm onSubmit={handleSubmit}></RecoverPasswordForm>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} alignItems="flex-end">
          <Link href={authPaths.login}>
            {translate(AUTH_TEXTS.RECOVER_PAGE_GO_LOGIN)}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default RecoverPasswordPage;
