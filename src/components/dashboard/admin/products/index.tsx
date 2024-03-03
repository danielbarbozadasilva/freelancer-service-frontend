import React, { useState } from 'react'
import Loading from '../../../../components/loading/page/index'
import DataListComponent from '../../datalist/index'
import { IconButton, Tooltip } from '@mui/material'
import { More as MoreIcon } from '@mui/icons-material'
import {
  IOrdersModal,
  IUserModal,
  IClientModal,
  IRatingModal,
  DataListProps,
  IOrders,
  IClient,
  IUser,
  IRating
} from './types'
import ListOrders from './form/orders'
import ListFreelancer from './form/freelancer'
import ListClient from './form/client'
import ListRating from './form/rating'
import { GridColumns, GridRenderCellParams } from '@mui/x-data-grid'

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const [modalOrders, setModalOrders] = useState<IOrdersModal>()
  const [modalRating, setModalRating] = useState<IRatingModal>()
  const [modalFreelancer, setModalFreelancer] = useState<IUserModal>()
  const [modalClient, setModalClient] = useState<IClientModal>()

  function openRating(row: IRating[]) {
    setModalRating({ open: true, data: row })
  }

  function openOrders(row: IOrders[]) {
    setModalOrders({ open: true, data: row })
  }

  function openUser(row: IUser[]) {
    setModalFreelancer({ open: true, data: row })
  }

  function openClient(row: IClient[]) {
    setModalClient({ open: true, data: row })
  }

  const actionModalFreelancer = (params: GridRenderCellParams) => {
    const result: IUser = params.row.user
    return (
      <>
        <Tooltip title="Freelancer">
          <span>
            <IconButton
              onClick={() => openUser(Array(result))}
              disabled={result?.id ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalClient = (params: GridRenderCellParams) => {
    const result: IClient = params.row.client
    return (
      <>
        <Tooltip title="Cliente">
          <span>
            <IconButton
              onClick={() => openClient(Array(result))}
              disabled={result?.id ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalRating = (params: GridRenderCellParams) => {
    const result: IRating = params.row.rating
    return (
      <>
        <Tooltip title="Avaliação">
          <span>
            <IconButton
              onClick={() => openRating(Array(result))}
              disabled={result?.id ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalOrders = (params: GridRenderCellParams) => {
    const result: IOrders = params.row.orders
    return (
      <>
        <Tooltip title="Pedidos">
          <span>
            <IconButton
              onClick={() => openOrders(Array(result))}
              disabled={result?.id ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const columns: GridColumns = [
    {
      field: 'title',
      headerName: 'Título',
      align: 'center',
      headerAlign: 'center',
      width: 300,
      disableColumnMenu: true
    },
    {
      field: 'priceFormated',
      headerName: 'Preço',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'deliveryTime',
      headerName: 'Prazo Entrega (dias)',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'Cliente',
      headerName: 'Cliente',
      renderCell: actionModalClient,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Freelancer',
      headerName: 'Freelancer',
      renderCell: actionModalFreelancer,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Pedidos',
      headerName: 'Pedidos',
      renderCell: actionModalOrders,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Avaliações',
      headerName: 'Avaliações',
      renderCell: actionModalRating,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <DataListComponent data={data} columns={columns} loading={loading} />
      <ListOrders
        open={modalOrders?.open || false}
        orders={modalOrders?.data as IOrders[]}
        close={() =>
          setModalOrders({ ...modalOrders, open: false } as IOrdersModal)
        }
      />
      <ListFreelancer
        open={modalFreelancer?.open || false}
        user={modalFreelancer?.data as IUser[]}
        close={() =>
          setModalFreelancer({ ...modalFreelancer, open: false } as IUserModal)
        }
      />
      <ListClient
        open={modalClient?.open || false}
        client={modalClient?.data as IClient[]}
        close={() =>
          setModalClient({ ...modalClient, open: false } as IClientModal)
        }
      />
      <ListRating
        open={modalRating?.open || false}
        rating={modalRating?.data as IRating[]}
        close={() =>
          setModalRating({ ...modalRating, open: false } as IRatingModal)
        }
      />
    </>
  )
}

export default DataList
