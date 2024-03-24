import styled from 'styled-components'

export const SButton = styled.button`
  background-color: #473f57;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  height: 50px !important;
  cursor: pointer;
  margin: 40px 0% 50px 79%;
  @media (max-width: 1700px) {
    margin: 40px 0% 50px 75.5%;
  }
  @media (max-width: 1300px) {
    margin: 40px 0% 50px 68.5%;
  }
  @media (max-width: 950px) {
    margin: 40px 0% 50px 62.5%;
  }
  @media (max-width: 555px) {
    padding-left: 0px;
    margin: 30px 0px 50px 0px;
  }
`
