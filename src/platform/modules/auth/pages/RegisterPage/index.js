import { Grid, Typography } from '@mui/material';
import RegisterForm from '../../forms/RegisterForm';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import { useCallback } from 'react';
function RegisterPage() {
  const { translate } = useLocale();
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          {translate(AUTH_TEXTS.REGISTER_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm onSubmit={handleSubmit}></RegisterForm>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
