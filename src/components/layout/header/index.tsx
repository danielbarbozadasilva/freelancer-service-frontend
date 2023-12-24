import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { SNavbar, SLink, SNavbarLogo, SNavDropdown } from './styled'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isAuthenticated, getUser } from '../../../config/auth'
import { logoutAction } from '../../../store/auth/auth.action'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { logoutUser, loadingUser } from '../../../store/auth/auth.reducer'

const Header: React.FC = () => {
  const { name, email } = getUser()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const createLogout = ()=>{
    dispatch(loadingUser())
    logoutAction()
    dispatch(logoutUser())
    navigate("/signin")
  }
  
  return (
    <>
      <SNavbar bg="light" expand="lg">
        <Link to="/" id="logoMain">
          Freelancer
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isAuthenticated()
                ? (
                  <>
                    <SNavDropdown title={email}>
                      <NavDropdown.Item href="/private/profile">
                        Perfil
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => createLogout()}>
                        Sair
                      </NavDropdown.Item>
                    </SNavDropdown>
                  </>
                  )
                : (
                  <>
                    <SNavDropdown
                      title="Minha conta"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="/signin">Logar</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/signup">
                        Criar conta
                      </NavDropdown.Item>
                    </SNavDropdown>
                  </>
                  )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </SNavbar>
    </>
  )
}

export default Header
