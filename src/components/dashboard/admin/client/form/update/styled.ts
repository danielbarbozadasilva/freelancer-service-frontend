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
  padding: 15px 0px 10px 0px !important;
`
export const SFormControl = styled(FormControl)`
  margin-top: 20px;
`

export const SButtonUpload = styled(Button)`
  padding: 10px 0px!important;
  background-color: #4f5d73 !important;
  color: white !important;
  :hover {
    background-color: #5c6abc;
  }
  :disabled {
    background-color: #dddddd;
  }
`

export const SButton = styled(Button)`
  margin-top: 20px!important;
  padding: 10px 0px!important;
  background-color: #4f5d73 !important;
  color: white !important;
  :hover {
    background-color: #5c6abc;
  }
  :disabled {
    background-color: #dddddd;
  }
`
