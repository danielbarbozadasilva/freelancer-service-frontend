import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { DialogModalProps } from './types'
import { STextareaAutosize } from './styled'

export const FormDialog: React.FC<DialogModalProps> = ({ open, close, submit }) => {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={close}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries((formData as any).entries())
            const description = formJson.description
            submit(description)
          }
        }}
      >
        <DialogTitle>Descrição do serviço</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Agora é com você! Descreva de forma minuciosa como você vai querer a
            solução.
          </DialogContentText>
          <STextareaAutosize
            autoFocus
            required
            id="description"
            name="description"
            minRows={5}
            maxRows={15}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Fechar
          </Button>
          <Button onClick={close} type="submit">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
