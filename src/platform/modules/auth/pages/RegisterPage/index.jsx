import { Grid, Typography } from '@mui/material';
import RegisterForm from '../../forms/RegisterForm';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
function RegisterPage() {
  const { translate } = useLocale();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          {translate(AUTH_TEXTS.REGISTER_PAGE_TITLE)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm></RegisterForm>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
