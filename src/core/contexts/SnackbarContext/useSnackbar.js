import { useTheme } from '@mui/material';
import { useSnackbar as useSnackbarNotistack } from 'notistack';
import { useCallback } from 'react';
import ButtonIcon from '../../components/inputs/ButtonIcon';

function useSnackbar() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbarNotistack();
  const theme = useTheme();
  const autoHideDuration = 5000;
  const CloseButton = useCallback(
    ({ iconColor, onClick }) => (
      <ButtonIcon onClick={onClick} iconProps={{ color: iconColor }}>
        close
      </ButtonIcon>
    ),
    []
  );

  const getCloseAction = useCallback(
    (iconColor) => (key) =>
      (
        <CloseButton
          iconColor={iconColor}
          onClick={() => closeSnackbar(key)}
        ></CloseButton>
      ),
    [closeSnackbar]
  );
  const success = useCallback(
    (message, config) => {
      const defaultConfig = {
        action: getCloseAction(theme.palette.success.contrastText),
        variant: 'success',
        preventDuplicate: true,
        autoHideDuration,
      };
      enqueueSnackbar(message, { ...defaultConfig, ...config });
    },
    [
      enqueueSnackbar,
      autoHideDuration,
      getCloseAction,
      theme.palette.success.contrastText,
    ]
  );
  const warning = useCallback(
    (message, config) => {
      const defaultConfig = {
        action: getCloseAction(theme.palette.warning.contrastText),
        variant: 'warning',
        preventDuplicate: true,
        autoHideDuration,
      };
      enqueueSnackbar(message, { ...defaultConfig, ...config });
    },
    [
      enqueueSnackbar,
      autoHideDuration,
      getCloseAction,
      theme.palette.warning.contrastText,
    ]
  );
  const info = useCallback(
    (message, config) => {
      const defaultConfig = {
        action: getCloseAction(theme.palette.info.contrastText),
        variant: 'info',
        preventDuplicate: true,
        autoHideDuration,
      };
      enqueueSnackbar(message, { ...defaultConfig, ...config });
    },
    [
      enqueueSnackbar,
      autoHideDuration,
      getCloseAction,
      theme.palette.info.contrastText,
    ]
  );
  const error = useCallback(
    (message, config) => {
      const defaultConfig = {
        action: getCloseAction(theme.palette.info.contrastText),
        variant: 'error',
        preventDuplicate: true,
        autoHideDuration,
      };
      enqueueSnackbar(message, { ...defaultConfig, ...config });
    },
    [
      enqueueSnackbar,
      autoHideDuration,
      getCloseAction,
      theme.palette.info.contrastText,
    ]
  );

  return { enqueueSnackbar, closeSnackbar, success, warning, info, error };
}

export default useSnackbar;
