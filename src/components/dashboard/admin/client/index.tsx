import React, { useState, ReactNode } from 'react';
import { BoxTable } from '../../datalist/styled';
import Loading from '../../../../components/loading/page/index';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { FiTrash2 } from 'react-icons/fi';
import { IconButton, Tooltip } from '@material-ui/core';
import { More as MoreIcon } from '@material-ui/icons';

interface DataListProps {
  data: any[]; // Substitua 'any[]' pelo tipo específico dos seus dados
  modal: (arg: number, id: string) => void;
  loading: boolean;
}

interface ModalAddressState {
  open: boolean;
  data?: any;
}

const DataList: React.FC<DataListProps> = ({ data, modal, loading }) => {
  const [modalAddress, setModalAddress] = useState<ModalAddressState>({ open: false });

  function openInfoAddress(row: any) {
    setModalAddress({ open: true, data: row });
  }

  const actionModalAddress = ({ row }: { row: any }) => (
    <>
      <Tooltip title="Endereço">
        <span>
          <IconButton onClick={() => openInfoAddress(row.address)} color="primary">
            <MoreIcon />
          </IconButton>
        </span>
      </Tooltip>
    </>
  );

  const actionRemove = ({ id, row }: { id: string; row: any }) => (
    <>
      <IconButton onClick={() => modal(1, id)} color="primary" size="small">
        <FiTrash2 />
      </IconButton>
    </>
  );

  const columns: GridColDef[] = [
    // Defina as colunas conforme necessário
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BoxTable>
        <DataGrid rows={data} columns={columns} loading={loading} pageSize={10} />
      </BoxTable>
      {/* 
      <ListAddress
        open={modalAddress.open}
        data={modalAddress.data}
        close={() => setModalAddress({ open: false })}
      /> */}
    </>
  );
};

export default DataList;