import React, { useEffect, useRef, useState } from "react";
import "./styled.scss";
import ProductCard from "../../../components/portal/work/cards/productCard/index";
import { loadingProduct, finishLoadingProduct, listAllProduct } from "../../../store/product/product.reducer";
import { listAllProductsAction } from "../../../store/product/product.action";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";

interface Product {
  _id?: string;
  userId?: string;
  title: string
  description: string
  category: string
  price: number
  promotion: number
  images: string[]
  deliveryTime: number
  features: string[]
  sales: number
  rating?: string
  likes?: string
}

function Products() {
  const [sort, setSort] = useState<"sales" | "createdAt">("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const product = useAppSelector((state) => state.product.all)
  const loading = useAppSelector((state) => state.product.loading)

  useEffect(() => {
    dispatch(loadingProduct())
    listAllProductsAction().then((result) => {
      if (result) {
        dispatch(listAllProduct(result))
      }
      dispatch(finishLoadingProduct())
    })
  }, [dispatch])

  const reSort = (type: "sales" | "createdAt"): void => {
    setSort(type);
    setOpen(false);
  };

  const apply = (): void => {
    if (minRef.current && maxRef.current) {
      console.log(minRef.current.value);
      console.log(maxRef.current.value);
    }
  };

  return (
    <div className="products">
      <div className="container">
        <h1>Serviços</h1>
        <p>Explore as fronteiras da arte e da tecnologia</p>
        <div className="menu">
          <div className="left">
            <span>Preço: </span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Aplicar</button>
          </div>
          <div className="right">
            <span className="sortBy">Ordenar por: </span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {product.map((product: Product, index) => (
            <ProductCard key={index} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;