import React from 'react'
import {
  Button,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent
} from '@material-ui/core'
import { DialogModalProps } from './types'

const DialogModal: React.FC<DialogModalProps> = ({ open, close, title, children }) => (
  <Dialog
    open={open}
    onClose={close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title || ''}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button onClick={close} color="primary">
        Fechar
      </Button>
    </DialogActions>
  </Dialog>
)

export default DialogModal
