import { Typography } from '@mui/material';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../constants/texts';

function DashboardPage() {
  const { translate } = useLocale();

  return (
    <Typography variant="h3" component="h1" textAlign="center">
      {translate(DASHBOARD_TEXTS.DASHBOARD_TITLE)}
    </Typography>
  );
}

export default DashboardPage;
