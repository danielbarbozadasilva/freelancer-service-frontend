import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataList from '../../../../datagrid/index';
import { ListOrdersProps } from './types';
import { GridColDef } from '@mui/x-data-grid';

const ListOrders: React.FC<ListOrdersProps> = ({ open, close, orders }) => {
  const columnOrder: GridColDef[] = [
    {
      field: 'payment_intent',
      headerName: 'Código',
      align: 'center',
      headerAlign: 'center',
      width: 230,
      disableColumnMenu: true,
    },
    {
      field: 'title',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: 'status',
      headerName: 'Transação',
      align: 'center',
      headerAlign: 'center',
      width: 150,
      disableColumnMenu: true,
    }
  ];

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Serviço</DialogTitle>
      <DialogContent style={{ width: '600px' }}>
        <DataList data={orders} columns={columnOrder} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListOrders;