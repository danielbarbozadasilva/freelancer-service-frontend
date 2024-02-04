import styled from 'styled-components'
import { Button, FormControl } from '@material-ui/core'

export const Image = styled.img`
  width: 120px;
  height: 70px;
  border-radius: 5%;
  object-fit: cover;
`

export const SPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
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
  display: flex!important;
  margin-top: 30px!important;
`

export const SButton = styled(Button)`
  margin-top: 40px!important;
  background-color: #303f9f!important;
  color: white!important;
  :hover {
    background-color: #5c6abc;
  }
  :disabled {
    background-color: #dddddd;
  }
`
