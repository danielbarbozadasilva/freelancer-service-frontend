import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Title from '../../../../components/dashboard/title/index'
import DataList from '../../../../components/dashboard/admin/products/index'
import { Helmet } from 'react-helmet'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { OrdersProps, IModal, IProduct, IFilters, IProductData } from './types'
import { listAllProductsAction } from '../../../../store/product/product.action'

const Products: React.FC<OrdersProps> = (props) => {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState<IModal>({})
  const product: IProduct[] = useAppSelector((state) => state.product.all)
  const loading: boolean = useAppSelector((state) => state.product.loading)

  useEffect(() => {
    const filters: IFilters = { category: '', offset: 0, limit: 1000, search: '', order: '' }
    dispatch(listAllProductsAction(filters))
  }, [dispatch])

  const toggleModal = (type = 1, data: IProduct): void => {
    setModal({ type, status: true })
  }

  const dataFilter = (product: IProduct[]): IProductData[] => {
    return product.map((item)=>{
      return item.data
    })
  }
  
  const actions = () => null

  return (
    <>
      <Helmet title={props.title} />
      <Title title="Serviços" actions={actions} />
      <Grid container spacing={2}>
        <Grid item md={12} xl={12}>
          {!product?.length ? (
            <h6>Não há serviços disponiveis</h6>
          ) : (
            <DataList data={dataFilter(product)} loading={loading} modal={toggleModal} />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default Products
