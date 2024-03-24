import styled from 'styled-components'

export const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`

export const SButton = styled.button`
  width: 40px;
  height: 30px;
  color: #473f57;
  background-color: #fff;
  font-size: 14px;
  font-weight: bold;
  border-color: #ccc;
  :disabled {
    border-color: #fff;
  }
`

export const TextSelect = styled.h6`
  margin: 7px 20px;
`
