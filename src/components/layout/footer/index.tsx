import React from 'react'
import './styled.css'
import twitter from '../../../assets/img/twitter.png'
import facebook from '../../../assets/img/facebook.png'
import linkedin from '../../../assets/img/linkedin.png'
import pinterest from '../../../assets/img/pinterest.png'
import instagram from '../../../assets/img/instagram.png'
import language from '../../../assets/img/language.png'
import coin from '../../../assets/img/coin.png'
import accessibility from '../../../assets/img/accessibility.png'
import { SLink } from './styled'
import { ICategory } from './types'
import { useAppSelector } from '../../../hooks'

const Footer: React.FC = () => {
  const category: ICategory[] = useAppSelector((state) => state.category.all)

  return (
    <div className="footer">
      <div className="container">
        <hr />
        <div className="top">
          <div className="item">
            <h2>Categorias</h2>
            {category?.length && category?.length <= 7 ? (
              category?.map((item: ICategory) => (
                <React.Fragment key={item.id}>
                  <SLink
                    className="link menuLink"
                    to={`/category/${item.id}`}
                    reloadDocument
                  >
                    <span>{item.name}</span>
                  </SLink>
                </React.Fragment>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="item">
            <h2>Sobre</h2>
            <span>Noticias</span>
            <span>Serviços</span>
            <span>Novidades</span>
            <span>Politica de privacidade</span>
            <span>Termos de serviço</span>
            <span>Propriedade intelectual</span>
          </div>
          <div className="item">
            <h2>Suporte</h2>
            <span>Ajuda & Suporte</span>
            <span>Confiança & segurança</span>
            <span>Prestar um serviço como Freelancer</span>
            <span>Adiquirir um serviço</span>
            <span>Privacidade</span>
            <span>Comunicação</span>
          </div>
          <div className="item">
            <h2>Comunidade</h2>
            <span>Sucesso do cliente</span>
            <span>Forum</span>
            <span>Eventos</span>
            <span>Blog</span>
            <span>Podcast</span>
            <span>Indique um amigo</span>
          </div>
          <div className="item">
            <h2>Mais informações</h2>
            <span>Guides</span>
            <span>Tenha inspiração</span>
            <span>Select</span>
            <span>Workspace</span>
            <span>Leia mais</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Freelancer</h2>
            <span>© Freelancer International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
            <div className="link">
              <img src={language} alt="" />
              <span>Portugues</span>
            </div>
            <div className="link">
              <img src={coin} alt="" />
              <span>BRL</span>
            </div>
            <img src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
