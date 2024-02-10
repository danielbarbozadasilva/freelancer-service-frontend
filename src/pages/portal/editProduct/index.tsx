import React, { useEffect } from 'react'
import { IProduct, IProductById, PageTitle, ICategoryAll } from './types'
import { Helmet } from 'react-helmet'
import EditProduct from '../../../components/portal/editProduct'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useNavigate, useParams } from 'react-router-dom'
import {
  updateProductAction,
  listByIdProductsAction
} from '../../../store/product/product.action'
import { listAllCategoryAction } from '../../../store/category/category.action'

const EditProductPage: React.FC<PageTitle> = ({ title }) => {
  const product: IProductById = useAppSelector((state) => state.product.productid)
  const category: ICategoryAll[] = useAppSelector((state) => state.category.all)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(listByIdProductsAction(id))
    }
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const submitForm = async (form: IProduct) => {
    dispatch(updateProductAction(form))
    navigate('/')
  }

  return (
    <>
      <Helmet title={title} />
      <EditProduct submit={submitForm} product={product} category={category} />
    </>
  )
}

export default EditProductPage
