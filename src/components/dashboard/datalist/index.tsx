import React from 'react'
import { BoxTable } from './styled'
import Loading from '../../loading/page/index'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { DataListProps } from './types'

const DataListComponent: React.FC<DataListProps> = ({ data, columns, loading }) => {
  if (loading) {
    return <Loading />
  }

  return (
    <BoxTable>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
      />
    </BoxTable>
  )
}

export default DataListComponent
