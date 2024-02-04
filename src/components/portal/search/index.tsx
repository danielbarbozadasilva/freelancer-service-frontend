import React, { useState } from 'react';
import './styled.scss';
import imgMan from '../../../assets/img/man.png';
import imgSearch from '../../../assets/img/search.png';
import { navigate } from '@reach/router';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSearch = () => {
    navigate(`/product/search/${search}`).then(() => navigate(0));
  };

  return (
    <div className="featured">
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
            <button onClick={handleSearch} disabled={!search}>
              Search
            </button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={imgMan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;