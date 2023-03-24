import { Stack, Typography } from '@mui/material';
import CORE_TEXTS from '../../constants/texts';

import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import corePaths from '../../routes/paths';
import Link from '../../components/navigation/Link';

function Error404Page() {
  const { translate } = useLocale();
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography variant="h3" component="h1" textAlign="center">
        {translate(CORE_TEXTS.ERROR_404_TITLE)}
      </Typography>
      <Link to={corePaths.raiz}>{translate(CORE_TEXTS.GO_RAIZ)}</Link>
    </Stack>
  );
}
export default Error404Page;
