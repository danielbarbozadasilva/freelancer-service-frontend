import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './styled.css'
import { removeToken } from '../../../config/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { listAllCategoryAction } from '../../../store/category/category.action'
import { ICategory, IUser } from './types'
import noAvatar from '../../../assets/img/noavatar.jpg'

const Header: React.FC = () => {
  const user: IUser = useAppSelector((state) => state.auth.user)
  const category: ICategory[] = useAppSelector((state) => state.category.all)
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)
    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  return (
    <Navbar className={active ? 'navbar active' : 'navbar'} expand="lg">
      <div className="container d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <div className="logo">
            <Link className="link" to="/" reloadDocument>
              <span className="text">Freelancer</span>
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user ? (
              <div className="avatarUser">
                <img
                  className="avatar"
                  src={user?.picture || noAvatar}
                  alt=""
                />
                <NavDropdown
                  title={user?.username}
                  id="basic-nav-dropdown"
                  show={open}
                  onClick={() => setOpen(!open)}
                >
                  {user.isSeller && (
                    <NavDropdown.Item as={Link} to="/myproducts" reloadDocument>
                      Serviços
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item as={Link} to="/orders" reloadDocument>
                    Pedidos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/messages" reloadDocument>
                    Mensagens
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/signin"
                    onClick={removeToken}
                    reloadDocument
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin" className="link loginLink">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/SignUp" className="link">
                  <button className="signupButton">Cadastrar</button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
      {active && (
        <>
          <hr />
          <Nav className="ml-auto categories">
            {category?.length <= 7 &&
              category?.map((item: ICategory, index: number) => (
                <Nav.Link
                  as={Link}
                  to={`/category/${item.id}`}
                  key={item.id}
                  reloadDocument
                  className="m-4"
                >
                  {item.name}
                </Nav.Link>
              ))}
          </Nav>
          <hr />
        </>
      )}
    </Navbar>
  )
}

export default Header
