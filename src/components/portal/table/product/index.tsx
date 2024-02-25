import React from 'react'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { IProps } from './types'
import { Table } from 'reactstrap'
import { formatCurrency } from '../../../../util/helpers/format'
import { Std } from './styled'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

const MyProductsTable: React.FC<IProps> = ({ result, modal }) => {

  const actionEdit = (id: string) => {
    return (
      <>
        <IconButton onClick={modal(2, id)} color="primary" size="small">
          <FiEdit />
        </IconButton>
      </>
    )
  }

  const actionRemove = (id: string) => {
    return (
      <>
        <IconButton onClick={modal(3, id)} color="primary" size="small">
          <FiTrash2 />
        </IconButton>
      </>
    )
  }

  return (
    <>
      {result?.length ? (
        <div>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row, i) => (
                <tr key={i}>
                  <Std>{row.data.title}</Std>
                  <Std>{row.data.description.substring(0, 100)}...</Std>
                  <Std>{formatCurrency(row.data.price)}</Std>
                  <td>
                    <IconButton onClick={() => actionEdit(row?.data?.id)}>
                      <EditIcon />
                    </IconButton>
                  </td>
                  <td>
                    <IconButton onClick={() => actionRemove(row?.data?.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <div>Você não possui nenhum serviço cadastrado.</div>
      )}
    </>
  )
}

export default MyProductsTable
