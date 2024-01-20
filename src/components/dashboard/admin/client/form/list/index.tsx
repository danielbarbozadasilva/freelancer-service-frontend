import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import DataList from '../../../../datalist/index';

interface ListAddressProps {
  open: boolean;
  close: () => void;
  data: any[];
}

const ListAddress: React.FC<ListAddressProps> = ({ open, close, data }) => {
  const columnAddress = [
    {
      field: 'city',
      headerName: 'Cidade',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 100,
      disableColumnMenu: true
    },
    {
      field: 'state',
      headerName: 'Estado',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 100,
      disableColumnMenu: true
    },
    {
      field: 'street',
      headerName: 'Endereço',
      align: 'center',
      headerAlign: 'center',
      width: 200,
      disableColumnMenu: true
    },
    {
      field: 'zipCode',
      headerName: 'Cep',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 100,
      disableColumnMenu: true
    }
  ]

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Endereço</DialogTitle>
      <DialogContent style={{ width: '600px ' }}>
        <DataList data={data} columns={columnAddress as any} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListAddress;