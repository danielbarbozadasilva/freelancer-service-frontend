import styled from 'styled-components'
import { Container, Col } from 'react-bootstrap'

export const SContainer = styled(Container)`
  padding-left: 10%;
  font-size: 24px;
  background-color: #303030;
  color: #F8F9FA;
  @media (max-width: 1700px) {
    padding-left: 0%;
  }
`

export const SContainerCopyright = styled(Container)`
  padding-top: 1%;
  font-size: 24px;
  background-color: #f8f8f8;
  color: #303030;
`

export const WebsiteRights = styled.div`
  font-size: 16px;
  padding: 12px 20px;
  @media screen and (max-width: 990px) {
    text-align: center;
  }
`

export const ColCopyright = styled(Col)`
  text-align: center;
  padding: 10px;
  @media screen and (max-width: 990px) {
    padding-top: 30px;
    margin: 0;
  }
`

export const ColInfo = styled(Col)`
  text-align: left;
  padding: 80px;
  @media screen and (max-width: 990px) {
    text-align: center;
    padding-top: 30px;
    padding: 40px;
    margin: 0;
  }
`

export const IconStyle = styled.a`
  font-size: 40px;
  padding-left: 28px;
  color: #F8F9FA;
  &:hover {
    color: #c7b7ba;
    transition: 0.5s ease-out;
  }
`

export const FooterLinkTitle = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #F8F9FA;
  border-left: 5px solid #F8F9FA;
  padding: 5px 20px;
  margin: 10px 0px;
`

export const FooterName = styled.h1`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  @media screen and (max-width: 990px) {
    font-size: 12px;
  }
`
