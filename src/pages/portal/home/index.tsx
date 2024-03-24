import React, { useEffect } from 'react'
import Loading from '../../../components/loading/page/index'
import { Col } from 'react-bootstrap'
import CardCategory from '../../../components/portal/cards/category/index'
import CardAbout from '../../../components/portal/cards/about/index'
import {
  ContainerFinancial,
  ContainerText,
  ContainerResources,
  TextInvestiment,
  STextInvest,
  SButtonAbout,
  ContainerAssets,
  ContainerCards,
  SContainerPagination,
  settings
} from '../../../components/portal/cards/styled'
import { listAllCategoryAction } from '../../../store/category/category.action'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'
import { Filters, ICategory, PageTitle, IProduct } from './types'
import Search from '../../../components/portal/search'
import { listAllProductsAction } from '../../../store/product/product.action'
import ProductCard from '../../../components/portal/cards/product'
import PaginationSelector from '../../../components/paginate/selector/index.tsx'
import PaginationComponent from '../../../components/paginate/index'
import { SContainerAbout, STitleAbout, SubTitleAbout } from './styled.ts'

const Home: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const product: IProduct[] = useAppSelector((state) => state.product.all)
  const category: ICategory[] = useAppSelector((state) => state.category.all)
  const loading: boolean = useAppSelector((state) => state.category.loading)
  const [itensPerPage, setItensPerPage] = React.useState<number>(5)
  const [currentPage, setCurrentPage] = React.useState<number>(0)
  const { search } = useParams<string>()

  useEffect(() => {
    if (search) {
      const filters: Filters = {
        category: '',
        offset: currentPage,
        limit: itensPerPage,
        search: search,
        order: '',
        userId: ''
      }
      dispatch(listAllProductsAction(filters))
    }
  }, [itensPerPage, currentPage])

  useEffect(() => {
    dispatch(listAllCategoryAction())
  }, [dispatch])

  const CategoryList: React.FC<ICategory[]> = (category) => {
    return category?.length && category.map((item: ICategory, i: number) => {
      return (
        <Col md="6" xl="4" sm="12" xs="12" key={i}>
          <CardCategory item={item} />
        </Col>
      )
    })
  }

  if (loading) {
    return <Loading />
  }

  const ProductList: React.FC<IProduct[]> = (product) => {
    return product?.length && product.map((item: any, i: number) => {
      return (
        <Col md="6" xl="4" sm="12" xs="12" key={i}>
          <ProductCard item={{ ...item }} />
        </Col>
      )
    })
  }

  let pages: number = 0
  if (product?.length) {
    pages = Math.ceil(product[0]?.metadata || 0 / itensPerPage)
  }

  return (
    <>
      <Helmet title={title} />

      <Search />

      <STextInvest>
        <h5>+ de 1000 profissionais</h5>
        <h1>
          <strong>Seu website ou sistema com a sua cara.</strong>
        </h1>
        <br />
        <h4>Encontre profissionais talentosos para...</h4>
      </STextInvest>
      
      {!loading && product?.length !== 0 ? (
        <>
          <ContainerCards>{ProductList(product)}</ContainerCards>
          <SContainerPagination>
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
          </SContainerPagination>
        </>
      ) : (
        <></>
      )}

      <ContainerAssets>
        {!loading && category?.length !== 0 ? (
          <Slider {...settings}>{CategoryList(category)}</Slider>
        ) : (
          <h6>Não há categorias disponiveis</h6>
        )}
      </ContainerAssets>

      <ContainerFinancial>
        <ContainerText>
          <TextInvestiment>
            <h1>
              Os melhores <strong>profissionais</strong>
              <br />a um clique de distância!
            </h1>
          </TextInvestiment>
        </ContainerText>
      </ContainerFinancial>

      <ContainerResources>
        <STextInvest>
          <h1>
            <strong>Ainda não é um freelancer? Junte-se a nós!</strong>
          </h1>
          <br />
          <SButtonAbout onClick={() => navigate(`/signup`)}>
            ABRA SUA CONTA
          </SButtonAbout>
        </STextInvest>
      </ContainerResources>

      <SContainerAbout>
        <STitleAbout>Opiniões Dos Nossos Clientes</STitleAbout>
        <SubTitleAbout>O que acham da nossa plataforma...</SubTitleAbout>
        <CardAbout />
      </SContainerAbout>
    </>
  )
}
export default Home
