import React, { useState } from 'react';
import { BoxTable } from '../../datalist/styled';
import Loading from '../../../../components/loading/page/index';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { IconButton, Tooltip } from '@mui/material';
import { More as MoreIcon } from '@mui/icons-material';
import { SImg } from './styled';
import ListProduct from './form/product';
import { DataListProps, IProductModal } from './form/types';
import { IProduct } from './types';

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const [modalProduct, setModalProduct] = useState<IProductModal>();

  const thumb = (params: GridRenderCellParams) => {
    return <SImg src={params.value as string} />;
  };

  function openProduct(row: IProduct[]) {
    setModalProduct({ open: true, data: row });
  }

  const actionModalProduct = (params: GridRenderCellParams) => {
    const result: IProduct[] = params.row.product;

    return (
      <>
        <Tooltip title="Serviços">
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
    );
  };

  const actionEdit = (id: GridRenderCellParams) => {
    return (
      <>
        <IconButton onClick={() => modal(2, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    );
  };

  const actionRemove = (id: GridRenderCellParams) => {
    return (
      <>
        <IconButton onClick={() => modal(3, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    );
  };


  const columns: GridColDef[] = [
    {
      field: 'picture',
      headerName: 'Imagem',
      renderCell: thumb,
      align: 'center',
      flex: 1,
      headerAlign: 'center',
      disableColumnMenu: true,
    },
    {
      field: 'name',
      headerName: 'Nome',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'description',
      headerName: 'Descrição',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      disableColumnMenu: true,
    },
    {
      field: 'actionsproducts',
      headerName: 'Serviços',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: actionModalProduct,
      disableColumnMenu: true,
    },
    {
      field: 'actionEdit',
      headerName: 'Editar',
      renderCell: actionEdit,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true,
    },
    {
      field: 'actionRemove',
      headerName: 'Excluir',
      renderCell: actionRemove,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true,
    },
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
      <ListProduct
        open={modalProduct?.open || false}
        products={modalProduct?.data as IProduct[]}
        close={() => setModalProduct({ ...modalProduct, open: false } as IProductModal)}
      />
    </>
  );
};

export default DataList;