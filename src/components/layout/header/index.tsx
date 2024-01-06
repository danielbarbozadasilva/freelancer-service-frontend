import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './styled.scss'
import { removeToken } from '../../../config/auth'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { finishLoadingCategory, loadingCategory, listAllCategory } from '../../../store/category/category.reducer'
import { listAllCategoryAction } from '../../../store/category/category.action'
const noAvatar = require('../../../assets/img/noavatar.jpg')

interface IUser {
  id: string
  username: string
  email: string
  isSeller: boolean
  picture: string
}

interface ICategory {
  _id?: string
  name: string
  description: string
  picture: string
}

function Navbar() {
  const user: IUser = useAppSelector((state) => state.auth.user)
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const category = useAppSelector((state) => state.category.all)
 
  useEffect(() => {
    dispatch(loadingCategory())
    listAllCategoryAction().then((result) => {
      if (result) {
        dispatch(listAllCategory(result))
      }
      dispatch(finishLoadingCategory())
    })
  }, [dispatch])

  const { pathname } = useLocation()

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
    navigate(0)
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">CodeDev</span>
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
                      <Link className="link" to="/mygigs">
                        Serviço
                      </Link>
                      <Link className="link" to="/add">
                        Novo Serviço
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Pedidos
                  </Link>
                  <Link className="link" to="/messages">
                    Mensagens
                  </Link>
                  <Link className="link" to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/SignIn" className="link">
                Login
              </Link>
              <Link className="link" to="/SignUp">
                <button>Cadastrar</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== '/') && (
        <>
          <hr />
          <div className="menu">
            {category.length && category.length <= 7 ? category.map((item: ICategory)=>(
              <>
                <Link className="link menuLink" to="/">
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

export default Navbar
