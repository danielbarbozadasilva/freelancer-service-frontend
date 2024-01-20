import React from 'react';
import { DataGrid, GridToolbar, DataGridProps, GridColDef } from '@mui/x-data-grid';
import Loading from '../../loading/page/index';
import { BoxTable } from './styled';

interface DataListProps {
  data: any[];
  columns: GridColDef[];
  loading: boolean;
}

const DataList: React.FC<DataListProps> = ({ data, columns, loading }) => {
  if (loading) {
    return <Loading />;
  }

  const dataGridProps: DataGridProps = {
    rows: data,
    columns: columns,
    loading: loading,
    pageSize: 10,
    disableColumnSelector: true,
    disableDensitySelector: true,
    components: { Toolbar: GridToolbar },
    componentsProps: {
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: { debounceMs: 500 },
      },
    },
  };

  return (
    <BoxTable>
      <DataGrid {...dataGridProps} />
    </BoxTable>
  );
};

export default DataList;