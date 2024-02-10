import { ReactNode } from 'react'

export interface DialogModalProps {
  open: boolean
  close: () => void
  title?: string
  children?: ReactNode
}
