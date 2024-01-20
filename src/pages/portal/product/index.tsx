import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../../../components/portal/work/cards/productCard/index";
import { loadingProduct, finishLoadingProduct, listAllProduct } from "../../../store/product/product.reducer";
import { listAllProductsAction } from "../../../store/product/product.action";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { Filters, IUser, PageTitle } from "./types";

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

const ProductPage: React.FC<PageTitle> = ({ title }) => {  
  const [sort, setSort] = useState<"sales" | "createdAt">("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const user: IUser = useAppSelector((state) => state.auth.user)
  const product = useAppSelector((state) => state.product.all)
  const loading = useAppSelector((state) => state.product.loading)

  const filters: Filters = {
    userId: user.id,
    category: '',
    offset: 0,
    limit: 10,
    search: '',
  }
  
  useEffect(() => {
    dispatch(loadingProduct())
    listAllProductsAction(filters).then((result) => {
      if (result) {
        dispatch(listAllProduct(result))
      }
      dispatch(finishLoadingProduct())
    })
  }, [dispatch])

  return (
    <></>
  );
}

export default ProductPage;