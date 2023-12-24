import { Col, Form, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const SForm = styled(Form)`
  margin: 65px 40px;
  background-color: #fafafa;
  position: center;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`
export const SFormSignUp = styled(Form)`
  width: 85%;
  margin: 140px auto;
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 50px;
  position: center;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`
export const SFormRecovery = styled(Form)`
  width: 85%;
  margin: 140px auto;
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 50px;
  position: center;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
`
export const SFormSignIn = styled(Form)`
  width: 85%;
  margin: 140px auto;
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 50px;
  position: center;
  @media screen and (max-width: 990px) {
    width: 100%;
    margin: 0;
  }
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
  border: 1px solid #484058;
  background-color: #484058;
  color: #f8f9fa;
  padding: 5px 25px;
  &:hover {
    text-decoration: underline;
    background-color: #ccc;
    transition: 0.5s ease-out;
  }
`

export const SButtonFormRecovery = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid #484058;
  background-color: #484058;
  color: #f8f9fa;
  padding: 5px 25px;
  margin: 35px 0px;
  &:hover {
    text-decoration: underline;
    background-color: #ccc;
    transition: 0.5s ease-out;
  }
`

export const SColFooter = styled(Col)`
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  padding: 20px 0;
`

export const STextForm = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  padding-left: 10px;
  border-left: 1px solid #484058;
  margin: 30px 0px 50px 0px;
`

export const STextLink = styled.a`
  color: #473F56;
`

export const SButton = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid #484058;
  padding: 5px 25px;
  background-color: #484058;
  color: #f8f9fa;
  margin: 30px 0px;
  &:hover {
    text-decoration: underline;
    background-color: #ccc;
    transition: 0.5s ease-out;
  }
  :disabled {
    text-align: center;
    font-size: 16px;
    border: 1px solid #484058;
    background-color: white;
    padding: 5px 25px;
    color: #473F56;
    margin: 30px 0px;
  }
`
