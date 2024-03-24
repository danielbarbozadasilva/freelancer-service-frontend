import React, { useState } from 'react'
import imgMan from '../../../assets/img/man.png'
import imgSearch from '../../../assets/img/search.png'
import { StyledSearch } from './styled'
import { Link } from 'react-router-dom'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)
  }

  return (
    <StyledSearch>
      <div className="container">
        <div className="left">
          <h1>
            Encontre os serviços <span>freelance</span> perfeitos para o seu
            negócio
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={imgSearch} alt="" />
              <input
                type="text"
                placeholder='busque por algum serviço..."'
                onChange={handleChange}
                value={search}
              />
            </div>
            <Link to={`/product/search/${search}`} reloadDocument>
              <button>Search</button>
            </Link>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>Edição de vídeo</button>
          </div>
        </div>
        <div className="right">
          <img src={imgMan} alt="" />
        </div>
      </div>
    </StyledSearch>
  )
}

export default Search
