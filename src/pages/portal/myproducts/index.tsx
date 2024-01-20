import React from 'react'
import { PageTitle } from './types'
import MyProducts from '../../../components/portal/myproducts'
import { Helmet } from 'react-helmet'

const MyProductsPage: React.FC<PageTitle> = ({ title }) => {
  return (
    <>
      <Helmet title={title} />
      <MyProducts />
    </>
  )
}

export default MyProductsPage
