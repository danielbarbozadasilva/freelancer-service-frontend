import React from 'react'
import Loading from '../../../../components/loading/page/index'
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { IconButton, Tooltip } from '@mui/material'
import { DataListProps } from './form/types'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { useAppDispatch } from '../../../../hooks'
import { updateUserSellerAction } from '../../../../store/user/user.action'
import { navigate } from '@reach/router'
import DataListComponent from '../../datalist'

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const dispatch = useAppDispatch()

  const toggleActive = (id: string, status: boolean) => {
    dispatch(updateUserSellerAction({ id, isSeller: !status })).then(() => {
      navigate(0)
    })
  }

  const actionModal = (params: GridRenderCellParams) => {
    return (
      <>
        <Tooltip title={params.row?.isSeller ? 'Desativar' : 'Ativar'}>
          <IconButton
            onClick={() =>
              toggleActive(String(params.id), params.row?.isSeller)
            }
            color="primary"
          >
            {!params.row?.isSeller ? <BsToggleOff /> : <BsToggleOn />}
          </IconButton>
        </Tooltip>
      </>
    )
  }

  const actionEdit = (params: GridRenderCellParams) => {
    return (
      <IconButton
        onClick={() => modal(1, params.row.id)}
        color="primary"
        size="small"
      >
        <FiEdit />
      </IconButton>
    )
  }

  const actionRemove = (params: GridRenderCellParams) => {
    return (
      <IconButton
        onClick={() => modal(2, params.row.id)}
        color="primary"
        size="small"
      >
        <FiTrash2 />
      </IconButton>
    )
  }

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'username',
      headerName: 'Username',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'email',
      headerName: 'E-mail',
      align: 'center',
      headerAlign: 'center',
      width: 280,
      disableColumnMenu: true
    },
    {
      field: 'cpf',
      headerName: 'Cpf',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'birthDate',
      headerName: 'Nascimento',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'actionEdit',
      headerName: 'Editar',
      renderCell: actionEdit,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actionRemove',
      headerName: 'Excluir',
      renderCell: actionRemove,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'actions',
      headerName: 'Freelancer',
      renderCell: actionModal,
      width: 140,
      disableColumnMenu: true
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <DataListComponent data={data} columns={columns} loading={loading} />
    </>
  )
}

export default DataList
