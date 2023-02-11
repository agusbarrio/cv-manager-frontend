import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as DialogMaterial,
  DialogActions,
  Button,
  Divider,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import useDialog from '../../../contexts/DialogContext/useDialog';
import _ from 'lodash';

function ConfirmDialog({
  children,
  onClose,
  onConfirm,
  confirmButtonProps = {
    children: 'Confirm',
  },
  closeButtonProps = {
    children: 'Close',
  },
  textContent,
  title,
  open = false,
  maxWidth = 'sm',
  ...props
}) {
  const { closeDialog } = useDialog();

  const handleClose = useCallback(() => {
    if (_.isFunction(onClose)) onClose();
    closeDialog();
  }, [closeDialog, onClose]);

  const handleConfirm = useCallback(() => {
    if (_.isFunction(onConfirm)) onConfirm();
  }, [onConfirm]);

  return (
    <DialogMaterial
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={true}
      {...props}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <Divider></Divider>
      <DialogContent>
        {textContent && <DialogContentText>{textContent}</DialogContentText>}
        {children}
      </DialogContent>
      <Divider></Divider>
      <DialogActions>
        <Button onClick={handleClose} {...closeButtonProps}>
          {closeButtonProps.children}
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          {...confirmButtonProps}
        >
          {confirmButtonProps.children}
        </Button>
      </DialogActions>
    </DialogMaterial>
  );
}

ConfirmDialog.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  closeButtonText: PropTypes.string,
  confirmButtonText: PropTypes.string,
  textContent: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'md']),
};

export default ConfirmDialog;
