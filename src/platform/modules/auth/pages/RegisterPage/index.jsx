import { Grid, Typography } from '@mui/material';
import RegisterForm from '../../forms/RegisterForm';

function RegisterPage() {
  console.log(process.env);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1">
          Register
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm></RegisterForm>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
