import React, { useState } from 'react';
import { BoxTable } from '../../datalist/styled';
import Loading from '../../../../components/loading/page/index';
import { DataGrid, GridColumns, GridCellParams } from '@mui/x-data-grid';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { IconButton, Tooltip } from '@mui/material';
import { More as MoreIcon } from '@mui/icons-material';
import { SImg } from './styled';
import ListOrders from './form/orders/index';
import { DataListProps, IClientModal } from './form/types';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { useAppDispatch } from '../../../../hooks';
import { ActionModalProps } from './types';

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const [modalClient, setModalClient] = useState<IClientModal>();
  const [modalSeller, setModalSeller] = useState<IClientModal>();
  const dispatch = useAppDispatch()

  const thumb = (params: GridCellParams) => {
    return <SImg src={params.value as string} />;
  };

  function openClient(row: object) {
    setModalClient({ open: true, data: row });
  }

  const actionModalOrders = (params: GridCellParams) => {
    const result = params.row.product;

    return (
      <>
        <Tooltip title="Serviços">
          <span>
            <IconButton
              onClick={() => openClient(result)}
              disabled={result.length ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    );
  };

  const toggleActive = (id: string, status: boolean) => {
    // dispatch(setStatusFornecedor(id, status))
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

  const actionEdit = (id: string, row: object) => {
    return (
      <>
        <IconButton onClick={() => modal(1, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    );
  };

  const actionRemove = (id: string, row: object) => {
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
    // {
    //   field: 'actionspedidos',
    //   headerName: 'Pedidos',
    //   flex: 1,
    //   align: 'center',
    //   headerAlign: 'center',
    //   renderCell: actionModalOrders,
    //   disableColumnMenu: true,
    // },
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
      {/* <ListOrders
        open={modalClient?.open || false}
        orders={modalClient?.data}
        close={() => setmodalClient({ ...modalClient, open: false } as IProductModal)}
      /> */}
    </>
  );
};

export default DataList;