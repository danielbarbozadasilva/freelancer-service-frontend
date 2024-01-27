import React from 'react';
import { BoxTable } from '../../datalist/styled';
import Loading from '../../../../components/loading/page/index';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { IconButton, Tooltip } from '@mui/material';
import { DataListProps } from './form/types';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { useAppDispatch } from '../../../../hooks';
import { ActionModalProps } from './types';
import { updateClientSellerAction } from '../../../../store/client/client.action';
import { updateClient } from '../../../../store/client/client.reducer';
import { navigate } from '@reach/router'

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const dispatch = useAppDispatch()

  const toggleActive = (id: string, status: boolean) => {
    updateClientSellerAction(id, !status).then(()=>{
      dispatch(updateClient())
      navigate(0)
    })
  }

  const actionModal: React.FC<ActionModalProps> = ({ id, row }) => {
    return (
      <>
        <Tooltip title={row?.isSeller ? 'Desativar' : 'Ativar'}>
          <IconButton onClick={() => toggleActive(id, row?.isSeller)} color="primary">
            {!row?.isSeller ? <BsToggleOff /> : <BsToggleOn />}
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const actionEdit = (id: string) => {
    return (
      <>
        <IconButton onClick={() => modal(1, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    );
  };

  const actionRemove = (id: string) => {
    return (
      <>
        <IconButton onClick={() => modal(2, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    );
  };

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'username',
      headerName: 'Username',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'cpf',
      headerName: 'Cpf',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'birthDate',
      headerName: 'Nascimento',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'actionEdit',
      headerName: 'Editar',
      renderCell: actionEdit as any,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true,
    },
    {
      field: 'actionRemove',
      headerName: 'Excluir',
      renderCell: actionRemove as any,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      renderCell: actionModal as any,
      width: 140,
      disableColumnMenu: true
    }
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BoxTable>
        <DataGrid
          rows={data}
          autoHeight
          columns={columns}
          loading={loading}
          pageSize={10}
        />
      </BoxTable>
    </>
  );
};

export default DataList;