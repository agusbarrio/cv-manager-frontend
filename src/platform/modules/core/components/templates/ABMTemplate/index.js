import Icon from '../../../../../../core/components/dataDisplay/Icon';
import { Box, Button, Stack } from '@mui/material';
import CORE_TEXTS from '../../../constants/texts';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import { useMemo, useRef } from 'react';

function ABMTemplate({
  children,
  onClickAdd,
  onClickDeleteAll,
  columnWidth = '17.5rem',
}) {
  const { translate } = useLocale();
  const controllsRef = useRef(null);
  const controllsHeight = useMemo(() => {
    console.log();
    return !!controllsRef?.current
      ? controllsRef.current.getBoundingClientRect().height
      : 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controllsRef?.current]);

  return (
    <Stack height={1}>
      <Stack direction="row" spacing={2} padding={1} ref={controllsRef}>
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
      <Box
        justifyContent={'center'}
        height={`calc(100% - ${controllsHeight}px)`}
        p={1}
        sx={{ overflowY: 'scroll' }}
        display="grid"
        gridTemplateColumns={`repeat(auto-fill, ${columnWidth})`}
        gridAutoRows="min-content"
        gap={1}
      >
        {children}
      </Box>
    </Stack>
  );
}

export default ABMTemplate;
