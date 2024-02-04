import React from 'react';
import { Button, DialogTitle, Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { DialogModalProps } from './types';

const DialogModal: React.FC<DialogModalProps> = ({ open, close, title, remove }) => (
  <Dialog
    open={open}
    onClose={close}
    aria-labelledby='alert-dialog-title'
    aria-describedby='alert-dialog-description'
  >
    <DialogTitle id='alert-dialog-title'>{title || ''}</DialogTitle>

    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEnforceFocus
      >
        <DialogTitle id="alert-dialog-title">Excluir Serviço</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza de que deseja excluir o serviço selecionado?
            <br /> Esta ação não poderá ser desfeita!
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={close}>CANCELAR</Button>
          <Button onClick={remove} autoFocus>
            <strong>CONFIRMAR</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    <DialogActions>
      <Button onClick={close} color='primary'>
        Fechar
      </Button>
    </DialogActions>
  </Dialog>
);

export default DialogModal;