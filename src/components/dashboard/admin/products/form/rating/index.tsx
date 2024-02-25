import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataList from '../../../../../dashboard/datagrid/index';
import { ListRatingProps } from './types';
import { GridColDef } from '@mui/x-data-grid';

const ListRating: React.FC<ListRatingProps> = ({ open, close, rating }) => {
  const columnRating: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: 'text',
      headerName: 'Descrição',
      align: 'center',
      headerAlign: 'center',
      width: 230,
      disableColumnMenu: true,
    },
    {
      field: 'score',
      headerName: 'Estrelas',
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
      <DialogTitle id="alert-dialog-title">Detalhes</DialogTitle>
      <DialogContent style={{ width: '600px' }}>
        <DataList data={rating} columns={columnRating} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListRating;