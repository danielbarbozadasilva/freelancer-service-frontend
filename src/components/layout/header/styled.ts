import styled from 'styled-components'
import { NavDropdown, Navbar } from 'react-bootstrap'

export const SNavbar = styled(Navbar)`
  width: 100%;
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  background-color: #fff!important;
  color: #473f57;
  font-weight: bold;
  z-index: 1;
  border-bottom: 1px solid #ccc;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const SLink = styled.div`
  font-family: 'Montserrat', sans-serif !important;
  text-decoration: none;
  top: 0;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 1.5;
  list-style: none;
  padding-left: 50px;

  &:hover {
    text-decoration: underline;
    color: white;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 990px) {
    text-align: center;
    &:hover {
      background-color: #f6f7fc;
    }
  }
`

export const SNavbarLogo = styled.img`
  width: 8.5rem;
  height: 3.5rem;
  margin: 5px 40px;
  @media screen and (max-width: 470px) {
    width: 11.5rem;
    margin: 5px 20px;
  }
`

export const SNavDropdown = styled(NavDropdown)`
  margin: 0px 40px;
  color: #a59174 !important;
  @media screen and (max-width: 995px) {
    width: 100%;
    text-align: center;
  }
`

export const SIcon = styled.h3`
  margin-bottom: 10px;
`