import React, { useState } from 'react'
import { BoxTable } from '../../datalist/styled'
import Loading from '../../../../components/loading/page/index'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { IconButton, Tooltip } from '@mui/material'
import { More as MoreIcon } from '@mui/icons-material'
import { IProductModal, IUserModal, IBuyerModal, DataListProps, IProduct, IBuyer, IUser } from './types'
import ListProduct from './form/product'
import ListUser from './form/user'
import ListBuyer from './form/buyer'

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const [modalProduct, setModalProduct] = useState<IProductModal>();
  const [modalUser, setModalUser] = useState<IUserModal>();
  const [modalBuyer, setModalBuyer] = useState<IBuyerModal>();

  function openProduct(row: IProduct[]) {
    setModalProduct({ open: true, data: row })
  }

  function openUser(row: IUser[]) {
    setModalUser({ open: true, data: row })
  }

  function openBuyer(row: IBuyer[]) {
    setModalBuyer({ open: true, data: row })
  }

  const actionModalProduct = (params: GridRenderCellParams) => {
    const result: IProduct = params.row.product

    return (
      <>
        <Tooltip title="Serviço">
          <span>
            <IconButton
              onClick={() => openProduct(Array(result))}
              disabled={!!result ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalUser = (params: GridRenderCellParams) => {
    const result: IUser = params.row.user

    return (
      <>
        <Tooltip title="Freelancer">
          <span>
            <IconButton
              onClick={() => openUser(Array(result))}
              disabled={!!result ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionModalBuyer = (params: GridRenderCellParams) => {
    const result: IBuyer = params.row.buyer

    return (
      <>
        <Tooltip title="Cliente">
          <span>
            <IconButton
              onClick={() => openBuyer(Array(result))}
              disabled={!!result ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Título',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'description',
      headerName: 'Descrição',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'price',
      headerName: 'Preço',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'Cliente',
      headerName: 'Cliente',
      renderCell: actionModalBuyer,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Freelancer',
      headerName: 'Freelancer',
      renderCell: actionModalUser,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'Serviço',
      headerName: 'Serviço',
      renderCell: actionModalProduct,
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
      <BoxTable>
        <DataGrid
          rows={data}
          autoHeight
          columns={columns}
          loading={loading}
          pageSize={10}
        />
      </BoxTable>
      <ListProduct
        open={modalProduct?.open || false}
        products={modalProduct?.data as IProduct[]}
        close={() => setModalProduct({ ...modalProduct, open: false } as IProductModal)}
      />
      <ListUser
        open={modalUser?.open || false}
        user={modalUser?.data as IUser[]}
        close={() => setModalUser({ ...modalUser, open: false } as IUserModal)}
      />
      <ListBuyer
        open={modalBuyer?.open || false}
        buyer={modalBuyer?.data as IBuyer[]}
        close={() => setModalBuyer({ ...modalBuyer, open: false } as IUserModal)}
      />
    </>
  )
}

export default DataList
