import { Button } from 'react-bootstrap'
import styled from 'styled-components'

export const StyleContainer = styled.div`
  display: flex;
`

export const SearchContainer = styled.div`
  padding: 0px 40px;
`

export const SButton = styled(Button)`
  margin-top: 5%;
  background-color: #4F5D73;
  border: none;
  &:hover {
    background-color: #ccc;
    transition: 0.5s ease-out;
  }
`
