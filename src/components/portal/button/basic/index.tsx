import * as React from 'react'
import { IProps } from './types'
import { SButton } from './styled'

const BasicButton: React.FC<IProps> = ({ title, onClick }) => {
  return <SButton onClick={onClick}>{title}</SButton>
}

export default BasicButton
