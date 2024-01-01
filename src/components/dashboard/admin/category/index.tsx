import React from 'react'
import { BoxTable } from '../../datalist/styled'
import Loading from '../../../../components/loading/page/index'
import { DataGrid } from '@material-ui/data-grid'
import { FiTrash2, FiEdit } from 'react-icons/fi'
import { SImg } from './styled'
import { IconButton, Tooltip } from '@material-ui/core'
import { More as MoreIcon } from '@material-ui/icons'
import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const DataList = (data: any, modal: any, loading: boolean) => {
  const [modalProduct, setModalProduct] = React.useState({})

  const thumb = (formattedValue: string) => {
    return <SImg src={formattedValue} />
  }

  function openProduct(row: object) {
    setModalProduct({ open: true, data: row })
  }

  const actionModalProduct = (row: any) => {
    const result = row.product

    return (
      <>
        <Tooltip title="Listar produtos">
          <span>
            <IconButton
              onClick={() => openProduct(result)}
              disabled={result.length ? false : true}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </span>
        </Tooltip>
      </>
    )
  }

  const actionEdit = (id: string, row: object) => {
    return (
      <>
        <IconButton onClick={() => modal(2, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    )
  }

  const actionRemove = (id: string, row: object) => {
    return (
      <>
        <IconButton onClick={() => modal(3, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    )
  }

  const theme = createTheme()

  const styles = makeStyles((theme:any) => ({
    root: {
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
      '& .cold': {
        backgroundColor: '#b9d5ff91',
        color: '#1a3e72'
      },
      '& .hot': {
        backgroundColor: '#ff943975',
        color: '#1a3e72'
      }
    }
  }))
  const classes = styles()

  const columns = [
    {
      field: 'photo',
      headerName: 'Imagem',
      renderCell: thumb,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'code',
      headerName: 'Código',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'availability',
      headerName: 'Disponível',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true
    },
    {
      field: 'actionsproducts',
      headerName: 'Produtos',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalProduct,
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
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {/* <BoxTable>
        <DataGrid
          rows={data}
          autoHeight
          className={classes.root}
          getCellClassName={(params) => {
            if (params.field === 'availability') {
              return params.value === 'Não' ? 'hot' : ''
            }
            return ''
          }}
          columns={columns}
          loading={loading}
          pageSize={10}
        />
      </BoxTable>
      <ListProduct
        open={modalProduct.open || false}
        products={modalProduct.data}
        close={() => setModalProduct({ ...modalProduct, open: false })}
      /> */}
    </>
  )
}
export default DataList
