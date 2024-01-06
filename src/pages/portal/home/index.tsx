import React, { useEffect } from 'react'
import Loading from '../../../components/loading/page/index'
import { Col } from 'react-bootstrap'
import CardCategory from '../../../components/portal/work/cards/category/index'
import CardAbout from '../../../components/portal/work/cards/about/index'
import {
  ContainerImage,
  ContainerFinancial,
  ContainerText,
  ContainerResources,
  TextInvestiment,
  StyleImg,
  ContainerTitle,
  TextTitle,
  STextInvest,
  SButtonTitle,
  SButtonAbout,
  ContainerAssets,
  settings
} from '../../../components/portal/work/cards/styled'
import { listAllCategoryAction } from '../../../store/category/category.action'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useNavigate } from 'react-router-dom'

import Slider from 'react-slick'
import { loadingCategory, finishLoadingCategory, listAllCategory } from '../../../store/category/category.reducer'
import Featured from '../../../components/portal/featured'
import ProjectCard from '../../../components/portal/work/cards/projects'
const Image = require('../../../assets/img/work.jpg')

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const category = useAppSelector((state) => state.category.all)
  const loading = useAppSelector((state) => state.category.loading)
 
  useEffect(() => {
    dispatch(loadingCategory())
    listAllCategoryAction().then((result) => {
      if (result) {
        dispatch(listAllCategory(result))
      }
      dispatch(finishLoadingCategory())
    })
  }, [dispatch])

  const CategoryList: React.FC<any> = (category) => {
    return category?.map((item: any, i: any) => {
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

  return (
    <>
      {/* <ContainerImage>
        <StyleImg src={Image} />
      </ContainerImage> */}
      <Featured />
      {/* <ContainerTitle>
        <TextTitle>
          <h1>
            <strong>Acesso instantâneo a soluções web...</strong>
            <br />
            Invista num website ou sistema
          </h1>
        </TextTitle>
        <SButtonTitle onClick={() => navigate(`/signup`)}>
          ABRA SUA CONTA
        </SButtonTitle>
      </ContainerTitle> */}

      <STextInvest>
        <h5>+ de 1000 profissionais</h5>
        <h1>
          <strong>Seu website ou sistema com a sua cara.</strong>
        </h1>
        <br />
        <h4>Encontre profissionais talentosos para...</h4>
      </STextInvest>
      <ContainerAssets>
        {!loading && category?.length === 0 ? (
          <h6>Não há categorias disponiveis</h6>
        ) : (
          <Slider {...settings}>{CategoryList(category)}</Slider>
        )}
      </ContainerAssets>


      <ContainerFinancial>
        <ContainerText>
          <TextInvestiment>
            <h1>
              Os melhores <strong>profissionais</strong>
              <br />
              a um clique de distância
            </h1>
          </TextInvestiment>
        </ContainerText>
      </ContainerFinancial>
      
      {/* <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide> */}

      <ContainerResources>
        <STextInvest>
          <h1>
            <strong>Você é um freelancer? Junte-se a nós!</strong>
          </h1>
          <br/>
          <SButtonAbout onClick={() => navigate(`/signup`)}>
            ABRA SUA CONTA
          </SButtonAbout>
          <CardAbout />
        </STextInvest>
      </ContainerResources>
    </>
  )
}
export default Home
