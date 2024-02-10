import styled from 'styled-components'

export const TitlePage = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  padding-left: 10px;
  border-left: 1px solid #473F57;
  margin: 30px 0px 50px 5px;
  color: #473F57;
  @media (max-width: 555px) {
    padding-left: 0px;
    margin: 30px 0px 50px 0px;
  }
`

export const SContainer = styled.div`
  display: block;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 5%;
  margin: 5% 10%;
  color: #473F57;
  @media (max-width: 800px) {
    text-align: center;
    margin: 0%;
    width: 100%;
  }
`
