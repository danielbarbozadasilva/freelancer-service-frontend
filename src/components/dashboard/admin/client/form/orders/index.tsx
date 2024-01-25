import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataList from '../../../../datagrid/index';
import { ListProductProps } from './types';

const ListOrders: React.FC<ListProductProps> = ({ open, close, products }) => {
  const columnProduct = [
    {
      field: 'title',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 500,
      disableColumnMenu: true,
    },
    {
      field: 'price',
      headerName: 'Preço',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
      disableColumnMenu: true,
    },
    {
      field: 'deliveryTime',
      headerName: 'Entrega',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
      disableColumnMenu: true,
    },
    {
      field: 'sales',
      headerName: 'Vendas',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
      disableColumnMenu: true,
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Lista de serviços</DialogTitle>
      <DialogContent style={{ width: '600px' }}>
        <DataList data={products} columns={columnProduct} loading={false} />
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