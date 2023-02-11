import Icon from '../../../../../../core/components/dataDisplay/Icon';
import { Backdrop, Box, Button, CircularProgress, Stack } from '@mui/material';
import CORE_TEXTS from '../../../constants/texts';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import { useMemo, useRef } from 'react';

function ABMTemplate({
  children,
  loading,
  onClickAdd,
  onClickDeleteAll,
  columnWidth = '17.5rem',
  deleteAllButtonDisabled = false,
  addButtonDisabled = false,
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
            disabled={addButtonDisabled}
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
            disabled={deleteAllButtonDisabled}
          >
            {translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
          </Button>
        )}
      </Stack>
      <Box
        justifyContent={'center'}
        position="relative"
        height={`calc(100% - ${controllsHeight}px)`}
        p={1}
        sx={{ overflowY: 'scroll' }}
        display="grid"
        gridTemplateColumns={`repeat(auto-fill, ${columnWidth})`}
        gridAutoRows="min-content"
        gap={1}
      >
        <Backdrop
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
        >
          <CircularProgress></CircularProgress>
        </Backdrop>
        {children}
      </Box>
    </Stack>
  );
}

export default ABMTemplate;
