import styled from 'styled-components'
import { Button, Paper, FormControl, InputLabel } from '@material-ui/core'

export const Box = styled(Paper)`
  padding: 25px;
`
export const Submit = styled.div`
  margin: ${({ theme: t }) => t.spacing(0.5)};
  .buttonSubmit {
    margin: ${({ theme: t }) => t.spacing(3, 0, 2)};
  }
`
export const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormStyle = styled.div`
  width: 100%;
  margin-top: ${({ theme: t }) => t.spacing(1)};
`
export const SInputLabel = styled(InputLabel)`
  padding: 15px 0px 10px 0px!important;
`
export const SFormControl = styled(FormControl)`
  margin-top: 20px;
`
export const SButton = styled(Button)`
  margin-top: 35px;
`
