import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { BoxTable } from './styled';
import Loading from '../../loading/page/index';

interface DataListProps {
  data: any[];
  columns: GridColDef[];
  loading: boolean;
}

const DataList: React.FC<DataListProps> = ({ data, columns, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <BoxTable>
      <DataGrid rows={data} columns={columns} pageSize={10} />
    </BoxTable>
  );
};

export default DataList;