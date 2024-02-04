import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styled.scss'
import { removeToken } from '../../../config/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { listAllCategoryAction } from '../../../store/category/category.action'
import { ICategory, IUser } from './types'
import { navigate } from '@reach/router'
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
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, [])

  const handleLogout = () => {
    removeToken()
    navigate("/signin")
    navigate(0)
  }

  return (
    <div className={active? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Freelancer</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          {user ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={user.picture || noAvatar} alt="" />
              <span>{user?.username}</span>
              {open && (
                <div className="options">
                  {user.isSeller && (
                    <>
                      <Link className="link" to="/myproducts">
                        Serviços
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Pedidos
                  </Link>
                  <Link className="link" to="/messages">
                    Mensagens
                  </Link>
                  <Link className="link" to="/signin" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="link">
                Login
              </Link>
              <Link className="link" to="/SignUp">
                <button>Cadastrar</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            {category?.length && category?.length <= 7 ? category?.map((item: ICategory)=>(
              <>
                <Link className="link menuLink" to={`/category/${item.id}`} reloadDocument>
                  {item.name}
                </Link>
              </>
            )): <></>}
          </div>
          <hr />
        </>
      )}
    </div>
  )
}

export default Header
