import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataListComponent from '../../../../../dashboard/datalist/index';
import { ListProductProps } from './types';
import { GridColumns } from '@mui/x-data-grid';

const ListProduct: React.FC<ListProductProps> = ({ open, close, products }) => {
  const columns: GridColumns = [
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
      headerName: 'Prazo de entrega (dias)',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      width: 340,
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
        <DataListComponent data={products} columns={columns} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListProduct;