import React, { useEffect } from 'react'
import './style.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { listByIdProductsAction } from '../../../store/product/product.action'
import {
  createRatingAction,
  findByIdRatingAction
} from '../../../store/rating/rating.action'
import {
  finishLoadingProduct,
  listByIdProduct,
  loadingProduct
} from '../../../store/product/product.reducer'
import { IProduct, IRating, IResultRating } from './types'
import {
  createRating,
  finishLoadingRating,
  listByIdRating,
  loadingRating
} from '../../../store/rating/rating.reducer'
import Reviews from '../../../components/portal/rating/index'
import { FaCheck, FaRegClock } from 'react-icons/fa'
import ContainerHero from '../../../components/portal/hero'
import { isAuthenticated } from '../../../config/auth'
import ContainerForm from '../../../components/portal/rating/form'
import Rating from '@mui/material/Rating'
import Loading from '../../../components/loading/page'
import { SLink } from './styled'

const ProductDetails: React.FC<PageTitle> = ({ title }) => { 
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const product: IProduct = useAppSelector((state) => state.product.productid)
  const rating: IResultRating = useAppSelector((state) => state.rating.ratingid)
  const loading: boolean = useAppSelector((state) => state.product.loading)

  useEffect(() => {
    dispatch(loadingProduct())
    listByIdProductsAction(id as string).then((result) => {
      if (result) {
        dispatch(listByIdProduct(result))
      }
      dispatch(finishLoadingProduct())
    })
    dispatch(loadingRating())

    findByIdRatingAction(id as string).then((result: IRating) => {
      if (result) {
        dispatch(listByIdRating(result))
      }
      dispatch(finishLoadingRating())
    })
  }, [dispatch])

  const submitRating = (form: IRating) => {
    dispatch(loadingRating())
    createRatingAction(form).then(() => {
      dispatch(createRating())
      dispatch(finishLoadingRating())
    })

    findByIdRatingAction(id as string).then((result: IRating) => {
      if (result) {
        dispatch(listByIdRating(result))
      }
      dispatch(finishLoadingRating())
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            <SLink to="/">Freelancer</SLink> 
            {'  >  '}
            <SLink to={`/category/${product?.category?._id}`}>
              {product?.category?.name}
            </SLink>
            {'  >  '} 
            {product?.title}
          </span>
          <h1>{product?.title}</h1>
          <div className="user">
            <img className="picture" src={product?.userId?.picture[0]} alt="" />
            <span>{product?.userId?.username}</span>
            {rating.averageScore && (
              <>
                <Rating name="simple-controlled" value={rating.averageScore} />
              </>
            )}
          </div>

          <ContainerHero data={product} />

          <h2>Sobre o serviço</h2>
          <p>{product?.description}</p>
          <div className="seller">
            <h2>Informações</h2>
            <div className="user">
              <img src={product?.userId?.picture[0]} alt="" />
              <div className="info">
                <span>{product?.userId?.username}</span>
                <Rating name="simple-controlled" value={rating.averageScore} />
                <button>Contate-me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Sou do: </span>
                  <span className="desc">{product?.userId?.country}</span>
                </div>
                <div className="item">
                  <span className="title">Tempo médio de resposta</span>
                  <span className="desc">4 horas</span>
                </div>
                <div className="item">
                  <span className="title">Última entrega</span>
                  <span className="desc">1 dia</span>
                </div>
                <div className="item">
                  <span className="title">Idioma</span>
                  <span className="desc">Portugues</span>
                </div>
              </div>
              <hr />
              <p>{product?.userId?.description}</p>
            </div>
          </div>

          <div>
            {isAuthenticated() ? (
              <>
                <h2 className="avaliacoes">Deixe sua avaliação</h2>
                <ContainerForm id={product.id} submit={submitRating} />
              </>
            ) : (
              ''
            )}
            <h2 className="avaliacoes">Avaliações</h2>
            <Reviews data={rating.result} />
          </div>
        </div>
        <div className="right">
          <h3>{product?.description}</h3>
          <div className="price">
            <h2>{product?.price}</h2>
          </div>
          <p>{product?.description}</p>
          <div className="details">
            <div className="item">
              <FaRegClock />
              <span>Prazo: {product?.deliveryTime}</span>
            </div>
          </div>
          <div className="features">
            {!!product &&
              product?.features?.map((feature) => (
                <div className="item" key={feature}>
                  <FaCheck />
                  <span>{feature}</span>
                </div>
              ))}
          </div>
          <Link to={`/pay/${id}`}>
            <button>Confirmar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
