import Icon from '../../../../../../core/components/dataDisplay/Icon';
import { Box, Button, Divider, Stack } from '@mui/material';
import CORE_TEXTS from '../../../constants/texts';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';

function ABMTemplate({ children, onClickAdd, onClickDeleteAll }) {
  const { translate } = useLocale();
  return (
    <Stack spacing={1} height={1}>
      <Stack direction="row" spacing={2}>
        {onClickAdd && (
          <Button
            variant="contained"
            startIcon={<Icon>add</Icon>}
            onClick={onClickAdd}
          >
            {translate(CORE_TEXTS.GENERIC_ADD)}
          </Button>
        )}
        {onClickDeleteAll && (
          <Button
            variant="contained"
            startIcon={<Icon>delete</Icon>}
            color="error"
            onClick={onClickDeleteAll}
          >
            {translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
          </Button>
        )}
      </Stack>
      <Divider></Divider>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Stack>
  );
}

export default ABMTemplate;
