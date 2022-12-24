import { Stack, Typography } from '@mui/material';
import CORE_TEXTS from '../../constants/texts';
import Link from '../../../../../core/components/navigation/Link';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import corePaths from '../../routes/paths';

function Error404Page() {
  const { translate } = useLocale();
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center">
      <Typography variant="h3" component="h1">
        {translate(CORE_TEXTS.ERROR_404_TITLE)}
      </Typography>
      <Link href={corePaths.raiz}>{translate(CORE_TEXTS.GO_RAIZ)}</Link>
    </Stack>
  );
}
export default Error404Page;
