import React, { useEffect } from 'react'
import './style.scss'
import Slider from 'react-slick'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { listByIdProductsAction } from '../../../store/product/product.action'
import { findByIdRatingAction } from '../../../store/rating/rating.action'
import {
  finishLoadingProduct,
  listByIdProduct,
  loadingProduct
} from '../../../store/product/product.reducer'
import { Product, Rating } from './types'
import {
  finishLoadingRating,
  listByIdRating,
  loadingRating
} from '../../../store/rating/rating.reducer'
import Reviews from '../../../components/portal/reviews/index'
import { FaCheck, FaRegClock } from 'react-icons/fa'
import { IoMdStar } from "react-icons/io";
import { settings } from './styled'
import ContainerHero from '../../../components/portal/hero'

const ProductDetails: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const product: Product = useAppSelector((state) => state.product.productid)
  const rating: Rating = useAppSelector((state) => state.rating.ratingid)
  const loading = useAppSelector((state) => state.product.loading)

  useEffect(() => {
    dispatch(loadingProduct())
    listByIdProductsAction(id).then((result) => {
      if (result) {
        dispatch(listByIdProduct(result))
      }
      dispatch(finishLoadingProduct())
    })
    dispatch(loadingRating())
    findByIdRatingAction(id).then((result) => {
      if (result) {
        dispatch(listByIdRating(result))
      }
      dispatch(finishLoadingRating())
    })
  }, [dispatch])


  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
             <Link to="/">Freelancer</Link> {'>'} {product?.category} {'>'}
          </span>
          <h1>{product?.title}</h1>
          <div className="user">
            <img className="pp" src={product?.userId?.picture[0]} alt="" />
            <span>{product?.userId?.username}</span>
            {!isNaN(5 / rating.score) && (
              <div className="stars">
                {Array(Math.round(5 / rating.score))
                  .fill()
                  .map((item, i) => (
                    <img src="/img/star.png" alt="" key={i} />
                  ))}
                <span>{Math.round(5 / rating.score)}</span>
              </div>
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
                {!isNaN(5 / rating.score) && (
                  <div className="stars">
                    {Array(Math.round(5 / rating.score))
                      .fill()
                      .map((item, i) => (
                        <IoMdStar />
                      ))}
                    <span>{Math.round(5 / rating.score)}</span>
                  </div>
                )}
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
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>{product?.userId?.description}</p>
            </div>
          </div>
          {/* <Reviews gigId={id} /> */}
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
              <span>{product?.deliveryTime} Days Delivery</span>
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
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
