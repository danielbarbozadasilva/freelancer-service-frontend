import React, { useEffect } from 'react'
import ProductCard from '../../../components/portal/cards/product/index'
import { listAllProductsAction } from '../../../store/product/product.action'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useParams } from 'react-router-dom'
import { Filters, PageTitle, Product } from './types'
import Loading from '../../../components/loading/page'
import {
  ContainerCards,
  STextFormated,
  SContainerFilter,
  TitleService
} from './styled'
import { Col } from 'react-bootstrap'
import FilterProduct from '../../../components/portal/filter'
import PaginationSelector from '../../../components/paginate/selector/index.tsx'
import PaginationComponent from '../../../components/paginate/index'
import { Helmet } from 'react-helmet'

const CategoryProducts: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()
  const { id } = useParams<string>()

  const product: Product[] = useAppSelector((state) => state.product.all)
  const loading: boolean = useAppSelector((state) => state.product.loading)
  const [itensPerPage, setItensPerPage] = React.useState<number>(5)
  const [currentPage, setCurrentPage] = React.useState<number>(0)

  useEffect(() => {
    const filters: Filters = {
      category: String(id),
      offset: currentPage,
      limit: itensPerPage,
      search: '',
      order: '',
      userId: ''
    }
    dispatch(listAllProductsAction(filters))
  }, [itensPerPage, currentPage])

  if (loading) {
    return <Loading />
  }

  let pages: number = 0
  if (product?.length) {
    pages = Math.ceil(product[0]?.metadata || 0 / itensPerPage)
  }

  const ProductList = (product: Product[]) => {
    return product.map((item: Product, i: number) => {
        return (
          <Col md="6" xl="4" sm="12" xs="12" key={i}>
            <ProductCard item={{ ...item }} />
          </Col>
        )
      })
  }

  return (
    <>
      <Helmet title={title} />
      <div className="container">
        <TitleService>Serviços</TitleService>
        <SContainerFilter>
          <FilterProduct id={id} />
        </SContainerFilter>
        <ContainerCards>
          {!loading && product?.length === 0 ? (
            <STextFormated>
              <h6>Não há serviços disponiveis</h6>
            </STextFormated>
          ) : (
            ProductList(product)
          )}
        </ContainerCards>
        <PaginationSelector
          itensPerPage={itensPerPage}
          setItensPerPage={setItensPerPage}
        />
        <PaginationComponent
          pages={pages}
          currentPage={currentPage}
          itensPerPage={itensPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default CategoryProducts
