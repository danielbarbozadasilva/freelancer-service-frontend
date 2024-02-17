import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DataList from '../../../../../dashboard/datagrid/index';
import { ListUserProps } from './types';
import { GridColDef } from '@mui/x-data-grid';

const ListUser: React.FC<ListUserProps> = ({ open, close, user }) => {
  const columnUser: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      align: 'center',
      headerAlign: 'center',
      width: 230,
      disableColumnMenu: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
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
      <DialogTitle id="alert-dialog-title">Freelancer</DialogTitle>
      <DialogContent style={{ width: '600px' }}>
        <DataList data={user} columns={columnUser} loading={false} />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary" autoFocus>
          fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListUser;