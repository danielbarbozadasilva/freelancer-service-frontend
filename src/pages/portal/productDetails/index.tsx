import React, { useEffect } from "react";
import "./style.scss";
import { Slider } from "infinite-react-carousel/lib";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { listByIdProductsAction } from "../../../store/product/product.action";
import { finishLoadingProduct, listByIdProduct, loadingProduct } from "../../../store/product/product.reducer";
import { Product } from "./types";
// import Reviews from "../../../components/portal/reviews/index";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const product: Product = useAppSelector((state) => state.product.productid)
  const loading = useAppSelector((state) => state.product.loading)
 
  useEffect(() => {
    dispatch(loadingProduct())
    listByIdProductsAction(id).then((result) => {
      if (result) {
        dispatch(listByIdProduct(result))
      }
      dispatch(finishLoadingProduct())
    })
  }, [dispatch])
  
  return (
    <div className="gig">
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Fiverr {">"} Graphics & Design {">"}
            </span>
            <h1>{product?.title}</h1>
              <div className="user">
                <img
                  className="pp"
                  src={product?.images}
                  alt=""
                />
                <span>{product?.userId?.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {product?.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>Sobre o serviço</h2>
            <p>{product?.description}</p>
              <div className="seller">
                <h2>Informações</h2>
                <div className="user">
                  <img src={product?.userId?.picture[0]} alt="" />
                  <div className="info">
                    <span>{product?.userId?.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
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
            <div className="price">
              <h3>{product?.description}</h3>
              <h2>$ {product?.price}</h2>
            </div>
            <p>{product?.description}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{product?.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{product?.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {product?.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
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
  );
}

export default ProductDetails;