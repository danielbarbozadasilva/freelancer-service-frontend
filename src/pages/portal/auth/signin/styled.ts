import { Col, Form, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const SForm = styled(Form)`
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 100px;
  margin: 115px 0px;
  position: center;
`

export const STextForm = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  padding-left: 10px;
  border-left: 1px solid #484058;
  margin: 30px 0px 30px 0px;
`

export const InputForm = styled.div`
  padding-top: 20px;
`

export const SRow = styled(Row)`
  margin-bottom: 2%;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`

export const SFormGroup = styled(Row)`
  @media screen and (max-width: 990px) {
    padding-bottom: 5%;
  }
`

export const SButtonSignIn = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid rgb(228, 224, 224);
  background-color: #474749;
  padding: 5px 25px;
  margin-top: 25px;
  color: white;
  &:hover {
    text-decoration: underline;
    transition: 0.5s ease-out;
  }
`

export const SColFooter = styled(Col)`
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  padding: 20px 0;
`

export const STextLink = styled.a`
  color: #474749;
`
