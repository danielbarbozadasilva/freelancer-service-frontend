import { Button, FormControl } from '@material-ui/core'
import styled from 'styled-components'

export const BoxTable = styled.div`
  height: 600px;
  width: 100%;
`
export const SImg = styled.img`
  width: 60px;
  height: 45px;
`
export const SBox = styled.div`
  width: 550px;
  padding: 20px 100px;
`
export const Image = styled.img`
  width: 120px;
  height: 70px;
  border-radius: 5%;
  object-fit: cover;
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
export const SPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 130px;
`
