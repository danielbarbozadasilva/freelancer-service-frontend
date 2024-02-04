import React, { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import DialogModal from '../../../dialog/index'
import { IProps } from './types'
import { useNavigate } from 'react-router-dom'

const MyProductsTable: React.FC<IProps> = ({ result, onRemove }) => {
  const navigate = useNavigate()
  const [modal, setModal] = useState<{ status: boolean; id: string | null }>({
    status: false,
    id: null
  })

  const openModal = (id: string) => {
    setModal({ status: true, id })
  }

  const closeModal = () => {
    setModal({ status: false, id: null })
  }

  return (
    <>
      <DialogModal
        title="Serviço"
        open={modal.status}
        close={closeModal}
        remove={onRemove}
      />
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((row) => (
              <TableRow key={row?.data?._id}>
                <TableCell>{row?.data?.title}</TableCell>
                <TableCell>{row?.data?.description}</TableCell>
                <TableCell>{row?.data?.price}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => navigate(`/edit-product/${row?.data?._id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => openModal(row?.data?._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MyProductsTable
