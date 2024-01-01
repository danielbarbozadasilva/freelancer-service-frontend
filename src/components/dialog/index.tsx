import React, { ReactNode } from 'react';
import { Button, DialogTitle, Dialog, DialogActions } from '@material-ui/core';

interface DialogModalProps {
  open: boolean;
  close: () => void;
  title?: string;
  children?: ReactNode;
}

const DialogModal: React.FC<DialogModalProps> = ({ open, close, title, children }) => (
  <Dialog
    open={open}
    onClose={close}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
  >
    <DialogTitle id='alert-dialog-title'>{title || ''}</DialogTitle>

    {children}
    <DialogActions>
      <Button onClick={close} color='primary'>
        Fechar
      </Button>
    </DialogActions>
  </Dialog>
);

export default DialogModal;