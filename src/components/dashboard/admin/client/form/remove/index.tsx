import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IRemoveProps } from './types';

const Remove: React.FC<IRemoveProps> = ({ open, remove, close }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEnforceFocus
      >
        <DialogTitle id="alert-dialog-title">Excluir Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza de que deseja excluir o cliente selecionado?
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
  );
};

export default Remove;