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
  width: 530px;
  padding: 20px 100px;
`

export const SFormControl = styled(FormControl)`
  display: flex !important;
  margin-top: 30px !important;
`

export const SButton = styled(Button)`
  background-color: #473f57 !important;
  color: white !important;
  width: 100px;
  padding: 20px;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  height: 50px !important;
  cursor: pointer;
  @media (max-width: 555px) {
    padding-left: 0px;
  }
  :hover {
    background-color: #716589 !important;
  }
  :disabled {
    background-color: #716589 !important;
  }
`
