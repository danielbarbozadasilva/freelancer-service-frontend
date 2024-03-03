import styled from 'styled-components'
import { Button, FormControl } from '@material-ui/core'

export const SImage = styled.img`
  width: 180px;
  height: 130px;
  border-radius: 5%;
  object-fit: cover;
`

export const SPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`

export const Submit = styled.div`
  margin: 25px 7px;
`

export const SInput = styled.input`
  text-align: right;
  border: none;
  background-color: white;
`

export const SBox = styled.div`
  width: 550px;
  padding: 20px 100px;
`

export const SFormControl = styled(FormControl)`
  display: flex !important;
  margin-top: 30px !important;
`

export const SButtonUpload = styled(Button)`
  padding: 10px 0px;
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
  padding: 10px 0px;
  margin-top: 20px!important;
  background-color: #4f5d73 !important;
  color: white !important;
  :hover {
    background-color: #5c6abc;
  }
  :disabled {
    background-color: #dddddd;
  }
`
